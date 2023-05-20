import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import React from "react";
import FlotingButton from "../src/components/FlotingButton";
import { BrowserRouter as Router } from "react-router-dom";
import { languagesButtons } from "../src/data/arrayLanguageButton";

describe("FotingButton", () => {
  beforeEach(() => {
    render(
      <Router>
        navigator={<FlotingButton type="string" data={languagesButtons} />}
      </Router>
    );
  });

  test("should render a component FlotingButton", () => {
    expect(screen.getByRole("floting")).toBeDefined();
  });

  test("should not show the buttons childrens", () => {
    expect(screen.queryByText(/javascript/i)).toBeNull();
  });

  test("should show the buttons childrens", () => {
    const button = screen.getByRole("floting");
    fireEvent.click(button);

    expect(screen.queryByText(/javascript/i)).toBeDefined();
    expect(screen.getByRole("children")).toBeDefined();
  });
});
