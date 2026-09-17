"use client";

import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { type DataTableColumn } from "@/components/ui/DataTable";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { projects } from "@/lib/mock-data/projects";
import type { Project } from "@/lib/types";

export default function AdminProjectsPage() {
  const { showToast } = useToast();
  const notConnected = () => showToast("Not yet connected to the database.", "default");

  const columns: DataTableColumn<Project>[] = [
    {
      header: "Project",
      accessor: (row) => (
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-14 shrink-0 overflow-hidden bg-ivory-deep">
            <Image src={row.heroImage} alt="" fill sizes="56px" className="object-cover" />
          </div>
          <p className="text-charcoal">{row.title}</p>
        </div>
      ),
    },
    { header: "Category", accessor: (row) => row.category },
    { header: "Location", accessor: (row) => row.location },
    { header: "Year", accessor: (row) => row.year },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={notConnected}
            aria-label="Edit project"
            className="text-charcoal-soft transition-colors hover:text-charcoal"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={notConnected}
            aria-label="Delete project"
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
      <AdminHeader title="Projects" description="Portfolio entries shown on the public projects page." />

      <div className="flex-1 px-6 py-8 md:px-10">
        <div className="mb-5 flex justify-end">
          <Button onClick={notConnected} size="sm">
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </div>
        <DataTable columns={columns} rows={projects} rowKey={(row) => row.id} />
      </div>
    </>
  );
}
