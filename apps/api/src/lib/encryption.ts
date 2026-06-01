/**
 * Token encryption utility for secure storage of OAuth tokens
 * 
 * Uses SubtleCrypto AES-GCM for encryption (Cloudflare Workers compatible)
 * WARNING: In production, use proper key rotation and KMS
 */

const ENCRYPTION_KEY = process.env.TOKEN_ENCRYPTION_KEY || '';

/**
 * Encrypt a token for storage using AES-GCM
 * Returns { encryptedToken, iv, tag } as base64 strings
 */
export async function encryptToken(token: string): Promise<{
  encryptedToken: string;
  iv: string;
  tag: string;
}> {
  if (!ENCRYPTION_KEY) {
    throw new Error('TOKEN_ENCRYPTION_KEY not set - cannot encrypt tokens. Add TOKEN_ENCRYPTION_KEY=<32-char-min-key> to Cloudflare Worker secrets.');
  }

  try {
    const encoder = new TextEncoder();
    // Use first 32 chars of key for AES-256, pad if shorter
    const keyMaterial = ENCRYPTION_KEY.padEnd(32, '0').slice(0, 32);
    const keyBuffer = encoder.encode(keyMaterial);
    
    // Import key for AES-GCM
    const key = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );

    // Generate 12-byte IV (96 bits) for GCM
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Encrypt with AES-GCM (includes authentication tag)
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoder.encode(token)
    );

    // GCM output is ciphertext + 16-byte auth tag
    const ciphertextView = new Uint8Array(ciphertext);
    const encryptedBytes = ciphertextView.slice(0, -16);
    const authTag = ciphertextView.slice(-16);

    // Return base64-encoded for database storage
    return {
      encryptedToken: btoa(String.fromCharCode(...encryptedBytes)),
      iv: btoa(String.fromCharCode(...iv)),
      tag: btoa(String.fromCharCode(...authTag)),
    };
  } catch (err) {
    console.error('Token encryption failed:', err);
    throw new Error('Failed to encrypt token');
  }
}

/**
 * Decrypt a stored token
 */
export async function decryptToken(encryptedToken: string, iv: string, tag: string): Promise<string> {
  if (!ENCRYPTION_KEY) {
    throw new Error('TOKEN_ENCRYPTION_KEY not set - cannot decrypt tokens');
  }

  try {
    const encoder = new TextEncoder();
    const keyMaterial = ENCRYPTION_KEY.padEnd(32, '0').slice(0, 32);
    const keyBuffer = encoder.encode(keyMaterial);

    // Import key for AES-GCM
    const key = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'AES-GCM' },
      false,
      ['decrypt']
    );

    // Decode base64
    const ciphertextBytes = new Uint8Array(
      atob(encryptedToken).split('').map(c => c.charCodeAt(0))
    );
    const authTagBytes = new Uint8Array(
      atob(tag).split('').map(c => c.charCodeAt(0))
    );
    const ivBytes = new Uint8Array(
      atob(iv).split('').map(c => c.charCodeAt(0))
    );

    // Combine ciphertext + auth tag for decrypt
    const fullCiphertext = new Uint8Array(ciphertextBytes.length + authTagBytes.length);
    fullCiphertext.set(ciphertextBytes);
    fullCiphertext.set(authTagBytes, ciphertextBytes.length);

    // Decrypt
    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: ivBytes },
      key,
      fullCiphertext
    );

    return new TextDecoder().decode(plaintext);
  } catch (err) {
    console.error('Token decryption failed:', err);
    throw new Error('Failed to decrypt token (may be corrupted or wrong key)');
  }
}
