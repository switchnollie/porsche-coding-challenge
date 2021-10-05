import Carousel, { CarouselSlide } from "~/components/Carousel";
import Image from "next/image";
import { Product } from "~/utils/types";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Show first 5 Products
  const featuredProducts = products.slice(0, 5);
  return (
    <Carousel>
      {featuredProducts.map(({ featuredImageUrl, title }) => (
        <CarouselSlide key={featuredImageUrl}>
          <Image layout="fill" alt={title} src={featuredImageUrl} priority />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
