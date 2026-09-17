import type { ContactMessage } from "@/lib/types";

export const contactMessages: ContactMessage[] = [
  {
    id: "cm-1",
    name: "Sara Boulos",
    email: "sara.boulos@example.com",
    subject: "Trade partnership enquiry",
    message:
      "I run an interior design studio in JVC and would like to discuss a trade account for custom furniture and curtain manufacturing on upcoming client projects.",
    status: "unread",
    createdAt: "2026-09-14",
  },
  {
    id: "cm-2",
    name: "Robert Chen",
    email: "robert.chen@example.com",
    subject: "Existing project follow-up",
    message:
      "Following up on the Marina Heights installation — one of the sheer panels is not gliding smoothly on the track. Could someone take a look?",
    status: "read",
    createdAt: "2026-09-10",
  },
  {
    id: "cm-3",
    name: "Noura Al Mazrouei",
    email: "noura.almazrouei@example.com",
    subject: "General enquiry — showroom visit",
    message: "Are your showroom and workshop open for walk-in visits, or is it appointment only?",
    status: "unread",
    createdAt: "2026-09-09",
  },
  {
    id: "cm-4",
    name: "Thomas Berger",
    email: "thomas.berger@example.com",
    subject: "Careers",
    message: "Do you have any openings for upholstery apprentices? I have two years of workshop experience.",
    status: "archived",
    createdAt: "2026-08-30",
  },
  {
    id: "cm-5",
    name: "Priya Nair",
    email: "priya.nair@example.com",
    subject: "Press enquiry",
    message: "Writing a feature on outdoor living trends in the region and would love a short interview with your design team.",
    status: "read",
    createdAt: "2026-08-24",
  },
];
