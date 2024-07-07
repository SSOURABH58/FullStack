import React from "react";
import { RowType } from "../interface/Reports";

interface CellProps {
  value: string;
  type?: RowType;
}

const CellStyles: Record<RowType, string> = {
  Header: "text-4 font-bold",
  Section: "text-4 font-semibold",
  Row: "text-4 ",
  SummaryRow: "text-4 font-semibold",
};

const Cell: React.FC<CellProps> = ({ value, type = "Row" }) => {
  return <div className={`pl-2 min-h-6 ${CellStyles[type]}`}>{value}</div>;
};

export default Cell;
