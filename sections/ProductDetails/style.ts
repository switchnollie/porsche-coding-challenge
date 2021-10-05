import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 4rem ${theme.dimensions.bodyPadding};
    max-width: ${theme.dimensions.bodyMaxWidth};
    margin: 0 auto;
    min-height: 300px;
  `}
`;
