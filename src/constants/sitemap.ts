export const CHANGE_FREQUENCY = {
  ALWAYS: "always",
  HOURLY: "hourly",
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  YEARLY: "yearly",
  NEVER: "never"
} as const;

export const PRIORITY = {
  HIGHEST: 1.0,
  HIGH: 0.8,
  MEDIUM: 0.6,
  LOW: 0.4,
  LOWEST: 0.2
} as const;

export const SITEMAP_LIMIT = 50_000 as const;
export const SITEMAP_CHUNK_SIZE = 10_000 as const;
export const EXCLUDE_PATHS = ["/admin", "/api", "/trpc"] as const;
