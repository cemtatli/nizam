export const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "prod";
export const isDevelopment = process.env.NODE_ENV === "development";

export const isClient = (): boolean =>
  typeof window !== "undefined" && typeof document !== "undefined";
export const isServer = (): boolean => !isClient();
