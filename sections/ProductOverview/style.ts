import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Tile } from "~/components/Tile";

export const InnerContainer = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.dimensions.bodyMaxWidth};
    margin: 0 auto;
    box-sizing: border-box;
    padding: 6rem ${theme.dimensions.bodyPadding};
  `}
`;

export const Container = styled.div`
  background: ${(p) => p.theme.palette.background};
  position: relative;
`;

export const Headline = styled.h1`
  margin: 2em 0;
`;

export const AnimatedTile = styled(
  motion(Tile, { forwardMotionProps: true })
).attrs({
  initial: false,
  variants: {
    inView: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  },
  transition: {
    type: "tween",
    duration: 1.3,
    ease: "circOut",
  },
})``;
