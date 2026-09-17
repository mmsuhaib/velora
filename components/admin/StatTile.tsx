import type { LucideIcon } from "lucide-react";

type StatTileProps = {
  label: string;
  value: number | string;
  icon: LucideIcon;
};

export default function StatTile({ label, value, icon: Icon }: StatTileProps) {
  return (
    <div className="border border-line bg-ivory px-6 py-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-charcoal-soft">{label}</span>
        <Icon className="h-4 w-4 text-charcoal-soft" />
      </div>
      <p className="mt-4 font-display text-4xl text-charcoal">{value}</p>
    </div>
  );
}
