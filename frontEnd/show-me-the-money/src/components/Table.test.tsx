import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Table from "./Table";
import { Row } from "../interface/Reports";

const header: Row = {
  RowType: "Header",
  Cells: [
    {
      Value: "",
    },
    {
      Value: "08 July 2024",
    },
    {
      Value: "09 July 2023",
    },
  ],
};

describe("BalanceSheet", () => {
  test("BalanceSheet mounts properly", () => {
    render(<Table header={header} rows={[]} />); // BalanceSheet will require QuayClintProvider thats why we are using render App component
    expect(screen.getByText("08 July 2024")).toBeInTheDocument();
    expect(screen.getByText("09 July 2023")).toBeInTheDocument();
  });
});
