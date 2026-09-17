import { cn } from "@/lib/utils/cn";

export type DataTableColumn<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  emptyMessage?: string;
};

export default function DataTable<T>({
  columns,
  rows,
  rowKey,
  emptyMessage = "Nothing here yet.",
}: DataTableProps<T>) {
  if (rows.length === 0) {
    return (
      <div className="border border-line px-6 py-16 text-center text-sm text-charcoal-soft">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-5 py-3.5 font-medium text-charcoal-soft"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className="border-b border-line last:border-b-0 hover:bg-ivory-deep/60"
            >
              {columns.map((column) => (
                <td key={column.header} className={cn("px-5 py-4 align-middle text-charcoal", column.className)}>
                  {column.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
