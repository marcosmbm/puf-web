import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      red: string;
      blue: string;
      yellow: string;
      raisinBlack: string;
      turquoise: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
    };
  }
}
