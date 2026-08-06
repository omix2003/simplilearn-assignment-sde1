import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { FeatureContent } from "@/types/landing";

type FeatureSectionProps = {
  content: FeatureContent;
};

export function FeatureSection({ content }: FeatureSectionProps) {
  const imageFirst = content.imagePosition === "left";

  return (
    <section id={content.id} className="bg-white py-8 md:py-12">
      <Container
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageFirst ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <div className="flex justify-center">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="h-auto w-full max-w-[442px]"
          />
        </div>

        <div className="max-w-[661px]">
          <h2 className="text-2xl font-semibold leading-tight text-neutral-d_grey sm:text-3xl lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-grey sm:text-base">
            {content.description}
          </p>
          <div className="mt-8">
            <Button item={content.cta} />
          </div>
        </div>
      </Container>
    </section>
  );
}
