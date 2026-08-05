import type { ButtonItem } from "@/types/landing";

const variantClasses: Record<NonNullable<ButtonItem["variant"]>, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  ghost: "bg-transparent text-brand hover:bg-brand/5",
  outline:
    "bg-transparent text-brand border border-brand hover:bg-brand/5",
};

type ButtonProps = {
  item: ButtonItem;
  className?: string;
  showArrow?: boolean;
};

export function Button({ item, className = "", showArrow = false }: ButtonProps) {
  const variant = item.variant ?? "primary";

  return (
    <a
      href={item.href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-colors sm:text-base ${variantClasses[variant]} ${className}`}
    >
      <span>{item.label}</span>
      {showArrow ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/icons/arrow.svg"
          alt=""
          width={16}
          height={16}
          className="size-4 brightness-0 invert"
        />
      ) : null}
    </a>
  );
}
