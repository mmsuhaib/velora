import RevealImage from "@/components/animations/RevealImage";
import Button from "@/components/ui/Button";
import { furnitureImg } from "@/lib/utils/images";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <RevealImage
        src={furnitureImg(20, 1400, 1750)}
        alt="A VELORA craftsperson finishing an upholstered chair in the Al Quoz workshop"
        className="aspect-[4/5] w-full"
      />

      <div>
        <h2 className="font-display text-3xl leading-[1.1] text-charcoal md:text-5xl">
          Built by the people who stand behind it.
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-soft md:text-lg">
          Every piece that leaves our Al Quoz workshop is built or restored by hand —
          frames joined, springs tied, fabric cut and sewn on-site. Our fabricators
          and upholsterers average over a decade with VELORA, and it shows in the
          consistency of finish, from a single dining chair to a resort-wide fit-out.
        </p>
        <Button href="/about" variant="ghost" className="mt-8 px-0">
          Learn about VELORA
        </Button>
      </div>
    </div>
  );
}
