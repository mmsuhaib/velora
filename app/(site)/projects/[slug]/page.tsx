import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/sections/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import ProjectGrid from "@/components/projects/ProjectGrid";
import RevealImage from "@/components/animations/RevealImage";
import { projects, getProjectBySlug, getRelatedProjects } from "@/lib/mock-data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} | VELORA` : "Project | VELORA" };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[460px] w-full items-end overflow-hidden bg-charcoal">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/10 to-charcoal/40" aria-hidden />
        <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/75">
              <span>{project.category}</span>
              <span className="border-l border-ivory/30 pl-6">{project.location}</span>
              <span className="border-l border-ivory/30 pl-6">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-charcoal-soft md:text-lg">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
            <div>
              <h3 className="text-sm text-charcoal">The challenge</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm text-charcoal">Our solution</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {project.gallery.map((image) => (
            <RevealImage
              key={image.id}
              src={image.url}
              alt={image.alt}
              className="aspect-[4/3] w-full"
            />
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <SectionHeading heading="Related projects" />
          <div className="mt-14">
            <ProjectGrid projects={related} />
          </div>
        </section>
      ) : null}

      <CTASection
        heading="Have a similar project?"
        body="Tell us about the space and the timeline — we'll follow up with next steps."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
    </>
  );
}
