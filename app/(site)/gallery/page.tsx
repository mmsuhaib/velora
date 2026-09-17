import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import GalleryExperience from "@/components/gallery/GalleryExperience";
import { galleryItems } from "@/lib/mock-data/gallery";

export const metadata: Metadata = {
  title: "Gallery | VELORA",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <SectionHeading
        size="xl"
        heading="A closer look."
        body="Finished work across shade structures, furniture, upholstery, curtains, and outdoor living."
      />
      <div className="mt-14">
        <GalleryExperience items={galleryItems} />
      </div>
    </section>
  );
}
