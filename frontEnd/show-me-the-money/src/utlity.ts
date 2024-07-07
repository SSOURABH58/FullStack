export const flattenRows = (rows: any[]) => {
  return (
    rows?.reduce((acc, row): any[] => {
      return [...acc, row, ...flattenRows(row?.Rows ?? [])];
    }, []) ?? []
  );
};

export const parsRowsToData = (rows: any[]) => {
  return (
    rows?.map((row) =>
      row?.RowType === "Section" ? [{ Value: row?.Title, ...row }] : row?.Cells
    ) ?? []
  );
};
