import {
  render,
  RenderOptions,
  Queries,
  queries,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyles } from "~/theme";

/**
 * A proxy for the render function of testing-library using the global context wrappers
 * and general setup components (ThemeProvider and GlobalStyles)
 *
 * @param {ReactElement} component The component that should be rendered by testing library
 * @param {RenderOptions} options Render options of testing library
 * @returns {RenderResult} the render result
 */
export default function renderWithWrapper<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(component: ReactElement, options?: RenderOptions<Q, Container>) {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
}
