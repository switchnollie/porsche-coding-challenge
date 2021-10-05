import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.palette.footer.background};
  `}
`;

export const InnerContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    box-sizing: border-box;
    padding: 4rem ${theme.dimensions.bodyPadding};
    max-width: ${theme.dimensions.bodyMaxWidth};
  `}
`;

export const Logo = styled.img`
  width: 10rem;
  height: auto;
  margin-bottom: 2rem;
`;

export const ContactContainer = styled.div`
  display: flex;
`;

export const Address = styled.p`
  ${({ theme }) => css`
    padding-right: 2em;
    border-right: 2px solid ${theme.palette.footer.divider};
    color: ${theme.palette.footer.color};
  `}
`;

export const PhoneAndMail = styled.p`
  ${({ theme }) => css`
    padding-left: 2em;
    color: ${theme.palette.footer.color};

    & > a {
      display: block;
      color: ${theme.palette.footer.color};
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.2s ${theme.easings.inOut};

      &:hover {
        opacity: 1;
      }
    }
  `}
`;
