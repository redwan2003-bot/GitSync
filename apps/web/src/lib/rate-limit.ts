/**
 * Rate limiting utility for API routes
 * Uses in-memory store for single-instance deployment
 * For multi-instance, migrate to Redis
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitRecord>();

/**
 * Simple rate limiter
 * @param key Unique identifier (user ID, IP, etc.)
 * @param limit Number of requests allowed
 * @param window Time window in seconds
 */
export function checkRateLimit(key: string, limit = 60, window = 60): {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
} {
  const now = Date.now();
  const record = store.get(key);

  if (!record || now > record.resetTime) {
    // New window or first request
    store.set(key, {
      count: 1,
      resetTime: now + window * 1000,
    });
    return {
      allowed: true,
      remaining: limit - 1,
      resetAt: new Date(now + window * 1000),
    };
  }

  if (record.count < limit) {
    record.count += 1;
    return {
      allowed: true,
      remaining: limit - record.count,
      resetAt: new Date(record.resetTime),
    };
  }

  // Limit exceeded
  return {
    allowed: false,
    remaining: 0,
    resetAt: new Date(record.resetTime),
  };
}

/**
 * Reset rate limit for a key (for testing or manual override)
 */
export function resetRateLimit(key: string): void {
  store.delete(key);
}

/**
 * Cleanup old records every hour to prevent memory leak
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of store.entries()) {
    if (now > record.resetTime) {
      store.delete(key);
    }
  }
}, 60 * 60 * 1000);
