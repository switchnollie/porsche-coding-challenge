import styled, { css } from "styled-components";
import { TileProps } from "./Tile";

export const TileContainer = styled.a<
  Pick<TileProps, "wide" | "tall"> & { linked?: boolean }
>`
  ${({ wide, tall, linked, theme }) => css`
    display: flex;
    background: ${theme.palette.cardBackground};
    box-shadow: ${theme.shadows.el2};
    flex-direction: column;
    grid-column: span ${tall ? 2 : 1};
    grid-row: span ${wide ? 2 : 1};
    border-radius: 0.5em;
    overflow: hidden;
    transition: transform 0.2s ${theme.easings.inOut},
      box-shadow 0.2s ${theme.easings.inOut};
    will-change: transform;
    cursor: ${linked ? "pointer" : "auto"};

    &:hover {
      transform: scale(1.03);
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

export const TilesContainer = styled.div<{ varyingTileSizes: number }>`
  ${({ varyingTileSizes }) => css`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

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
