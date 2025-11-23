"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";

import { LOCALES, type LocaleCode } from "@/constants/i18n";

export function IntlProvider({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale?: string;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={LOCALES[locale as LocaleCode].timezone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
