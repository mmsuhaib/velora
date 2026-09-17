import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Button from "@/components/ui/Button";
import { services, getServiceBySlug } from "@/lib/mock-data/services";
import { projects } from "@/lib/mock-data/projects";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  return { title: service ? `${service.name} | VELORA` : "Service | VELORA" };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((project) => project.serviceSlug === service.slug);

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden bg-charcoal">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/20 to-charcoal/40" aria-hidden />
        <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <span className="text-sm text-ivory/70">
              {String(service.index).padStart(2, "0")} — {service.category}
            </span>
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
              {service.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-charcoal-soft md:text-lg">
              {service.description}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-sm text-charcoal">What&apos;s included</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {service.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-charcoal-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sand-deep" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <SectionHeading heading="Related work" />
          <div className="mt-14">
            <ProjectGrid projects={relatedProjects} />
          </div>
        </section>
      ) : null}

      <CTASection
        heading="Ready to talk through your project?"
        body="Send a few details and we'll follow up with next steps."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
