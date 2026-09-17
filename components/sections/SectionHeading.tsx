import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  heading: string;
  body?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  xl: "text-5xl md:text-6xl lg:text-7xl",
};

export default function SectionHeading({
  heading,
  body,
  align = "left",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className={cn("font-display font-normal leading-[1.08] text-charcoal", sizes[size])}>
        {heading}
      </h2>
      {body ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-soft md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
