import Link from "next/link";
import { forwardRef } from "react";
import {
  TileContainer as Container,
  Image,
  Title,
  ImageContainer,
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
      <InnerContainer as={!!href ? "a" : "div"}>
        <ImageContainer>
          <Image src={image} alt={`Porsche product image for ${title}`} />
        </ImageContainer>
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
