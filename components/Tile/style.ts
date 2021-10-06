import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { TileProps } from "./Tile";

export const TileContainer = styled.li<Pick<TileProps, "wide" | "tall">>`
  ${({ wide, tall }) => css`
    display: flex;
    grid-column: span ${tall ? 2 : 1};
    grid-row: span ${wide ? 2 : 1};
    will-change: transform, opacity;
  `}
`;

export const TileInnerContainer = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 0.5em;
    will-change: transform;
    box-shadow: ${theme.shadows.el2};
    background: ${theme.palette.cardBackground};
    overflow: hidden;

    transition: transform 0.2s ${theme.easings.inOut},
      box-shadow 0.2s ${theme.easings.inOut};

    &:hover {
      transform: scale(1.015);
      box-shadow: ${theme.shadows.el3};
    }
  `}
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  padding-top: 75%; // aspect ratio box, 3:4
`;
export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75em;
  text-transform: uppercase;
  font-weight: 600;
`;

interface TilesContainerProps {
  varyingTileSizes: number;
  inView: boolean;
}

export const TilesContainer = styled(motion.ul).attrs(
  ({ inView }: TilesContainerProps) => ({
    animate: inView ? "inView" : "hidden",
    initial: false,
    variants: {
      inView: { transition: { staggerChildren: 0.08 } },
    },
  })
)<TilesContainerProps>`
  ${({ varyingTileSizes }) => css`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    list-style: none;

    & > *:nth-of-type(${varyingTileSizes}n + 1) {
      grid-row: span 2;
      grid-column: span 2;
    }

    @media (max-width: 855px) {
      & > *:nth-of-type(${varyingTileSizes}n + 1) {
        grid-row: span 1;
        grid-column: span 1;
      }
    }
  `}
`;
