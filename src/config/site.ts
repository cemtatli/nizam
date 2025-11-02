import type { SiteConfigType } from "@/types/site-config.type";

import { env } from "@/env";

// FIXME: Update site branding, default locale, theme color, social links, languages and OG image
export const siteConfig: SiteConfigType = {
  name: "Nizam | Next.js 16 Boilerplate",
  description:
    "Nizam is a modern Next.js 16 + TypeScript + Tailwind v4 boilerplate with best practices.",
  url: env.NEXT_PUBLIC_SITE_URL,
  author: "Ömer Gülçiçek",
  locale: "tr",
  themeColor: "#ffffff",
  keywords: ["nextjs", "typescript", "tailwindcss", "boilerplate", "starter"],
  social: {
    twitter: "@omergulcicek",
    github: "omergulcicek",
    linkedin: "omergulcicek"
  },
  ogImage: "/og.jpg",
  languages: {
    tr: "/tr",
    en: "/en",
    de: "/de",
    ar: "/ar"
  }
} as const;
