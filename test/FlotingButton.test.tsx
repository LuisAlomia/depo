import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import React from "react";
import FlotingButton from "../src/shared/components/FlotingButton";

describe("FotingButton", () => {
  test("should render a component FlotingButton", () => {
    render(<FlotingButton />);

    expect(screen.getByRole("floting")).toBeDefined();
  });

  test("should not show the buttons childrens", () => {
    render(<FlotingButton />);

    expect(screen.queryByText(/javascript/i)).toBeNull();
  });

  test("should show the buttons childrens", () => {
    render(<FlotingButton />);

    const button = screen.getByRole("floting");
    fireEvent.click(button);

    expect(screen.queryByText(/javascript/i)).toBeDefined();
    expect(screen.getByRole("children")).toBeDefined();
  });
});
