"use client";

import { cn } from "@/lib/utils/cn";
import type { Category } from "@/lib/types";

const categories: (Category | "All")[] = [
  "All",
  "Shades",
  "Furniture",
  "Upholstery",
  "Curtains",
  "Outdoor",
  "Beach & Pool",
];

type CategoryFilterProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              "border px-4 py-2 text-sm transition-colors duration-300",
              isActive
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-line text-charcoal-soft hover:border-charcoal hover:text-charcoal"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
