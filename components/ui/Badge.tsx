import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "neutral" | "positive" | "attention" | "muted";
  className?: string;
};

const tones = {
  neutral: "bg-charcoal text-ivory",
  positive: "bg-[#4a5c3a] text-ivory",
  attention: "bg-sand-deep text-ivory",
  muted: "bg-ivory-deep text-charcoal-soft",
};

export default function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs px-2.5 py-1 text-xs font-medium capitalize",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
