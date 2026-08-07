import { LandingPage } from "@/components/landing/LandingPage";
import { getLandingContent } from "@/lib/content";

export default function HomePage() {
  const content = getLandingContent();

  return <LandingPage content={content} />;
}
