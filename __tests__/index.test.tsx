import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home products={[]} />);

    const heading = screen.getByRole("heading", {
      name: /Porsche Product Gallery/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
