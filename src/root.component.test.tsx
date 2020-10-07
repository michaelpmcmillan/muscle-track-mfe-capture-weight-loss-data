import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    render(<Root name="Testapp" />);
    expect(screen.getByText("Ok")).toBeInTheDocument();
  });
});
