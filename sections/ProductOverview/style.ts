import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.dimensions.bodyMaxWidth};
    margin: 6rem auto;
    box-sizing: border-box;
    padding: 0 ${theme.dimensions.bodyPadding};
  `}
`;

export const Headline = styled.h1`
  margin: 2em 0;
`;
