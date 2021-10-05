import styled, { css } from "styled-components";

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
