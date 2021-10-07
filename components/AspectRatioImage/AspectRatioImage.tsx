import { useCallback, useState } from "react";
import { ImageAspectRatioContainer, Image } from "./style";
import ImagePlaceholder from "~/components/ImagePlaceholder";

interface AspectRatioImageProps {
  src: string;
  alt: string;
  // height / width
  ratio: number;
  hasLoadingPlaceholder?: boolean;
}

export default function AspectRatioImage({
  src,
  alt,
  ratio,
  hasLoadingPlaceholder = true,
}: AspectRatioImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ImageAspectRatioContainer ratio={ratio}>
      <Image src={src} alt={alt} onLoadingComplete={handleLoadingComplete} />
      {hasLoadingPlaceholder && isLoading && <ImagePlaceholder />}
    </ImageAspectRatioContainer>
  );
}
