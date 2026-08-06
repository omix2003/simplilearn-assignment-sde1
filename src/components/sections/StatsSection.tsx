import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/HighlightedTitle";
import type { StatsContent } from "@/types/landing";

type StatsSectionProps = {
  content: StatsContent;
};

export function StatsSection({ content }: StatsSectionProps) {
  return (
    <section id="product" className="bg-neutral-silver py-10 md:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[540px]">
          <HighlightedTitle
            as="h2"
            parts={content.title}
            className="text-2xl font-semibold leading-tight text-neutral-d_grey sm:text-3xl lg:text-4xl"
          />
          <p className="mt-2 text-sm text-neutral-grey sm:text-base">
            {content.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {content.items.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <div className="size-12 shrink-0 overflow-hidden">
                <Image
                  src={item.icon.src}
                  alt={item.icon.alt}
                  width={item.icon.width}
                  height={item.icon.height}
                  className="size-12 object-contain"
                />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none text-neutral-d_grey sm:text-[28px]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-neutral-grey">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
