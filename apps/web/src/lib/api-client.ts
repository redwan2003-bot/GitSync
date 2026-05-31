/**
 * API Client Utility - Error-safe, typed API client for both client and server components
 * Supports GET, POST, PUT, DELETE HTTP methods
 * Returns standard response shape with proper error handling
 */

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  code?: number;
}

export interface ApiRequestOptions extends Omit<RequestInit, 'body'> {
  timeout?: number;
  retries?: number;
}

export interface ApiRequestWithBody<B> extends ApiRequestOptions {
  body?: B;
}

/**
 * Generic API fetch function - works in both client and server components
 * Handles network errors, timeouts, and non-200 responses gracefully
 * 
 * @param url - The full URL or path to fetch from
 * @param options - Fetch options including timeout and retries
 * @returns ApiResponse with data, error, and code
 */
export async function fetchFromAPI<T>(
  url: string,
  options: ApiRequestOptions = {},
): Promise<ApiResponse<T>> {
  const { timeout = 30000, retries = 1, ...fetchOptions } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(fetchOptions.headers || {}),
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        let errorMessage = `HTTP ${response.status}`;

        try {
          if (contentType?.includes('application/json')) {
            const errorData = await response.json() as { message?: string; error?: string };
            errorMessage = errorData.message || errorData.error || errorMessage;
          } else {
            const text = await response.text();
            errorMessage = text || errorMessage;
          }
        } catch {
          // Fallback to status text if body parsing fails
          errorMessage = response.statusText || errorMessage;
        }

        return {
          error: errorMessage,
          code: response.status,
        };
      }

      const contentType = response.headers.get('content-type');
      
      // Handle empty responses
      if (response.status === 204 || response.status === 304) {
        return { data: undefined as unknown as T };
      }

      // Parse response based on content type
      if (contentType?.includes('application/json')) {
        try {
          const data = await response.json() as T;
          return { data };
        } catch (parseError) {
          return {
            error: 'Failed to parse JSON response',
            code: 500,
          };
        }
      } else if (contentType?.includes('text/')) {
        try {
          const data = (await response.text()) as unknown as T;
          return { data };
        } catch (parseError) {
          return {
            error: 'Failed to parse text response',
            code: 500,
          };
        }
      } else {
        // Return raw response for other content types
        const data = (await response.blob()) as unknown as T;
        return { data };
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if it's a timeout
      if (lastError.name === 'AbortError') {
        if (attempt < retries) {
          // Retry on timeout
          continue;
        }
        return {
          error: `Request timeout after ${timeout}ms`,
          code: 408,
        };
      }

      // Check if it's a network error
      if (error instanceof TypeError && lastError.message.includes('fetch')) {
        if (attempt < retries) {
          // Retry on network error
          continue;
        }
        return {
          error: 'Network request failed',
          code: 0,
        };
      }

      // Don't retry on other errors
      return {
        error: lastError.message || 'An unknown error occurred',
        code: 0,
      };
    }
  }

  // All retries exhausted
  return {
    error: lastError?.message || 'Request failed after all retries',
    code: 0,
  };
}

/**
 * Convenience method for calling backend API with method specification
 * Automatically adds the API base URL if not already present
 * 
 * @param path - The API path (will be appended to NEXT_PUBLIC_API_URL)
 * @param method - HTTP method (GET, POST, PUT, DELETE)
 * @param options - Request options including body, headers, timeout, retries
 * @returns ApiResponse with data, error, and code
 */
export async function callBackendAPI<T, B = Record<string, unknown>>(
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options: ApiRequestWithBody<B> = {},
): Promise<ApiResponse<T>> {
  const baseUrl = typeof window !== 'undefined' 
    ? process.env.NEXT_PUBLIC_API_URL || ''
    : process.env.NEXT_PUBLIC_API_URL || '';

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = baseUrl ? `${baseUrl}${normalizedPath}` : normalizedPath;

  const { body, ...restOptions } = options;

  const fetchOptions: RequestInit = {
    ...restOptions,
    method,
  };

  // Add body for methods that support it
  if (body && method !== 'GET' && method !== 'DELETE') {
    fetchOptions.body = JSON.stringify(body);
  }

  return fetchFromAPI<T>(fullUrl, fetchOptions as ApiRequestOptions);
}

/**
 * Helper function to check if an API response contains data
 * Useful for type narrowing in components
 */
export function hasData<T>(response: ApiResponse<T>): response is ApiResponse<T> & { data: T } {
  return response.data !== undefined;
}

/**
 * Helper function to check if an API response contains an error
 * Useful for type narrowing in components
 */
export function hasError<T>(response: ApiResponse<T>): response is ApiResponse<T> & { error: string } {
  return response.error !== undefined;
}
