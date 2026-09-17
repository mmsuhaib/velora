"use client";

import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { type DataTableColumn } from "@/components/ui/DataTable";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { galleryItems } from "@/lib/mock-data/gallery";
import type { GalleryItem } from "@/lib/types";

export default function AdminGalleryPage() {
  const { showToast } = useToast();
  const notConnected = () => showToast("Not yet connected to the database.", "default");

  const columns: DataTableColumn<GalleryItem>[] = [
    {
      header: "Image",
      accessor: (row) => (
        <div className="relative h-12 w-16 shrink-0 overflow-hidden bg-ivory-deep">
          <Image src={row.url} alt="" fill sizes="64px" className="object-cover" />
        </div>
      ),
    },
    { header: "Caption", accessor: (row) => <span className="text-charcoal">{row.alt}</span> },
    { header: "Category", accessor: (row) => row.category },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={notConnected}
            aria-label="Edit image"
            className="text-charcoal-soft transition-colors hover:text-charcoal"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={notConnected}
            aria-label="Delete image"
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
      <AdminHeader title="Gallery" description="Images shown on the public gallery page." />

      <div className="flex-1 px-6 py-8 md:px-10">
        <div className="mb-5 flex justify-end">
          <Button onClick={notConnected} size="sm">
            <Plus className="h-4 w-4" />
            Add Image
          </Button>
        </div>
        <DataTable columns={columns} rows={galleryItems} rowKey={(row) => row.id} />
      </div>
    </>
  );
}
