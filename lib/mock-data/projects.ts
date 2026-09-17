import type { Project } from "@/lib/types";
import { furnitureImg, outdoorImg, curtainImg, shadeImg } from "@/lib/utils/images";

export const projects: Project[] = [
  {
    id: "prj-1",
    slug: "al-barsha-community-car-park-canopy",
    title: "Al Barsha Community Car Park Canopy",
    category: "Shades",
    location: "Al Barsha, Dubai",
    year: 2024,
    serviceSlug: "car-park-shade-installation-repair",
    summary:
      "A 42-bay tensile canopy replacing an ageing structure across a residential community car park.",
    description:
      "The existing car park shade across this residential community had reached the end of its service life — sun-bleached fabric, corroded fittings, and several bays with no cover at all. VELORA replaced the full structure across 42 bays, re-engineering the steel framework to current wind-load standards and fitting a heavier-grade HDPE fabric in a charcoal finish to match the community's updated signage.",
    challenge:
      "The car park could not close during the works, and residents needed continuous access to their assigned bays throughout a project spanning several weeks.",
    solution:
      "We sequenced the installation in four zones, moving residents to temporary bays one section at a time so no more than a quarter of the car park was ever out of use, and scheduled the noisiest structural work outside peak arrival and departure hours.",
    heroImage: shadeImg(2, 1920, 1200),
    gallery: [
      { id: "prj-1-g1", url: shadeImg(2, 1600, 1200), alt: "Completed car park canopy over resident parking bays" },
      { id: "prj-1-g2", url: furnitureImg(17, 1600, 1200), alt: "Steel frame installation in progress" },
      { id: "prj-1-g3", url: shadeImg(0, 1600, 1200), alt: "Close-up of tensioned shade fabric fitting" },
      { id: "prj-1-g4", url: furnitureImg(28, 1600, 1200), alt: "Finished canopy at dusk" },
    ],
  },
  {
    id: "prj-2",
    slug: "greenfield-international-school-playground-shade",
    title: "Greenfield International School Playground Shade",
    category: "Shades",
    location: "Al Ain, Abu Dhabi",
    year: 2023,
    serviceSlug: "school-playground-shade-installation-repair",
    summary:
      "Full shade coverage across three play zones and a running track for a 900-student campus.",
    description:
      "Greenfield International School approached VELORA after several summers of unusable outdoor play space during peak heat hours. We covered three separate play zones and the edge of the running track with a connected series of shade structures, using a high UV-block fabric grade and fully enclosed stitching throughout for student safety.",
    challenge:
      "Term was in session throughout the installation window, and structures needed to be built around fixed play equipment without any downtime to student activity schedules.",
    solution:
      "Installation crews worked exclusively during after-school hours and a two-week mid-term break, with each zone signed off by the school's facilities team before students returned to that area.",
    heroImage: shadeImg(0, 1920, 1200),
    gallery: [
      { id: "prj-2-g1", url: shadeImg(0, 1600, 1200), alt: "Shade structure over school playground equipment" },
      { id: "prj-2-g2", url: shadeImg(1, 1600, 1200), alt: "Students using shaded play area" },
      { id: "prj-2-g3", url: furnitureImg(20, 1600, 1200), alt: "Frame detail along the running track" },
    ],
  },
  {
    id: "prj-3",
    slug: "emirates-hills-full-upholstery-refresh",
    title: "Emirates Hills Residence — Full Upholstery Refresh",
    category: "Upholstery",
    location: "Emirates Hills, Dubai",
    year: 2024,
    serviceSlug: "upholstery-work",
    summary:
      "Complete reupholstery of a formal living and dining suite, including two heirloom armchairs.",
    description:
      "This private residence commissioned a full reupholstery of its formal living and dining furniture ahead of a family event, including two armchairs original to the homeowner's parents that needed frame conservation rather than replacement. We rebuilt springing and padding across eleven pieces and finished the full suite in a matched Belgian linen.",
    challenge:
      "The two heirloom armchairs had structurally sound frames but decades-old jute webbing and horsehair padding that had compressed unevenly.",
    solution:
      "Rather than replace the frames, our workshop stripped both chairs back to timber, rebuilt the webbing and spring sets to original tension, and re-padded by hand before upholstering — preserving the original joinery entirely.",
    heroImage: furnitureImg(4, 1920, 1200),
    gallery: [
      { id: "prj-3-g1", url: furnitureImg(4, 1600, 1200), alt: "Reupholstered living room armchairs" },
      { id: "prj-3-g2", url: furnitureImg(6, 1600, 1200), alt: "Workshop detail of frame restoration" },
      { id: "prj-3-g3", url: furnitureImg(10, 1600, 1200), alt: "Finished dining chair upholstery" },
      { id: "prj-3-g4", url: furnitureImg(26, 1600, 1200), alt: "Completed formal living room" },
    ],
  },
  {
    id: "prj-4",
    slug: "oakwood-residence-bespoke-dining-suite",
    title: "The Oakwood Residence — Bespoke Dining Suite",
    category: "Furniture",
    location: "Jumeirah, Dubai",
    year: 2023,
    serviceSlug: "custom-furniture-design-manufacturing",
    summary:
      "A twelve-seat dining table and matching sideboard, designed and built for a non-standard room.",
    description:
      "The dining room's proportions ruled out every table in the homeowner's shortlist — either too short for twelve seats or too wide for the room's traffic path. VELORA designed a solid walnut table with a tapered leg profile that seats twelve within the available footprint, along with a matching sideboard built to the same joinery language.",
    challenge:
      "The room's doorway and stairwell meant the finished table could not be assembled inside the house — it had to be built to pass through in sections.",
    solution:
      "We engineered a bolted underframe connection at the table's centre span, allowing the top to travel in two halves and be joined on-site, with the join concealed beneath the final finish.",
    heroImage: furnitureImg(15, 1920, 1200),
    gallery: [
      { id: "prj-4-g1", url: furnitureImg(15, 1600, 1200), alt: "Completed walnut dining table" },
      { id: "prj-4-g2", url: furnitureImg(31, 1600, 1200), alt: "Workshop shot of table leg joinery" },
      { id: "prj-4-g3", url: furnitureImg(33, 1600, 1200), alt: "Matching sideboard detail" },
    ],
  },
  {
    id: "prj-5",
    slug: "marina-heights-drapery-sheers",
    title: "Marina Heights Penthouse — Drapery & Sheers",
    category: "Curtains",
    location: "Dubai Marina",
    year: 2024,
    serviceSlug: "curtain-manufacturing",
    summary:
      "Floor-to-ceiling drapery and layered sheers across a penthouse with 5.4-metre marina-facing glazing.",
    description:
      "This penthouse's living area is wrapped in 5.4-metre floor-to-ceiling glazing facing the marina — dramatic light, but very little control over glare through the afternoon. We manufactured a layered solution: motorised sheers for daytime glare control and heavyweight wave-heading drapery for evening privacy and light-blocking, both cut to the full height in a single unbroken drop.",
    challenge:
      "A 5.4-metre drop left no standard fabric width without a horizontal seam, which would have been visible against the glazing from both inside and outside the unit.",
    solution:
      "We sourced extra-wide sheer and drapery bolts specifically to run the full height without a seam, and fitted a motorised wave track rated for the extended drop and weight.",
    heroImage: curtainImg(0, 1920, 1200),
    gallery: [
      { id: "prj-5-g1", url: curtainImg(0, 1600, 1200), alt: "Floor-to-ceiling drapery against marina view" },
      { id: "prj-5-g2", url: curtainImg(1, 1600, 1200), alt: "Layered sheer curtains catching daylight" },
      { id: "prj-5-g3", url: curtainImg(2, 1600, 1200), alt: "Wave heading detail along the track" },
    ],
  },
  {
    id: "prj-6",
    slug: "palm-jumeirah-beach-club-cabana-fit-out",
    title: "Palm Jumeirah Beach Club — Cabana & Umbrella Fit-Out",
    category: "Beach & Pool",
    location: "Palm Jumeirah, Dubai",
    year: 2023,
    serviceSlug: "beach-pool-umbrella-solutions",
    summary:
      "Eighteen cabanas and a matching umbrella row along a private beach club frontage.",
    description:
      "This beach club rebuilt its entire beachfront offering ahead of season, and VELORA supplied and installed eighteen cabanas alongside a matching row of commercial-grade cantilever umbrellas. Frame finishes and fabric colourways were matched to the club's rebrand, with every unit rated for daily opening, salt air, and full sun exposure.",
    challenge:
      "The full fit-out needed to be complete before a fixed season-opening date, with beach access required by the club's existing members throughout installation.",
    solution:
      "We pre-fabricated cabana frames off-site and installed in a single rolling pass along the frontage, completing the full row in under two weeks without closing beach access at any point.",
    heroImage: outdoorImg(1, 1920, 1200),
    gallery: [
      { id: "prj-6-g1", url: outdoorImg(1, 1600, 1200), alt: "Row of beach cabanas along the shoreline" },
      { id: "prj-6-g2", url: outdoorImg(3, 1600, 1200), alt: "Umbrella row at the beach club" },
      { id: "prj-6-g3", url: outdoorImg(4, 1600, 1200), alt: "Cabana interior seating detail" },
    ],
  },
  {
    id: "prj-7",
    slug: "desert-rose-resort-lounger-reupholstery",
    title: "Desert Rose Resort — Poolside Lounger Reupholstery",
    category: "Beach & Pool",
    location: "Ras Al Khaimah",
    year: 2024,
    serviceSlug: "beach-pool-chair-upholstery",
    summary:
      "Re-strapping and reupholstery of 140 sun loungers across the resort's three pool decks.",
    description:
      "After six seasons of daily use, this resort's lounger fleet had become visibly inconsistent — mismatched replacement units, sun-bleached slings, and cracked strapping across all three pool decks. VELORA re-strapped and reupholstered the full fleet of 140 loungers in a single marine-grade textile, restoring a consistent look across the property without the cost of full replacement.",
    challenge:
      "The resort could not close any pool deck during peak season, and guest-facing areas needed to remain fully furnished throughout the works.",
    solution:
      "We rotated loungers through our workshop in batches of twenty, replacing each batch with a like-for-like temporary set so guest capacity was never reduced during the project.",
    heroImage: outdoorImg(0, 1920, 1200),
    gallery: [
      { id: "prj-7-g1", url: outdoorImg(0, 1600, 1200), alt: "Reupholstered sun loungers by the pool" },
      { id: "prj-7-g2", url: outdoorImg(5, 1600, 1200), alt: "Poolside lounger row detail" },
      { id: "prj-7-g3", url: outdoorImg(6, 1600, 1200), alt: "Marine-grade fabric close-up" },
    ],
  },
  {
    id: "prj-8",
    slug: "al-wasl-rooftop-outdoor-living-collection",
    title: "Al Wasl Rooftop Terrace — Outdoor Living Collection",
    category: "Outdoor",
    location: "Al Wasl, Dubai",
    year: 2024,
    serviceSlug: "custom-outdoor-furniture-upholstery-solutions",
    summary:
      "A custom daybed, dining, and lounge collection built for an irregular rooftop terrace footprint.",
    description:
      "This rooftop terrace wraps around a mechanical plant enclosure, leaving an irregular L-shaped footprint that no off-the-shelf outdoor collection fit cleanly. We designed a coordinated set — built-in-style daybed seating, a six-seat dining set, and modular lounge chairs — on powder-coated aluminium frames upholstered in solution-dyed outdoor fabric, scaled precisely to the terrace's dimensions.",
    challenge:
      "All furniture had to be craned to the rooftop in sections small enough for the building's service elevator, then assembled on-site without marking the newly laid decking.",
    solution:
      "We designed every piece with concealed bolted connections sized to the elevator's interior dimensions and fitted protective felt pads throughout assembly to protect the decking surface.",
    heroImage: furnitureImg(29, 1920, 1200),
    gallery: [
      { id: "prj-8-g1", url: furnitureImg(29, 1600, 1200), alt: "Outdoor daybed seating on rooftop terrace" },
      { id: "prj-8-g2", url: outdoorImg(2, 1600, 1200), alt: "Modular lounge chairs at dusk" },
      { id: "prj-8-g3", url: furnitureImg(34, 1600, 1200), alt: "Outdoor dining set detail" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .concat(projects.filter((p) => p.id !== project.id && p.category !== project.category))
    .slice(0, limit);
}
