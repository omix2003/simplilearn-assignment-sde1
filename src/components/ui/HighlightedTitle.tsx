import type { TextPart } from "@/types/landing";

type HighlightedTitleProps = {
  parts: TextPart[];
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function HighlightedTitle({
  parts,
  as: Tag = "h2",
  className = "",
}: HighlightedTitleProps) {
  return (
    <Tag className={className}>
      {parts.map((part) => (
        <span
          key={`${part.text}-${part.highlight ? "h" : "n"}`}
          className={part.highlight ? "text-brand" : undefined}
        >
          {part.text}
        </span>
      ))}
    </Tag>
  );
}
