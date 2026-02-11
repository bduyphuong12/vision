import React from "react";
import { render, screen } from "../../test-utils";
import VuiButton from "./index";

describe("VuiButton component", () => {
  it("renders correctly with children", () => {
    render(<VuiButton>Click Me</VuiButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the variant and color props without crashing", () => {
    render(
      <VuiButton variant="outlined" color="primary">
        Outlined Button
      </VuiButton>
    );
    expect(screen.getByText("Outlined Button")).toBeInTheDocument();
  });

  it("handles the circular and iconOnly props", () => {
    const { container } = render(
      <VuiButton circular iconOnly>
        Icon
      </VuiButton>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
