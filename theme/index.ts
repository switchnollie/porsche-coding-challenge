import palette from "./palette";
import dimensions from "./dimensions";

const theme = {
  dimensions,
  palette,
  shadows: {
    el1: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)",
    el2: "0 6px 12px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.04)",
    el3: "0 8px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
  },
  easings: {
    inOut: "cubic-bezier(.4,0,.2,1)",
  },
};

export default theme;
export { GlobalStyles } from "./globalStyles";
