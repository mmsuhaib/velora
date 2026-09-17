"use client";

import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { type DataTableColumn } from "@/components/ui/DataTable";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { services } from "@/lib/mock-data/services";
import type { Service } from "@/lib/types";

export default function AdminServicesPage() {
  const { showToast } = useToast();
  const notConnected = () => showToast("Not yet connected to the database.", "default");

  const columns: DataTableColumn<Service>[] = [
    {
      header: "Service",
      accessor: (row) => (
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-14 shrink-0 overflow-hidden bg-ivory-deep">
            <Image src={row.thumbnailImage} alt="" fill sizes="56px" className="object-cover" />
          </div>
          <div>
            <p className="text-charcoal">{row.name}</p>
            <p className="text-xs text-charcoal-soft">#{String(row.index).padStart(2, "0")}</p>
          </div>
        </div>
      ),
    },
    { header: "Category", accessor: (row) => row.category },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={notConnected}
            aria-label="Edit service"
            className="text-charcoal-soft transition-colors hover:text-charcoal"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={notConnected}
            aria-label="Delete service"
            className="text-charcoal-soft transition-colors hover:text-red-800"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
      className: "w-24",
    },
  ];

  return (
    <>
      <AdminHeader title="Services" description="The nine service lines shown across the public site." />

      <div className="flex-1 px-6 py-8 md:px-10">
        <div className="mb-5 flex justify-end">
          <Button onClick={notConnected} size="sm">
            <Plus className="h-4 w-4" />
            Add Service
          </Button>
        </div>
        <DataTable columns={columns} rows={services} rowKey={(row) => row.id} />
      </div>
    </>
  );
}
