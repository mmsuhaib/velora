import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/animations/AnimatedText";
import { furnitureImg } from "@/lib/utils/images";

export default function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden bg-charcoal">
      <Image
        src={furnitureImg(2, 2400, 1500)}
        alt="A VELORA-furnished living space with tailored upholstery and natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-charcoal/50"
        aria-hidden
      />

      <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedText
            as="h1"
            text="VELORA"
            className="font-display text-[16vw] font-normal leading-[0.9] text-ivory md:text-[9vw] lg:text-[7.5rem]"
          />
          <AnimatedText
            as="p"
            text="Crafting Spaces. Shaping Comfort."
            delay={0.4}
            className="mt-4 max-w-lg font-display text-2xl italic text-ivory/90 md:text-3xl"
          />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/projects" variant="primary" className="bg-ivory text-charcoal hover:bg-ivory/85">
              View Projects
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 text-xs text-ivory/70 md:right-10 md:flex">
        <span>Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 motion-safe:animate-bounce" />
      </div>
    </section>
  );
}
