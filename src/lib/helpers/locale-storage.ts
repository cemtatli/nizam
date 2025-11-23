import { isServer } from "@/lib/helpers/env";

type StorageValue<T> = T | null;

export const localStorageHelper = {
  set: <T>(key: string, value: T): void => {
    if (isServer()) return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: <T>(key: string): StorageValue<T> => {
    if (isServer()) return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  remove: (key: string): void => {
    if (isServer()) return;
    localStorage.removeItem(key);
  },

  clear: (): void => {
    if (isServer()) return;
    localStorage.clear();
  }
};
