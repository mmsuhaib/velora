import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/types";

export default function ServiceItem({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group -mx-2 flex items-center gap-5 border-b border-line px-2 py-8 transition-colors duration-300 hover:bg-ivory-deep/40 md:gap-8 md:py-10"
    >
      <span className="w-10 shrink-0 font-display text-xl text-charcoal-soft/50 md:w-14 md:text-2xl">
        {String(service.index).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl leading-snug text-charcoal transition-colors duration-300 group-hover:text-sand-deep md:text-3xl">
          {service.name}
        </h3>
        <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-charcoal-soft md:block md:text-base">
          {service.shortDescription}
        </p>
      </div>

      <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden md:block lg:h-24 lg:w-36">
        <Image
          src={service.thumbnailImage}
          alt=""
          fill
          sizes="150px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-charcoal-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal" />
    </Link>
  );
}
