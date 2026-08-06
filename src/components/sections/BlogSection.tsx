import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BlogContent } from "@/types/landing";

type BlogSectionProps = {
  content: BlogContent;
};

export function BlogSection({ content }: BlogSectionProps) {
  return (
    <section id="faq" className="bg-white py-10 md:py-16">
      <Container>
        <SectionHeading
          title={content.title}
          description={content.description}
        />

        <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {content.posts.map((post) => (
            <li key={post.id} className="relative pb-20">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  className="h-[286px] w-full object-cover"
                />
              </div>

              <article className="absolute inset-x-4 bottom-0 rounded-lg bg-neutral-silver p-4 text-center shadow-[0_8px_16px_rgba(171,190,209,0.4)]">
                <h3 className="mx-auto min-h-[84px] max-w-[280px] text-lg font-semibold leading-snug text-neutral-d_grey sm:text-xl">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center justify-center gap-2 text-base font-semibold text-brand"
                >
                  {post.ctaLabel}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icons/arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4"
                  />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
