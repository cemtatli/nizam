export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  TIMEOUT: 10_000,
  RETRY_COUNT: 3,
  RETRY_DELAY: 1_000,
  CACHE_TIME: 5 * 60_000
} as const;

export const CONTENT_TYPES = {
  json: "application/json",
  formUrlEncoded: "application/x-www-form-urlencoded",
  formData: "multipart/form-data",
  text: "text/plain",
  html: "text/html",
  xml: "application/xml"
} as const;

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500
} as const;

export const HTTP_STATUS_TEXT = {
  OK: "OK",
  CREATED: "Created",
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  INTERNAL_SERVER_ERROR: "Internal Server Error"
} as const;

// TYPES
export type ApiConfig = keyof typeof API_CONFIG;
export type ContentType = keyof typeof CONTENT_TYPES;
export type HttpMethod = keyof typeof HTTP_METHODS;
export type HttpStatus = keyof typeof HTTP_STATUS;
