import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { FC, useMemo } from "react";
import { parsRowsToData } from "../utlity";
import { Row } from "../interface/Reports";
import Cell from "./Cell";

const columnHelper = createColumnHelper<any>();
interface TableProps {
  header: Row;
  rows: Row[];
}

const Table: FC<TableProps> = ({ header, rows }) => {
  const columns = useMemo(
    () =>
      header.Cells?.map((cell, index) =>
        columnHelper.accessor(index.toString(), {
          header: () => cell?.Value,
          cell: ({ getValue }) => (
            <Cell value={getValue()?.Value ?? ""} type={getValue()?.RowType} />
          ),
        })
      ) ?? [],
    [header]
  );

  const data = parsRowsToData(rows);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full border-2 border-collapse mt-3 ">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border-2 border-collapse ">
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
              <td key={cell.id} className="border-2 border-collapse ">
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
