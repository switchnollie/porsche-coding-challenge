import TilesContainer, { Tile } from "~/components/Tile";
import { Product } from "~/utils/types";
import { Container, Headline } from "./style";

interface ProductOverviewProps {
  products: Product[];
}

export default function ProductOverview({ products }: ProductOverviewProps) {
  return (
    <Container>
      <Headline>Our Products</Headline>
      <TilesContainer varyingTileSizes={7}>
        {products.map(({ title, id, featuredImageUrl }) => {
          return (
            <Tile
              key={id}
              title={title}
              image={featuredImageUrl}
              href={`/${id}`}
            />
          );
        })}
      </TilesContainer>
    </Container>
  );
}
