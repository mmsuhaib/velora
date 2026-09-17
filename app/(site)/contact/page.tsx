import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { contactContent, siteConfig } from "@/lib/mock-data/site";

export const metadata: Metadata = {
  title: "Contact | VELORA",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <SectionHeading size="xl" heading={contactContent.heading} body={contactContent.body} />

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
          <div>
            <h3 className="text-sm text-charcoal">Workshop &amp; showroom</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{siteConfig.address}</p>
          </div>
          <div>
            <h3 className="text-sm text-charcoal">Reach us directly</h3>
            <div className="mt-3 flex flex-col gap-1.5 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-charcoal-soft transition-colors hover:text-charcoal"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-charcoal-soft transition-colors hover:text-charcoal"
              >
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-charcoal-soft transition-colors hover:text-charcoal"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-charcoal">Studio hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
