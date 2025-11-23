import type { Locale } from "next-intl";

export const LANGUAGE = {
  TR: "tr",
  EN: "en"
} as const;

export const LOCALE = {
  TR: "tr-TR",
  EN: "en-US"
} as const;

export const LOCALES = {
  [LANGUAGE.TR]: {
    label: "Türkçe",
    tag: LOCALE.TR,
    flag: "🇹🇷",
    dateFormat: "dddd, DD MMMM YYYY",
    timezone: "Europe/Istanbul"
  },
  [LANGUAGE.EN]: {
    label: "English",
    tag: LOCALE.EN,
    flag: "🇬🇧",
    dateFormat: "MM/DD/YYYY",
    timezone: "UTC"
  }
} as const;

export type LocaleCode = keyof typeof LOCALES;
export const DEFAULT_LOCALE: LocaleCode = LANGUAGE.EN;
export const SUPPORTED_LOCALES = Object.keys(LOCALES) as LocaleCode[];

export const LOCALE_TAGS = Object.fromEntries(
  SUPPORTED_LOCALES.map((code) => [code, LOCALES[code].tag])
) as Record<LocaleCode, Locale>;
