import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dimensions: {
      bodyMaxWidth: string;
      bodyPadding: string;
    };
    palette: {
      background: string;
      cardBackground: string;
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
