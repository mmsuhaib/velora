import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

type GalleryGridProps = {
  items: GalleryItem[];
  onSelect: (id: string) => void;
};

export default function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className="group relative mb-5 block w-full break-inside-avoid overflow-hidden bg-ivory-deep"
        >
          <Image
            src={item.url}
            alt={item.alt}
            width={800}
            height={800}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
        </button>
      ))}
    </div>
  );
}
