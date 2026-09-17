"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/mock-data/site";
import { getGsap, prefersReducedMotion } from "@/components/animations/gsapConfig";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    if (!prefersReducedMotion() && panelRef.current) {
      const { gsap } = getGsap();
      const ctx = gsap.context(() => {
        gsap.fromTo(panelRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
        gsap.fromTo(
          panelRef.current!.querySelectorAll("[data-menu-link]"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, delay: 0.1, ease: "power3.out" }
        );
      }, panelRef);
      return () => {
        ctx.revert();
        document.body.style.overflow = "";
      };
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-50 flex flex-col bg-ivory"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-display text-xl tracking-[0.04em] text-charcoal">VELORA</span>
        <button type="button" aria-label="Close menu" onClick={onClose} className="text-charcoal">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-menu-link
            onClick={onClose}
            className="border-b border-line py-4 font-display text-4xl leading-tight text-charcoal transition-colors hover:text-sand-deep"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div data-menu-link className="flex flex-col gap-1 px-8 pb-10 text-sm text-charcoal-soft">
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-charcoal">
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal">
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
