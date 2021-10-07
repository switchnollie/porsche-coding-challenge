import styled from "styled-components";
import NextImage from "next/image";

export const ImageAspectRatioContainer = styled.div<{ ratio: number }>`
  flex: 1;
  position: relative;
  padding-bottom: ${(p) => p.ratio * 100}%; // aspect ratio box
`;

export const Image = styled(NextImage).attrs({
  layout: "fill",
  objectFit: "cover",
})``;
