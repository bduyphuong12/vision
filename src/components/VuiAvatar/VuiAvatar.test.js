import React from "react";
import { render } from "../../test-utils";
import VuiAvatar from "./index";

describe("VuiAvatar component", () => {
  it("renders correctly", () => {
    const { container } = render(<VuiAvatar />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("accepts bgColor, size, and shadow props", () => {
    const { container } = render(
      <VuiAvatar bgColor="primary" size="lg" shadow="sm" />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByText } = render(<VuiAvatar>A</VuiAvatar>);
    expect(getByText("A")).toBeInTheDocument();
  });
});
