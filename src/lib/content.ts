import landingData from "@/data/landing.json";
import type { LandingPageContent } from "@/types/landing";

export function getLandingContent(): LandingPageContent {
  return landingData as LandingPageContent;
}
