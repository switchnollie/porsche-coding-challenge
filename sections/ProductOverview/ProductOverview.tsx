import { useInView } from "react-intersection-observer";
import TilesContainer from "~/components/Tile";
import { Product } from "~/utils/types";
import { InnerContainer, Headline, Container, AnimatedTile } from "./style";

interface ProductOverviewProps {
  products: Product[];
}

export default function ProductOverview({ products }: ProductOverviewProps) {
  const { ref, inView } = useInView({ rootMargin: "-300px" });
  return (
    <Container>
      <InnerContainer>
        <Headline>Our Products</Headline>
        <TilesContainer varyingTileSizes={7} inView={inView} ref={ref}>
          {products.map(({ title, id, featuredImageUrl }) => (
            <AnimatedTile
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
