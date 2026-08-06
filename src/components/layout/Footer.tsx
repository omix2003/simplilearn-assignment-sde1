import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { FooterContent } from "@/types/landing";

type FooterProps = {
  content: FooterContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-neutral-black text-white">
      <Container className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:gap-8 lg:py-16">
        <div className="max-w-[350px]">
          <Image
            src={content.logo.src}
            alt={content.logo.alt}
            width={content.logo.width}
            height={content.logo.height}
          />
          <div className="mt-8 space-y-1 text-sm text-neutral-silver">
            {content.copyright.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <ul className="mt-8 flex items-center gap-4">
            {content.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex overflow-hidden rounded-full"
                >
                  <Image
                    src={social.icon.src}
                    alt={social.icon.alt}
                    width={social.icon.width}
                    height={social.icon.height}
                    className="size-8"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {content.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xl font-semibold">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-silver transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-xl font-semibold">
            {content.newsletter.title}
          </h3>
          <form className="relative mt-5" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              {content.newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder={content.newsletter.placeholder}
              className="w-full rounded-md bg-white/20 px-4 py-3 pr-12 text-sm text-white placeholder:text-neutral-silver outline-none ring-brand focus:ring-2"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              aria-label={content.newsletter.submitLabel}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icons/send.svg"
                alt=""
                width={18}
                height={18}
                className="size-[18px]"
              />
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
