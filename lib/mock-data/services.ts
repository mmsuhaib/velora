import type { Service } from "@/lib/types";
import { furnitureImg, outdoorImg, curtainImg, shadeImg } from "@/lib/utils/images";

export const services: Service[] = [
  {
    id: "srv-1",
    index: 1,
    slug: "car-park-shade-installation-repair",
    name: "Car Park Shade Installation & Repair",
    category: "Shades",
    shortDescription:
      "Engineered tensile shade structures that protect fleets and daily parking from sun, heat, and weathering.",
    description:
      "We design, fabricate, and install tensioned membrane car park shades built for long-term exposure — from single-bay residential canopies to multi-bay commercial parking structures. Every structure is engineered to local wind-load standards and finished with UV-stabilised, high-density fabric that resists sagging, fading, and tearing. Our repair teams also service and re-tension existing structures, replacing worn fabric and hardware to extend the life of shades already in the ground.",
    highlights: [
      "Wind-load engineered steel and cable frameworks",
      "UV-stabilised HDPE shade fabric in a range of densities and colours",
      "Preventive maintenance and re-tensioning for existing structures",
      "Single-bay to multi-bay commercial installations",
    ],
    heroImage: shadeImg(2, 1920, 1080),
    thumbnailImage: shadeImg(2, 900, 700),
  },
  {
    id: "srv-2",
    index: 2,
    slug: "school-playground-shade-installation-repair",
    name: "School Playground Shade Installation & Repair",
    category: "Shades",
    shortDescription:
      "Safe, code-compliant shade cover for play areas, courts, and assembly spaces on school campuses.",
    description:
      "Playground shade structures carry a different set of demands than a car park — softer edges, higher UV-blocking fabric grades, and layouts that follow the shape of play equipment and running tracks rather than parking bays. We work directly with school facilities teams to plan installations around term schedules, using fully enclosed stitching and rounded fittings so the finished structure is as safe as it is functional. Repair call-outs are prioritised for schools to keep play areas usable year-round.",
    highlights: [
      "High UV-block fabric grades suited to prolonged outdoor play",
      "Layouts designed around existing play equipment and courts",
      "Installation scheduled around school term calendars",
      "Priority repair response for active school sites",
    ],
    heroImage: shadeImg(0, 1920, 1080),
    thumbnailImage: shadeImg(0, 900, 700),
  },
  {
    id: "srv-3",
    index: 3,
    slug: "upholstery-work",
    name: "Upholstery Work",
    category: "Upholstery",
    shortDescription:
      "Full reupholstery and restoration for sofas, dining chairs, headboards, and heirloom furniture.",
    description:
      "Our upholstery workshop handles everything from a single dining chair to a full living room suite. We strip pieces back to frame and webbing where needed, rebuild padding and springing, and finish in a fabric or leather chosen from our curated supplier range or a material you bring us yourself. Heirloom and antique pieces are treated with particular care, with original frames preserved wherever the timber allows.",
    highlights: [
      "Frame, webbing, and spring restoration for older pieces",
      "Curated fabric and leather library, or supply-your-own",
      "Antique and heirloom furniture handled with conservation care",
      "On-site assessment and fabric estimation before work begins",
    ],
    heroImage: furnitureImg(4, 1920, 1080),
    thumbnailImage: furnitureImg(4, 900, 700),
  },
  {
    id: "srv-4",
    index: 4,
    slug: "custom-furniture-design-manufacturing",
    name: "Custom Furniture Design & Manufacturing",
    category: "Furniture",
    shortDescription:
      "Bespoke furniture pieces designed around your space, drawn, prototyped, and built in-house.",
    description:
      "When an off-the-shelf piece won't fit the space or the brief, our design and manufacturing team builds it from a blank page. We work from sketches, measurements, or a reference you've seen, developing material and joinery specifications before anything is cut. Pieces are built in our own workshop, so changes during the process — a different arm profile, a deeper seat, a change of timber — are conversations, not change orders.",
    highlights: [
      "In-house design, drafting, and prototyping",
      "Solid timber, veneer, and mixed-material construction",
      "Built to exact room and doorway measurements",
      "Single-piece commissions through full furniture collections",
    ],
    heroImage: furnitureImg(15, 1920, 1080),
    thumbnailImage: furnitureImg(15, 900, 700),
  },
  {
    id: "srv-5",
    index: 5,
    slug: "curtain-manufacturing",
    name: "Curtain Manufacturing",
    category: "Curtains",
    shortDescription:
      "Made-to-measure drapery, sheers, and blackout curtains cut, sewn, and hung by our own team.",
    description:
      "We manufacture curtains to the exact drop and width of each window, in-house from cutting table to final hang. Our range covers heavyweight drapery for formal rooms, layered sheers for daylight control, and blackout linings for bedrooms and media rooms, all finished with your choice of heading style — pencil pleat, wave, or eyelet. A site visit and measure precede every order, so what arrives is what was specified.",
    highlights: [
      "Made-to-measure cutting and sewing for every window",
      "Drapery, sheers, and blackout linings",
      "Pencil pleat, wave, and eyelet heading styles",
      "On-site measure and track or pole installation included",
    ],
    heroImage: curtainImg(0, 1920, 1080),
    thumbnailImage: curtainImg(0, 900, 700),
  },
  {
    id: "srv-6",
    index: 6,
    slug: "furniture-importing",
    name: "Furniture Importing",
    category: "Furniture",
    shortDescription:
      "Sourced and imported furniture from trusted international manufacturers, handled door to door.",
    description:
      "For clients and trade partners who want a specific piece or collection from outside the region, we manage the import process end to end — sourcing from vetted manufacturers, handling freight and customs clearance, and inspecting every shipment on arrival before it reaches your door. We work with a network of partner workshops across Europe and Southeast Asia and can source to a budget or a specific reference piece.",
    highlights: [
      "Sourcing from a vetted international manufacturer network",
      "Freight, customs clearance, and delivery handled end to end",
      "Quality inspection on arrival before final delivery",
      "Sourcing to budget or to a specific reference piece",
    ],
    heroImage: furnitureImg(2, 1920, 1080),
    thumbnailImage: furnitureImg(2, 900, 700),
  },
  {
    id: "srv-7",
    index: 7,
    slug: "beach-pool-umbrella-solutions",
    name: "Beach & Pool Umbrella Solutions",
    category: "Beach & Pool",
    shortDescription:
      "Commercial-grade umbrellas and cabana shade for resorts, beach clubs, and residential pools.",
    description:
      "Poolside and beachfront umbrellas take a harder beating than almost any other outdoor product — salt air, constant sun, and daily opening and closing. We supply and install commercial-grade umbrella systems built for that cycle, from single cantilever units for a private terrace to full cabana rows for a resort pool deck, in fabric and frame finishes chosen to match the property.",
    highlights: [
      "Commercial-grade frames rated for daily use and salt exposure",
      "Cantilever, market, and cabana-style umbrella systems",
      "Fabric and frame finishes matched to property branding",
      "Resort, beach club, and residential-scale installations",
    ],
    heroImage: outdoorImg(1, 1920, 1080),
    thumbnailImage: outdoorImg(1, 900, 700),
  },
  {
    id: "srv-8",
    index: 8,
    slug: "beach-pool-chair-upholstery",
    name: "Beach & Pool Chair Upholstery",
    category: "Beach & Pool",
    shortDescription:
      "Marine-grade re-strapping and reupholstery for sun loungers, pool chairs, and cabana seating.",
    description:
      "Sun loungers and poolside seating fade, crack, and fail faster than almost any indoor upholstery, and replacing whole units is rarely necessary. We re-strap, re-sling, and reupholster in marine-grade textiles rated for chlorine, salt, and constant UV exposure, restoring worn seating fleets to a consistent finish across an entire pool deck or resort property.",
    highlights: [
      "Marine-grade textiles rated for chlorine and salt exposure",
      "Re-strapping and re-slinging for loungers and pool chairs",
      "Fleet-scale reupholstery for consistent property-wide finish",
      "On-site service to minimise pool deck downtime",
    ],
    heroImage: outdoorImg(0, 1920, 1080),
    thumbnailImage: outdoorImg(0, 900, 700),
  },
  {
    id: "srv-9",
    index: 9,
    slug: "custom-outdoor-furniture-upholstery-solutions",
    name: "Custom Outdoor Furniture & Upholstery Solutions",
    category: "Outdoor",
    shortDescription:
      "Bespoke outdoor seating, dining, and daybeds built and upholstered for year-round exposure.",
    description:
      "Outdoor furniture needs to hold its shape and colour through heat, humidity, and direct sun without the indoor luxuries of climate control. We design and build outdoor seating, dining, and daybed pieces on rot-resistant frames — teak, powder-coated aluminium, or stainless steel — upholstered in quick-dry foam and solution-dyed outdoor fabric, so the finished piece looks considered rather than merely weatherproof.",
    highlights: [
      "Teak, powder-coated aluminium, and stainless steel frames",
      "Quick-dry foam and solution-dyed outdoor fabrics",
      "Custom sizing for terraces, courtyards, and pool decks",
      "Cushion and upholstery refresh service for existing pieces",
    ],
    heroImage: furnitureImg(29, 1920, 1080),
    thumbnailImage: furnitureImg(29, 900, 700),
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
