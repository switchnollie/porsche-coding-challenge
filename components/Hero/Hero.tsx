import Image, { ImageProps } from "next/image";
import { Container } from "./style";

export default function Hero({ alt, ...props }: Omit<ImageProps, "layout">) {
  return (
    <Container>
      <Image layout="fill" objectFit="cover" alt={alt} {...props} />
    </Container>
  );
}
