import { transparentize } from "polished";

const inverseBackground = "#000";
const inverseColor = "#fff";
const onBackground = "#000";
const onBackgroundInverse = "#fff";

const palette = {
  accent: "#d5011c",
  background: "#fafafa",
  inverseBackground,
  onBackground,
  onBackgroundInverse,
  cardBackground: "#fff",
  footer: {
    background: inverseBackground,
    color: inverseColor,
    divider: transparentize(0.5, inverseColor),
  },
};

export default palette;
