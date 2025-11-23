export const LANGUAGES = {
  TR: "tr",
  EN: "en"
} as const;

export const LOCALES = {
  [LANGUAGES.TR]: { label: "Türkçe", tag: "tr-TR", flag: "🇹🇷" },
  [LANGUAGES.EN]: { label: "English", tag: "en-US", flag: "🇬🇧" }
} as const;

export type LanguageCode = keyof typeof LANGUAGES;
export type LocaleCode = keyof typeof LOCALES;
export const DEFAULT_LOCALE: LocaleCode = LANGUAGES.EN;
export const SUPPORTED_LOCALES = Object.keys(LOCALES) as LocaleCode[];
export const LOCALE_TAGS = Object.fromEntries(
  SUPPORTED_LOCALES.map((code) => [code, LOCALES[code].tag])
) as Record<LocaleCode, string>;
