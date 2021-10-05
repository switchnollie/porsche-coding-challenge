import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dimensions: {
      bodyMaxWidth: string;
      bodyPadding: string;
    };
    palette: {
      accent: string;
      background: string;
      cardBackground: string;
      footer: {
        background: string;
        color: string;
        divider: string;
      };
    };
    shadows: {
      el1: string;
      el2: string;
      el3: string;
    };
    easings: {
      inOut: string;
    };
  }
}
