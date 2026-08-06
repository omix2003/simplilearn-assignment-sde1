import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CommunityContent } from "@/types/landing";

type CommunitySectionProps = {
  content: CommunityContent;
};

export function CommunitySection({ content }: CommunitySectionProps) {
  return (
    <section id="feature" className="bg-white pb-10 md:pb-16">
      <Container>
        <SectionHeading
          title={content.title}
          description={content.description}
          className="mb-4"
        />

        <ul className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
          {content.cards.map((card) => (
            <li
              key={card.id}
              className="rounded-lg bg-white px-6 py-8 text-center shadow-[0_2px_4px_rgba(171,190,209,0.2)]"
            >
              <div className="mx-auto flex size-[65px] items-center justify-center overflow-hidden">
                <Image
                  src={card.icon.src}
                  alt={card.icon.alt}
                  width={card.icon.width}
                  height={card.icon.height}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mx-auto mt-4 max-w-[230px] text-2xl font-bold leading-snug text-neutral-d_grey">
                {card.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[250px] text-sm text-neutral-grey">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
