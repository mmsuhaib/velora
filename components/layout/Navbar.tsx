"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { navLinks } from "@/lib/mock-data/site";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolledPastHero(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolledPastHero || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          solid
            ? "border-b border-line bg-ivory/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className={cn(
              "font-display text-xl tracking-[0.04em] transition-colors duration-500",
              solid ? "text-charcoal" : "text-ivory"
            )}
          >
            VELORA
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm transition-colors duration-500",
                  solid ? "text-charcoal-soft hover:text-charcoal" : "text-ivory/85 hover:text-ivory"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                    solid ? "bg-charcoal" : "bg-ivory"
                  )}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "border px-5 py-2.5 text-sm transition-colors duration-500",
                solid
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
                  : "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
              )}
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "transition-colors duration-500 md:hidden",
              solid ? "text-charcoal" : "text-ivory"
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
