"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)),
    [projects, activeCategory]
  );

  return (
    <div>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      <div className="mt-12">
        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
