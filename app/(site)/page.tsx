import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import { services } from "@/lib/mock-data/services";
import { projects } from "@/lib/mock-data/projects";
import { galleryItems } from "@/lib/mock-data/gallery";
import { homeIntro, siteConfig } from "@/lib/mock-data/site";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);
  const teaserImages = galleryItems.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <ScrollReveal>
          <p className="max-w-3xl font-display text-3xl leading-[1.25] text-charcoal md:text-4xl lg:text-5xl">
            {homeIntro.heading}
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal-soft md:text-lg">
            {homeIntro.body}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionHeading heading="What we build" body="Nine disciplines, one workshop." />
        <div className="mt-14">
          <ServiceShowcase services={services} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            heading="Recent projects"
            body="A selection of work across shade, furniture, and upholstery."
          />
          <Button href="/projects" variant="ghost" className="px-0">
            View all projects
          </Button>
        </div>
        <div className="mt-14">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <AboutSection />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            heading="From the gallery"
            body="A closer look at finished work, in and out of the workshop."
          />
          <Button href="/gallery" variant="ghost" className="px-0">
            View gallery
          </Button>
        </div>
        <ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {teaserImages.map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden bg-ivory-deep">
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <CTASection
        heading="Have a project in mind?"
        body="Tell us about the space and the timeline — we'll follow up with next steps, usually within one business day."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Browse Services"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SectionHeading heading="Visit the workshop" body={siteConfig.address} />
          <div className="flex flex-col gap-2 text-charcoal-soft md:items-end md:text-right">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-lg text-charcoal transition-colors hover:text-sand-deep"
            >
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal">
              {siteConfig.email}
            </a>
            <span className="text-sm">{siteConfig.hours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
