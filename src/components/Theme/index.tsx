import { ThemeProvider, type DefaultTheme } from "styled-components";
import { definitions } from "./definitions";
import { GlobalStyles } from "./GlobalStyles";

interface ThemeProps {
  children: React.ReactNode;
}

const theme: DefaultTheme = definitions;

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
