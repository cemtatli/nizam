import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { CONTENT_TYPES, HTTP_STATUS_TEXT } from "@/constants/api";
import { env } from "@/env";

// FIXME: Set your API base URL and global headers
export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
  headers: {
    Accept: CONTENT_TYPES.json
  }
});

api.interceptors.request.use((config) => {
  // FIXME: Inject your auth token/header if required
  // const token = getToken();
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) return Promise.reject(err);
    return Promise.reject(new AxiosError(HTTP_STATUS_TEXT.INTERNAL_SERVER_ERROR));
  }
);

type Cfg = AxiosRequestConfig & { signal?: AbortSignal };

export const GET = async <T>(url: string, config?: Cfg) => (await api.get<T>(url, config)).data;

export const POST = async <T, B = unknown>(url: string, body?: B, config?: Cfg) =>
  (await api.post<T>(url, body, config)).data;

export const PUT = async <T, B = unknown>(url: string, body?: B, config?: Cfg) =>
  (await api.put<T>(url, body, config)).data;

export const DELETE = async <T>(url: string, config?: Cfg) =>
  (await api.delete<T>(url, config)).data;
