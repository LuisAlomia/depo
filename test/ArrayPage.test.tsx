import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "../src/components/Card";
import Grid from "../src/components/Grid";
import React from "react";
import ArrayMethod from "../src/types/ArrayMethods";

describe("test component Card of arrayPage", () => {
  const data: ArrayMethod = {
    id: 1,
    language: "Typescript",
    name: "name",
    description: "description",
  };

  test("should return a card or several cards", () => {
    render(<Card data={data} />);

    expect(screen.getByText(/description/i)).toBeDefined();
  });

  test("should return a card or several cards", () => {
    render(
      <Grid>
        <Card key={data.id} data={data} />
      </Grid>
    );

    expect(screen.getByText(/name/i)).toBeDefined();
  });
});
