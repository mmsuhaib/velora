import { Hammer, FolderKanban, Images, MessageSquareText, Inbox } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StatTile from "@/components/admin/StatTile";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/mock-data/services";
import { projects } from "@/lib/mock-data/projects";
import { galleryItems } from "@/lib/mock-data/gallery";
import { quoteRequests } from "@/lib/mock-data/quote-requests";
import { contactMessages } from "@/lib/mock-data/contact-messages";

const statusTone = {
  new: "attention",
  unread: "attention",
  contacted: "neutral",
  read: "neutral",
  closed: "muted",
  archived: "muted",
} as const;

export default function AdminDashboardPage() {
  const recentQuotes = quoteRequests.slice(0, 5);

  return (
    <>
      <AdminHeader title="Overview" description="A snapshot of studio activity — mock data for now." />

      <div className="flex-1 px-6 py-8 md:px-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          <StatTile label="Total Projects" value={projects.length} icon={FolderKanban} />
          <StatTile label="Gallery Images" value={galleryItems.length} icon={Images} />
          <StatTile label="Services" value={services.length} icon={Hammer} />
          <StatTile label="Quote Requests" value={quoteRequests.length} icon={Inbox} />
          <StatTile label="Messages" value={contactMessages.length} icon={MessageSquareText} />
        </div>

        <div className="mt-10">
          <h2 className="text-sm text-charcoal">Recent quote requests</h2>
          <div className="mt-4 overflow-x-auto border border-line bg-ivory">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-5 py-3.5 font-medium text-charcoal-soft">Name</th>
                  <th className="px-5 py-3.5 font-medium text-charcoal-soft">Service</th>
                  <th className="px-5 py-3.5 font-medium text-charcoal-soft">Date</th>
                  <th className="px-5 py-3.5 font-medium text-charcoal-soft">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentQuotes.map((quote) => (
                  <tr key={quote.id} className="border-b border-line last:border-b-0">
                    <td className="px-5 py-4 text-charcoal">{quote.name}</td>
                    <td className="px-5 py-4 text-charcoal-soft">
                      {services.find((s) => s.slug === quote.serviceSlug)?.name ?? "General enquiry"}
                    </td>
                    <td className="px-5 py-4 text-charcoal-soft">{quote.createdAt}</td>
                    <td className="px-5 py-4">
                      <Badge tone={statusTone[quote.status]}>{quote.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
