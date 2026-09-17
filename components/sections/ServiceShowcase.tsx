import type { Service } from "@/lib/types";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ServiceItem from "./ServiceItem";

export default function ServiceShowcase({ services }: { services: Service[] }) {
  return (
    <ScrollReveal>
      <div className="border-t border-line">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </ScrollReveal>
  );
}
