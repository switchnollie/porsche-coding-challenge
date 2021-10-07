import { screen } from "@testing-library/react";
import renderWithWrapper from "~/utils/renderWithWrapper";
import Tile from "./Tile";

describe("Tile", () => {
  it("renders the passed title", () => {
    const passedTitle = "Test Tile";
    renderWithWrapper(<Tile image="" title={passedTitle} />);

    const tileTitle = screen.getByText(passedTitle);

    expect(tileTitle).toBeInTheDocument();
  });

  it("renders an image with an alt tag containing the product title as a description", () => {
    const passedTitle = "Some Title";
    renderWithWrapper(<Tile image="someImagePath.jpg" title={passedTitle} />);

    const image = screen.getByRole("img");

    expect(image?.attributes?.getNamedItem("alt")?.value).toContain(
      passedTitle
    );
  });

  it("renders the inner container as an a tag if href is provided", () => {
    renderWithWrapper(<Tile image="" title="" href="/" />);

    const innerContainer = screen.getByTestId("tileInnerContainer");

    expect(innerContainer).toBeInstanceOf(HTMLAnchorElement);
  });

  it("renders the inner container as a div tag if no href is provided", () => {
    renderWithWrapper(<Tile image="" title="" />);

    const innerContainer = screen.getByTestId("tileInnerContainer");

    expect(innerContainer).toBeInstanceOf(HTMLDivElement);
  });
});
