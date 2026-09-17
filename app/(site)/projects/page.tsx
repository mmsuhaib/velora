import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects } from "@/lib/mock-data/projects";

export const metadata: Metadata = {
  title: "Projects | VELORA",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <SectionHeading
        size="xl"
        heading="Selected work."
        body="A cross-section of shade, furniture, upholstery, curtain, and outdoor projects completed across the UAE."
      />
      <div className="mt-14">
        <ProjectsExplorer projects={projects} />
      </div>
    </section>
  );
}
