import Button from "@/components/ui/Button";

type CTASectionProps = {
  heading: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  heading,
  body,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <div className="bg-charcoal px-6 py-20 text-center md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl leading-[1.15] text-ivory md:text-5xl">{heading}</h2>
        {body ? <p className="mt-5 text-base leading-relaxed text-ivory/70 md:text-lg">{body}</p> : null}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary" className="bg-ivory text-charcoal hover:bg-ivory/85">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button
              href={secondaryHref}
              variant="secondary"
              className="border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
