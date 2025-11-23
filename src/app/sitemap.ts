import type { MetadataRoute } from "next";

import { CHANGE_FREQUENCY, PRIORITY } from "@/constants/sitemap";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // FIXME: Set base URL and tune changeFrequency/priority; extend with more routes if needed
  return [
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}/`,
      changeFrequency: CHANGE_FREQUENCY.DAILY,
      priority: PRIORITY.HIGHEST
    }
  ];
}
