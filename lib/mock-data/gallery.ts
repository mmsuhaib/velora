import type { GalleryItem } from "@/lib/types";
import { furnitureImg, outdoorImg, curtainImg, shadeImg } from "@/lib/utils/images";

export const galleryItems: GalleryItem[] = [
  { id: "gal-1", url: furnitureImg(0, 1200, 1500), alt: "Upholstered sofa in a formal living room", category: "Upholstery" },
  { id: "gal-2", url: furnitureImg(1, 1200, 900), alt: "Living room interior with custom seating", category: "Furniture" },
  { id: "gal-3", url: shadeImg(2, 1400, 1000), alt: "Tensile car park shade structure", category: "Shades" },
  { id: "gal-4", url: furnitureImg(3, 1200, 1500), alt: "Neutral-toned interior styling", category: "Furniture" },
  { id: "gal-5", url: furnitureImg(4, 1200, 900), alt: "Reupholstered armchair detail", category: "Upholstery" },
  { id: "gal-6", url: furnitureImg(5, 1200, 1500), alt: "Custom sofa in warm tones", category: "Furniture" },
  { id: "gal-7", url: furnitureImg(6, 1200, 900), alt: "Dining chair upholstery close-up", category: "Upholstery" },
  { id: "gal-8", url: furnitureImg(7, 1200, 1500), alt: "Living space with imported furniture", category: "Furniture" },
  { id: "gal-9", url: furnitureImg(8, 1200, 900), alt: "Styled living room seating", category: "Furniture" },
  { id: "gal-10", url: furnitureImg(9, 1200, 1500), alt: "Custom furniture piece in situ", category: "Furniture" },
  { id: "gal-11", url: furnitureImg(10, 1200, 900), alt: "Reupholstered lounge chair", category: "Upholstery" },
  { id: "gal-12", url: furnitureImg(11, 1200, 1500), alt: "Sofa detail with tailored cushions", category: "Furniture" },
  { id: "gal-13", url: curtainImg(0, 1200, 1500), alt: "Floor-to-ceiling drapery", category: "Curtains" },
  { id: "gal-14", url: curtainImg(1, 1200, 900), alt: "Layered sheer curtains", category: "Curtains" },
  { id: "gal-15", url: curtainImg(2, 1200, 1500), alt: "Curtain heading detail", category: "Curtains" },
  { id: "gal-16", url: shadeImg(0, 1400, 1000), alt: "School playground shade structure", category: "Shades" },
  { id: "gal-17", url: shadeImg(1, 1400, 1000), alt: "Shaded play area with students", category: "Shades" },
  { id: "gal-18", url: outdoorImg(1, 1400, 1000), alt: "Beach club umbrella row", category: "Beach & Pool" },
  { id: "gal-19", url: outdoorImg(0, 1400, 1000), alt: "Poolside sun loungers", category: "Beach & Pool" },
  { id: "gal-20", url: outdoorImg(2, 1400, 1000), alt: "Beach chairs by the water", category: "Beach & Pool" },
  { id: "gal-21", url: outdoorImg(3, 1400, 1000), alt: "Beach cabana seating", category: "Beach & Pool" },
  { id: "gal-22", url: outdoorImg(5, 1400, 1000), alt: "Pool deck lounger row", category: "Beach & Pool" },
  { id: "gal-23", url: furnitureImg(29, 1400, 1000), alt: "Outdoor daybed seating", category: "Outdoor" },
  { id: "gal-24", url: outdoorImg(6, 1400, 1000), alt: "Outdoor dining set on terrace", category: "Outdoor" },
  { id: "gal-25", url: furnitureImg(15, 1200, 900), alt: "Bespoke walnut dining table", category: "Furniture" },
  { id: "gal-26", url: furnitureImg(20, 1200, 1500), alt: "Custom furniture workshop piece", category: "Furniture" },
  { id: "gal-27", url: furnitureImg(26, 1200, 900), alt: "Formal dining room styling", category: "Furniture" },
  { id: "gal-28", url: shadeImg(2, 1400, 1000), alt: "Car park canopy at dusk", category: "Shades" },
];

export function getGalleryByCategory(category?: string) {
  if (!category || category === "All") return galleryItems;
  return galleryItems.filter((item) => item.category === category);
}
