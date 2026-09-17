import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/mock-data/site";
import { services } from "@/lib/mock-data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-display text-2xl tracking-[0.04em] text-charcoal">VELORA</span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-soft">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-sm text-charcoal">Studio</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-soft transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm text-charcoal">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-charcoal-soft transition-colors hover:text-charcoal"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm text-charcoal">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-charcoal-soft">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-charcoal">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-charcoal-soft md:flex-row md:items-center">
          <p>&copy; {year} VELORA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={siteConfig.social.instagram} className="hover:text-charcoal" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.social.pinterest} className="hover:text-charcoal" target="_blank" rel="noreferrer">
              Pinterest
            </a>
            <a href={siteConfig.social.linkedin} className="hover:text-charcoal" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
