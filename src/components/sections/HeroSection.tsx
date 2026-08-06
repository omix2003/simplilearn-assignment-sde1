import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/HighlightedTitle";
import type { HeroContent } from "@/types/landing";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const slide = content.slides[0];

  if (!slide) {
    return null;
  }

  return (
    <section id="home" className="bg-neutral-silver">
      <Container className="grid items-center gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-10 lg:py-24 xl:gap-16">
        <div className="order-2 max-w-[657px] lg:order-1">
          <HighlightedTitle
            as="h1"
            parts={slide.title}
            className="text-4xl font-semibold leading-tight text-neutral-d_grey sm:text-5xl lg:text-[64px] lg:leading-[76px]"
          />
          <p className="mt-4 max-w-[540px] text-base text-neutral-grey sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8">
            <Button item={slide.cta} className="min-w-[128px]" />
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            width={slide.image.width}
            height={slide.image.height}
            priority
            className="h-auto w-full max-w-[391px]"
          />
        </div>
      </Container>

      <div
        className="flex items-center justify-center gap-2 pb-8"
        aria-label="Hero slides"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={`dot-${index}`}
            className={`size-2.5 rounded-full ${
              index === 0 ? "bg-brand" : "bg-brand/30"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
