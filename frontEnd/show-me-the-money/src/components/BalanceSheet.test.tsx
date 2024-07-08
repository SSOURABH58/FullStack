import { render, screen } from "@testing-library/react";

import App from "../App";
import { describe, expect, test } from "vitest";

describe("BalanceSheet", () => {
  test("BalanceSheet mounts properly", () => {
    render(<App />); // BalanceSheet will require QuayClintProvider thats why we are using render App component
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
