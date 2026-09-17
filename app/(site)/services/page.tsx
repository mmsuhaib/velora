import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/mock-data/services";

export const metadata: Metadata = {
  title: "Services | VELORA",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <SectionHeading
          size="xl"
          heading="Nine disciplines, one workshop."
          body="From car park canopies to a single reupholstered armchair, every service runs through the same Al Quoz workshop and the same design team."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <ServiceShowcase services={services} />
      </section>

      <CTASection
        heading="Not sure which service fits?"
        body="Tell us what you're working on and we'll point you to the right team."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
    </>
  );
}
