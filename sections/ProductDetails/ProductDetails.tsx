import BackButton from "~/components/BackButton";
import { Product } from "~/utils/types";
import { Container } from "./style";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product: { title, description },
}: ProductDetailsProps) {
  return (
    <Container>
      <BackButton href="/" />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}
