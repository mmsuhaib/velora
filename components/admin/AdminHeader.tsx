"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { adminNavItems } from "./AdminSidebar";

type AdminHeaderProps = {
  title: string;
  description?: string;
};

export default function AdminHeader({ title, description }: AdminHeaderProps) {
  const pathname = usePathname();

  return (
    <div className="border-b border-line bg-ivory">
      <div className="flex items-center justify-between gap-4 px-6 py-6 md:px-10">
        <div>
          <h1 className="font-display text-2xl text-charcoal md:text-3xl">{title}</h1>
          {description ? <p className="mt-1 text-sm text-charcoal-soft">{description}</p> : null}
        </div>

        <div className="flex items-center gap-3 text-sm text-charcoal-soft">
          <span className="hidden sm:inline">Amina Rahman</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
            <UserRound className="h-4 w-4" />
          </span>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-6 pb-4 md:hidden">
        {adminNavItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-xs px-3.5 py-2 text-sm transition-colors",
                active ? "bg-charcoal text-ivory" : "text-charcoal-soft hover:bg-ivory-deep"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
