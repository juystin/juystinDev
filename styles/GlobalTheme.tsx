import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        white: "#EAEAEA",
        black: "#13070C",
        scarlet: "#5B6C5D",
        dark_scarlet: "#990A27",
        gray: "#A7B1B7"
    },
    fonts: ["Inter", "system-ui"]
};

export interface ThemeProps {
    children: React.ReactNode
}

const GlobalTheme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalTheme;