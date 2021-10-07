import Carousel, { CarouselSlide } from "~/components/Carousel";
import Image from "next/image";
import { Product } from "~/utils/types";
import { Container, DetailsLinkButton } from "./style";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Show 5 Products with contrasting colors
  const featuredIndexes = [1, 4, 5, 6, 7];
  const featuredProducts = products.filter(
    (_, i) => featuredIndexes.indexOf(i) !== -1
  );
  return (
    <Container>
      <Carousel>
        {featuredProducts.map(({ featuredImageUrl, title, id }) => (
          <CarouselSlide key={featuredImageUrl}>
            <Image layout="fill" alt={title} src={featuredImageUrl} priority />
            <DetailsLinkButton href={`/${id}`}>View Details</DetailsLinkButton>
          </CarouselSlide>
        ))}
      </Carousel>
    </Container>
  );
}
