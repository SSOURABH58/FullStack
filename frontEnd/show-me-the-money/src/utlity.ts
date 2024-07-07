import { Cell, Row } from "./interface/Reports";

export const flattenRows = (rows: Row[]): Row[] => {
  return rows.reduce((acc: Row[], row: Row) => {
    return [...acc, row, ...flattenRows(row?.Rows ?? [])];
  }, []);
};

export const parsRowsToData = (rows: Row[]): Cell[][] => {
  return rows.map(
    (row) =>
      (row.RowType === "Section"
        ? [{ Value: row?.Title ?? "-", ...row }]
        : row.Cells) ?? []
  );
};
