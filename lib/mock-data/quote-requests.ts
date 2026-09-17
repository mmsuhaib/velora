import type { QuoteRequest } from "@/lib/types";

export const quoteRequests: QuoteRequest[] = [
  {
    id: "qr-1",
    name: "Fatima Al Suwaidi",
    email: "fatima.alsuwaidi@example.com",
    phone: "+971 50 123 4567",
    serviceSlug: "custom-furniture-design-manufacturing",
    message:
      "Looking for a custom dining table for a 4.2m x 3m dining room, seats 10. Walnut or oak preferred.",
    status: "new",
    createdAt: "2026-09-12",
  },
  {
    id: "qr-2",
    name: "James Whitfield",
    email: "james.whitfield@example.com",
    phone: "+971 55 987 6543",
    serviceSlug: "car-park-shade-installation-repair",
    message:
      "Need a quote for shade repair across 12 bays at our office building in Business Bay. Two sections have torn fabric.",
    status: "contacted",
    createdAt: "2026-09-08",
  },
  {
    id: "qr-3",
    name: "Layla Haddad",
    email: "layla.haddad@example.com",
    phone: "+971 52 456 7890",
    serviceSlug: "curtain-manufacturing",
    message:
      "Requesting a measure and quote for blackout curtains across 5 bedrooms, villa in Arabian Ranches.",
    status: "new",
    createdAt: "2026-09-05",
  },
  {
    id: "qr-4",
    name: "Michael Osei",
    email: "michael.osei@example.com",
    phone: "+971 56 234 5678",
    serviceSlug: "beach-pool-umbrella-solutions",
    message:
      "We're refreshing our hotel pool deck and need pricing for 20 cantilever umbrellas, branded fabric if possible.",
    status: "closed",
    createdAt: "2026-08-27",
  },
  {
    id: "qr-5",
    name: "Aisha Rahman",
    email: "aisha.rahman@example.com",
    phone: "+971 50 876 5432",
    serviceSlug: "upholstery-work",
    message: "Have two antique armchairs that need reupholstering, frames are original and in decent condition.",
    status: "contacted",
    createdAt: "2026-08-21",
  },
  {
    id: "qr-6",
    name: "Daniel Kessler",
    email: "daniel.kessler@example.com",
    phone: "+971 54 345 6789",
    serviceSlug: "school-playground-shade-installation-repair",
    message:
      "Facilities manager at a school in Al Ain, need a quote to extend shade coverage over a new play area.",
    status: "new",
    createdAt: "2026-08-15",
  },
];
