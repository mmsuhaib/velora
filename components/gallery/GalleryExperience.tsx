"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";
import CategoryFilter from "./CategoryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryExperience({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory)),
    [items, activeCategory]
  );

  return (
    <div>
      <CategoryFilter
        active={activeCategory}
        onChange={(category) => {
          setActiveCategory(category);
          setLightboxIndex(null);
        }}
      />

      <div className="mt-10">
        <GalleryGrid
          items={filtered}
          onSelect={(id) => setLightboxIndex(filtered.findIndex((item) => item.id === id))}
        />
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}
