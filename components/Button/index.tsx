import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
}

const StyledButton = styled.button`
  ${({ theme }) => css`
    border: 2px solid ${theme.palette.onBackground};
    padding: 0.75rem;
    display: inline-block;
    margin: 0;
    box-sizing: border-box;
    border-radius: 0;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${theme.palette.onBackground};
    background-color: transparent;
    transition: color 0.2s ${theme.easings.inOut},
      background-color 0.2s ${theme.easings.inOut};

    &:hover {
      background-color: ${theme.palette.inverseBackground};
      cursor: pointer;
      color: ${theme.palette.onBackgroundInverse};
    }
  `}
`;

export default function Button({ children, href, ...props }: ButtonProps) {
  return href ? (
    <Link href={href} passHref>
      <StyledButton {...(props as any)} as="a">
        {children}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton {...(props as any)} />
  );
}
