import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaContent } from "@/types/landing";

type CtaSectionProps = {
  content: CtaContent;
};

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className="bg-neutral-silver py-12 md:py-16">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-[750px] text-3xl font-semibold leading-tight text-neutral-black sm:text-4xl lg:text-5xl lg:leading-[60px]">
          {content.title}
        </h2>
        <div className="mt-8">
          <Button item={content.button} showArrow />
        </div>
      </Container>
    </section>
  );
}
