import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ClientsContent } from "@/types/landing";

type ClientsSectionProps = {
  content: ClientsContent;
};

export function ClientsSection({ content }: ClientsSectionProps) {
  return (
    <section id="service" className="bg-white py-10 md:py-14">
      <Container>
        <SectionHeading
          title={content.title}
          description={content.description}
        />
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between md:mt-12">
          {content.logos.map((logo, index) => (
            <li key={`${logo.src}-${index}`} className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="size-12 object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
