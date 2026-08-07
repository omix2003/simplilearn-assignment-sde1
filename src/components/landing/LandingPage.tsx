import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogSection } from "@/components/sections/BlogSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import type { LandingPageContent } from "@/types/landing";

type LandingPageProps = {
  content: LandingPageContent;
};

export function LandingPage({ content }: LandingPageProps) {
  return (
    <>
      <Header content={content.header} />
      <main className="flex-1">
        <HeroSection content={content.hero} />
        <ClientsSection content={content.clients} />
        <CommunitySection content={content.community} />
        {content.features.map((feature, index) => (
          <div key={feature.id}>
            <FeatureSection content={feature} />
            {index === 0 ? <StatsSection content={content.stats} /> : null}
          </div>
        ))}
        <TestimonialSection content={content.testimonial} />
        <BlogSection content={content.blog} />
        <CtaSection content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
