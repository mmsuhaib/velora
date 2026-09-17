"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/types";

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({ items, index, onClose, onNavigate }: GalleryLightboxProps) {
  const item = items[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-charcoal/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-5 text-ivory">
        <span className="text-sm text-ivory/70">
          {index + 1} / {items.length}
        </span>
        <button type="button" aria-label="Close" onClick={onClose} className="text-ivory">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16">
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          className="absolute left-2 z-10 text-ivory/70 transition-colors hover:text-ivory md:left-6"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          className="relative h-full max-h-[80vh] w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.url}
            alt={item.alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          className="absolute right-2 z-10 text-ivory/70 transition-colors hover:text-ivory md:right-6"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      <p className="px-6 pb-6 text-center text-sm text-ivory/60">{item.alt}</p>
    </div>
  );
}
