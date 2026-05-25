import { describe, it, expect } from 'vitest';
import { encryptToken, decryptToken } from '../auth/encryption';

describe('AES-256-GCM Secure Encryption & Decryption', () => {
  const SECRET_KEY = 'super_secret_master_key_for_testing';
  const TOKEN = 'ghp_GitHubPersonalAccessTokenSecure123456';

  it('should encrypt a token and decrypt it back successfully', () => {
    const encrypted = encryptToken(TOKEN, SECRET_KEY);
    
    expect(encrypted.encryptedText).not.toBe(TOKEN);
    expect(encrypted.iv).toBeDefined();
    expect(encrypted.tag).toBeDefined();

    const decrypted = decryptToken(
      encrypted.encryptedText,
      encrypted.iv,
      encrypted.tag,
      SECRET_KEY
    );

    expect(decrypted).toBe(TOKEN);
  });

  it('should throw an error if decrypting with a wrong key', () => {
    const encrypted = encryptToken(TOKEN, SECRET_KEY);
    
    expect(() => {
      decryptToken(
        encrypted.encryptedText,
        encrypted.iv,
        encrypted.tag,
        'wrong_key_123'
      );
    }).toThrow();
  });
});
