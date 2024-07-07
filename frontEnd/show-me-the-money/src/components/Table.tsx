import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { FC, useMemo } from "react";
import { parsRowsToData } from "../utlity";

const columnHelper = createColumnHelper<any>();
interface TableProps {
  header: { Cells: { Value: string }[] };
  rows: any[];
}

const Table: FC<TableProps> = ({ header, rows }) => {
  const columns = useMemo(
    () =>
      header?.Cells?.map((cell, index) =>
        columnHelper.accessor(index.toString(), {
          header: () => cell?.Value,
          cell: ({ getValue }) =>
            (getValue()?.RowType === "Section"
              ? `**${getValue()?.Title}**`
              : getValue()?.Value) ?? "",
        })
      ),
    [header]
  );

  const data = parsRowsToData(rows);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
