import * as crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // For GCM

export interface EncryptedData {
  encryptedText: string;
  iv: string;
  tag: string;
}

export function encryptToken(token: string, secretKey: string): EncryptedData {
  // Ensure the key is exactly 32 bytes (256 bits)
  const key = crypto.createHash('sha256').update(secretKey).digest();
  const iv = crypto.randomBytes(IV_LENGTH);

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(token, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const tag = cipher.getAuthTag().toString('hex');

  return {
    encryptedText: encrypted,
    iv: iv.toString('hex'),
    tag: tag,
  };
}

export function decryptToken(encryptedText: string, ivHex: string, tagHex: string, secretKey: string): string {
  const key = crypto.createHash('sha256').update(secretKey).digest();
  const iv = Buffer.from(ivHex, 'hex');
  const tag = Buffer.from(tagHex, 'hex');

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
