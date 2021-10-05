import TilesContainer, { Tile } from "~/components/Tile";
import { Product } from "~/utils/types";
import { InnerContainer, Headline, Container } from "./style";

interface ProductOverviewProps {
  products: Product[];
}

export default function ProductOverview({ products }: ProductOverviewProps) {
  return (
    <Container>
      <InnerContainer>
        <Headline>Our Products</Headline>
        <TilesContainer varyingTileSizes={7}>
          {products.map(({ title, id, featuredImageUrl }) => (
            <Tile
              key={id}
              title={title}
              image={featuredImageUrl}
              href={`/${id}`}
            />
          ))}
        </TilesContainer>
      </InnerContainer>
    </Container>
  );
}
