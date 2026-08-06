import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { TestimonialContent } from "@/types/landing";

type TestimonialSectionProps = {
  content: TestimonialContent;
};

export function TestimonialSection({ content }: TestimonialSectionProps) {
  return (
    <section id="testimonial" className="bg-neutral-silver py-10 md:py-14">
      <Container className="grid items-center gap-10 lg:grid-cols-[326px_1fr] lg:gap-16">
        <div className="mx-auto overflow-hidden rounded-lg lg:mx-0">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="h-auto w-full max-w-[326px] object-cover"
          />
        </div>

        <div>
          <p className="text-sm leading-6 text-neutral-grey sm:text-base">
            {content.quote}
          </p>
          <p className="mt-4 text-xl font-semibold text-brand">
            {content.author}
          </p>
          <p className="mt-1 text-sm text-neutral-l_grey">{content.role}</p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center gap-6">
              {content.logos.map((logo, index) => (
                <li key={`${logo.src}-${index}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="size-10 object-contain"
                  />
                </li>
              ))}
            </ul>

            <a
              href={content.cta.href}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand"
            >
              {content.cta.label}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icons/arrow.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
