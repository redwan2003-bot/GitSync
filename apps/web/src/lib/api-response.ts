import { NextResponse } from 'next/server';

/**
 * Standardized API response formats for consistency across all endpoints
 * 
 * Success Response:
 * { success: true, data: {...}, timestamp: ISO8601 }
 * 
 * Error Response:
 * { success: false, error: { code: string, message: string }, timestamp: ISO8601 }
 */

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: string;
}

/**
 * Create a standardized success response
 */
export function successResponse<T = unknown>(
  data: T,
  status: number = 200
): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    } as ApiSuccessResponse<T>,
    { status }
  );
}

export function errorResponse(
  code: string,
  message: string,
  status: number = 400,
  details?: unknown
): NextResponse {
  const error: { code: string; message: string; details?: unknown } = {
    code,
    message,
  };

  if (details) {
    error.details = details;
  }

  return NextResponse.json(
    {
      success: false,
      error,
      timestamp: new Date().toISOString(),
    } as ApiErrorResponse,
    { status }
  );
}

/**
 * Common error codes
 */
export const ErrorCodes = {
  // Authentication
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',

  // Validation
  INVALID_INPUT: 'INVALID_INPUT',
  MISSING_FIELD: 'MISSING_FIELD',
  INVALID_FORMAT: 'INVALID_FORMAT',

  // Rate limiting
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',

  // Not found
  NOT_FOUND: 'NOT_FOUND',

  // Conflict
  CONFLICT: 'CONFLICT',

  // Server errors
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
} as const;

/**
 * Helper to create rate limit error response with Retry-After header
 */
export function rateLimitErrorResponse(resetAt: Date): NextResponse {
  const retryAfterSeconds = Math.ceil((resetAt.getTime() - Date.now()) / 1000);

  return NextResponse.json(
    {
      success: false,
      error: {
        code: ErrorCodes.RATE_LIMIT_EXCEEDED,
        message: `Rate limit exceeded. Please retry after ${retryAfterSeconds} seconds.`,
      },
      timestamp: new Date().toISOString(),
    } as ApiErrorResponse,
    {
      status: 429,
      headers: {
        'Retry-After': retryAfterSeconds.toString(),
      },
    }
  );
}

/**
 * Helper to create validation error response
 */
export function validationErrorResponse(
  errors: Record<string, string[]>
): NextResponse {
  return errorResponse(
    ErrorCodes.INVALID_INPUT,
    'Input validation failed',
    400,
    { fields: errors }
  );
}
