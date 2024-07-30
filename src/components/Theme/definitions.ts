const baseColors = {
  white: "#ffffff",
  black: "#000000",
  red: "#ff647c",
  blue: "#487fd9",
  yellow: "#ebc499",
};

const brandColors = {
  raisinBlack: "#16171C",
  turquoise: "#0BD9B3",
};

const colors = {
  ...baseColors,
  ...brandColors,
};

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px: number) => `${round(px / 16)}rem`;

const sizes = {
  xs: rem(10),
  sm: rem(12),
  md: rem(14),
  base: rem(16),
  lg: rem(18),
  xl: rem(20),
  "2xl": rem(24),
  "3xl": rem(32),
  "4xl": rem(40),
  "5xl": rem(64),
};

export const definitions = {
  colors,
  sizes,
};
