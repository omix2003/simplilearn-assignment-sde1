"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderContent } from "@/types/landing";

type HeaderProps = {
  content: HeaderContent;
};

export function Header({ content }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-silver/70 bg-white/95 backdrop-blur">
      <Container className="grid h-[84px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="justify-self-start" aria-label={content.logo.alt}>
          <Image
            src={content.logo.src}
            alt={content.logo.alt}
            width={content.logo.width}
            height={content.logo.height}
            priority
          />
        </a>

        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-base text-neutral-grey transition-colors hover:text-neutral-d_grey"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          {content.actions.map((action) => (
            <Button
              key={action.label}
              item={action}
              className={
                action.variant === "ghost"
                  ? "px-4 py-2.5"
                  : "px-5 py-2.5"
              }
            />
          ))}
        </div>

        <button
          type="button"
          className="justify-self-end inline-flex size-10 items-center justify-center rounded-md border border-neutral-silver text-neutral-d_grey lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={content.mobileMenuLabel}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{content.mobileMenuLabel}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-neutral-silver bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile primary">
              {content.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-neutral-grey"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 sm:flex-row">
              {content.actions.map((action) => (
                <Button key={action.label} item={action} className="w-full" />
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
