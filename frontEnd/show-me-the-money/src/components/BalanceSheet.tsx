import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useMemo } from "react";
import { BalanceSheetResponse } from "../interface/Reports";
import { flattenRows } from "../utlity";
import Table from "./Table";
import { apiInstance } from "../App";

const fetchBalanceSheet = async (): Promise<
  AxiosResponse<BalanceSheetResponse>
> => {
  return await apiInstance.get("/balance-sheet");
};

function BalanceSheet() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["BalanceSheet"],
    queryFn: fetchBalanceSheet,
  });

  const BalanceSheetReport = useMemo(() => data?.data?.Reports[0], [data]);

  const allRows = useMemo(
    () => flattenRows(BalanceSheetReport?.Rows ?? []),
    [BalanceSheetReport]
  );

  const header = useMemo(() => allRows[0], [allRows]);
  const rows = useMemo(() => allRows.slice(1), [allRows]);

  return (
    <div className="w-[100vw]">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <div className="w-full p-4">
          <p className="text-xl font-bold">{BalanceSheetReport?.ReportName}</p>
          <p className="text-md ">
            {BalanceSheetReport?.ReportTitles?.join(" ")}
          </p>
          <Table header={header} rows={rows} />
        </div>
      )}
    </div>
  );
}

export default BalanceSheet;
