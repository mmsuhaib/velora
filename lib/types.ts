export type Category =
  | "Shades"
  | "Furniture"
  | "Upholstery"
  | "Curtains"
  | "Outdoor"
  | "Beach & Pool";

export type Service = {
  id: string;
  index: number;
  slug: string;
  name: string;
  category: Category;
  shortDescription: string;
  description: string;
  highlights: string[];
  heroImage: string;
  thumbnailImage: string;
};

export type ProjectImage = {
  id: string;
  url: string;
  alt: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: Category;
  location: string;
  year: number;
  serviceSlug: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  heroImage: string;
  gallery: ProjectImage[];
};

export type GalleryItem = {
  id: string;
  url: string;
  alt: string;
  category: Category;
};

export type QuoteRequestStatus = "new" | "contacted" | "closed";

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceSlug: string;
  message: string;
  status: QuoteRequestStatus;
  createdAt: string;
};

export type ContactMessageStatus = "unread" | "read" | "archived";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactMessageStatus;
  createdAt: string;
};
