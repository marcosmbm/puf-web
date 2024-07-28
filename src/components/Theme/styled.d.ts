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
  }
}
