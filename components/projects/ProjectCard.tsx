import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-deep">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl leading-snug text-charcoal">{project.title}</h3>
          <p className="mt-1 text-sm text-charcoal-soft">
            {project.location} — {project.year}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-xs text-charcoal-soft">{project.category}</span>
      </div>
    </Link>
  );
}
