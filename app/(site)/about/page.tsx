import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import RevealImage from "@/components/animations/RevealImage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { aboutContent } from "@/lib/mock-data/site";
import { furnitureImg } from "@/lib/utils/images";

export const metadata: Metadata = {
  title: "About | VELORA",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <SectionHeading size="xl" heading={aboutContent.hero.heading} body={aboutContent.hero.body} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <RevealImage
          src={furnitureImg(3, 2400, 1200)}
          alt="Interior of the VELORA workshop and showroom in Al Quoz"
          className="aspect-[16/9] w-full"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <RevealImage
            src={furnitureImg(24, 1400, 1750)}
            alt="Upholstery workshop detail"
            className="aspect-[4/5] w-full md:order-2"
          />
          <div className="md:order-1">
            <h2 className="font-display text-3xl leading-[1.1] text-charcoal md:text-4xl">
              {aboutContent.story.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-charcoal-soft md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-[1.1] text-charcoal md:text-4xl">
              {aboutContent.craftsmanship.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal-soft md:text-lg">
              {aboutContent.craftsmanship.body}
            </p>
          </div>
          <RevealImage
            src={furnitureImg(17, 1400, 1750)}
            alt="Close detail of hand-finished upholstery work"
            className="aspect-[4/5] w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionHeading heading={aboutContent.whyVelora.heading} />
        <ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-14 md:grid-cols-3 md:gap-12">
            {aboutContent.whyVelora.points.map((point) => (
              <div key={point.title}>
                <h3 className="font-display text-xl text-charcoal md:text-2xl">{point.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft md:text-base">{point.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionHeading heading={aboutContent.approach.heading} />
        <ScrollReveal>
          <div className="mt-14 border-t border-line">
            {aboutContent.approach.steps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col gap-2 border-b border-line py-8 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-10 shrink-0 font-display text-xl text-charcoal-soft/50 sm:w-14 sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal md:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal-soft md:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <CTASection
        heading="Start with a conversation."
        body="A site visit or workshop consultation is the first step for every project, large or small."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Browse Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
