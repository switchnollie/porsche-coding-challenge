import { screen } from "@testing-library/react";
import renderWithWrapper from "~/utils/renderWithWrapper";
import Tile from "./Tile";

jest.mock("next/image", () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Tile", () => {
  it("renders the passed title", () => {
    const passedTitle = "Test Tile";
    renderWithWrapper(<Tile image="someImagePath.jpg" title={passedTitle} />);

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
    renderWithWrapper(<Tile image="someImagePath.jpg" title="" href="/" />);

    const innerContainer = screen.getByTestId("tileInnerContainer");

    expect(innerContainer).toBeInstanceOf(HTMLAnchorElement);
  });

  it("renders the inner container as a div tag if no href is provided", () => {
    renderWithWrapper(<Tile image="someImagePath.jpg" title="" />);

    const innerContainer = screen.getByTestId("tileInnerContainer");

    expect(innerContainer).toBeInstanceOf(HTMLDivElement);
  });
});
