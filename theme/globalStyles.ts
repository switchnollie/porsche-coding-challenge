import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";
import normalize from "styled-normalize";

const base = css`
  @font-face {
    font-family: "Porsche Next";
    src: local("Porsche Next"),
      url("/fonts/PorscheNext/PorscheNextWLa-Regular.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Porsche Next";
    src: local("Porsche Next"),
      url("/fonts/PorscheNext/PorscheNextWLa-Bold.woff2") format("woff2");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Porsche Next";
    src: local("Porsche Next"),
      url("/fonts/PorscheNext/PorscheNextWLa-Thin.woff2") format("woff2");
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  html {
    font-family: "Porsche Next", "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  body {
    background-color: ${palette.background};
  }

  a,
  p {
    line-height: 1.5;
  }
`;

export const GlobalStyles = createGlobalStyle`
${normalize}
${base}
`;
