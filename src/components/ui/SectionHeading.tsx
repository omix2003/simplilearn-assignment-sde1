type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-[628px] ${alignment} ${className}`}>
      <h2
        className={`text-2xl font-semibold leading-tight text-neutral-d_grey sm:text-3xl lg:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm text-neutral-grey sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
