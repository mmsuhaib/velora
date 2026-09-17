"use client";

import { Trash2 } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { type DataTableColumn } from "@/components/ui/DataTable";
import Badge from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { quoteRequests } from "@/lib/mock-data/quote-requests";
import { contactMessages } from "@/lib/mock-data/contact-messages";
import { services } from "@/lib/mock-data/services";
import type { QuoteRequest, ContactMessage } from "@/lib/types";

const statusTone = {
  new: "attention",
  unread: "attention",
  contacted: "neutral",
  read: "neutral",
  closed: "muted",
  archived: "muted",
} as const;

export default function AdminInquiriesPage() {
  const { showToast } = useToast();
  const notConnected = () => showToast("Not yet connected to the database.", "default");

  const quoteColumns: DataTableColumn<QuoteRequest>[] = [
    {
      header: "From",
      accessor: (row) => (
        <div>
          <p className="text-charcoal">{row.name}</p>
          <p className="text-xs text-charcoal-soft">{row.email}</p>
        </div>
      ),
    },
    {
      header: "Service",
      accessor: (row) => services.find((s) => s.slug === row.serviceSlug)?.name ?? "General enquiry",
    },
    { header: "Date", accessor: (row) => row.createdAt },
    { header: "Status", accessor: (row) => <Badge tone={statusTone[row.status]}>{row.status}</Badge> },
    {
      header: "",
      accessor: () => (
        <button
          type="button"
          onClick={notConnected}
          aria-label="Delete quote request"
          className="text-charcoal-soft transition-colors hover:text-red-800"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      ),
      className: "w-12",
    },
  ];

  const messageColumns: DataTableColumn<ContactMessage>[] = [
    {
      header: "From",
      accessor: (row) => (
        <div>
          <p className="text-charcoal">{row.name}</p>
          <p className="text-xs text-charcoal-soft">{row.email}</p>
        </div>
      ),
    },
    { header: "Subject", accessor: (row) => row.subject },
    { header: "Date", accessor: (row) => row.createdAt },
    { header: "Status", accessor: (row) => <Badge tone={statusTone[row.status]}>{row.status}</Badge> },
    {
      header: "",
      accessor: () => (
        <button
          type="button"
          onClick={notConnected}
          aria-label="Delete message"
          className="text-charcoal-soft transition-colors hover:text-red-800"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      ),
      className: "w-12",
    },
  ];

  return (
    <>
      <AdminHeader title="Inquiries" description="Quote requests and contact messages submitted through the site." />

      <div className="flex-1 px-6 py-8 md:px-10">
        <div>
          <h2 className="text-sm text-charcoal">Quote requests</h2>
          <div className="mt-4">
            <DataTable columns={quoteColumns} rows={quoteRequests} rowKey={(row) => row.id} />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm text-charcoal">Contact messages</h2>
          <div className="mt-4">
            <DataTable columns={messageColumns} rows={contactMessages} rowKey={(row) => row.id} />
          </div>
        </div>
      </div>
    </>
  );
}
