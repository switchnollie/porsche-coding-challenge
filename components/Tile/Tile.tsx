import Link from "next/link";
import {
  TileContainer as Container,
  Image,
  Title,
  ImageContainer,
} from "./style";

export interface TileProps {
  image: string;
  title: string;
  href?: string;
  wide?: boolean;
  tall?: boolean;
}

function Tile({ image, title, wide, tall, href }: TileProps) {
  const innerJsx = (
    <Container wide={wide} tall={tall} linked={!!href} as={href ? "a" : "div"}>
      <>
        <ImageContainer>
          <Image src={image} alt={`Porsche product image for ${title}`} />
        </ImageContainer>
        <Title>{title}</Title>
      </>
    </Container>
  );
  return href ? <Link href={href}>{innerJsx}</Link> : innerJsx;
}

export default Tile;
