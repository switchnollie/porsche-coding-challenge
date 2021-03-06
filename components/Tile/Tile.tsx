import Link from "next/link";
import { forwardRef } from "react";
import AspectRatioImage from "~/components/AspectRatioImage";
import {
  TileContainer as Container,
  Title,
  TileInnerContainer as InnerContainer,
} from "./style";

export interface TileProps {
  image: string;
  title: string;
  href?: string;
  wide?: boolean;
  tall?: boolean;
}

const Tile = forwardRef<HTMLLIElement, TileProps>(
  ({ image, title, wide, tall, href, ...props }, ref) => {
    const innerJsx = (
      <InnerContainer
        as={!!href ? "a" : "div"}
        data-testid="tileInnerContainer"
      >
        <AspectRatioImage
          src={image}
          alt={`Porsche product image for ${title}`}
          ratio={3 / 4}
        />
        <Title>{title}</Title>
      </InnerContainer>
    );
    return (
      <Container wide={wide} tall={tall} ref={ref} {...props}>
        {href ? (
          <Link href={href} passHref>
            {innerJsx}
          </Link>
        ) : (
          innerJsx
        )}
      </Container>
    );
  }
);

Tile.displayName = "Tile";

export default Tile;
