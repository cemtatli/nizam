export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  locale: string;
  themeColor: string;
  keywords: string[];
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  ogImage: string;
  languages: Record<string, string>;
}
