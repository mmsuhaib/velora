"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Hammer,
  FolderKanban,
  Images,
  MessagesSquare,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export const adminNavItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Services", href: "/admin/services", icon: Hammer },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Gallery", href: "/admin/gallery", icon: Images },
  { label: "Inquiries", href: "/admin/inquiries", icon: MessagesSquare },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-line bg-ivory md:flex">
      <div className="px-7 py-7">
        <Link href="/admin" className="font-display text-xl tracking-[0.04em] text-charcoal">
          VELORA
        </Link>
        <p className="mt-1 text-xs text-charcoal-soft">Studio admin</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-4">
        {adminNavItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xs px-3.5 py-2.5 text-sm transition-colors",
                active ? "bg-charcoal text-ivory" : "text-charcoal-soft hover:bg-ivory-deep hover:text-charcoal"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-line px-4 py-4">
        <Link
          href="/admin/login"
          className="flex items-center gap-3 rounded-xs px-3.5 py-2.5 text-sm text-charcoal-soft transition-colors hover:bg-ivory-deep hover:text-charcoal"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Link>
      </div>
    </aside>
  );
}
