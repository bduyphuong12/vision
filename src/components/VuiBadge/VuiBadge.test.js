import React from "react";
import { render, screen } from "../../test-utils";
import VuiBadge from "./index";

describe("VuiBadge component", () => {
  it("renders children correctly", () => {
    render(<VuiBadge>Badge Content</VuiBadge>);
    expect(screen.getByText("Badge Content")).toBeInTheDocument();
  });

  it("renders with indicator and circular props without crashing", () => {
    const { container } = render(<VuiBadge indicator circular />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("accepts different sizes and colors", () => {
    render(
      <VuiBadge size="lg" color="error" variant="contained">
        Error Badge
      </VuiBadge>
    );
    expect(screen.getByText("Error Badge")).toBeInTheDocument();
  });
});
