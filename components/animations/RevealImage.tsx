"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import ScrollReveal from "./ScrollReveal";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
};

export default function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  zoom = true,
}: RevealImageProps) {
  return (
    <ScrollReveal
      className={cn("group relative overflow-hidden bg-ivory-deep", className)}
      y={24}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out",
          zoom && "motion-safe:group-hover:scale-[1.06]",
          imgClassName
        )}
      />
    </ScrollReveal>
  );
}
