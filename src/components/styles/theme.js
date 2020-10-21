import React from "react";
import { ThemeProvider } from "styled-components";
import mixins from "./mixins/mixins.styles";

const theme = {
  colors: {
    white: "#efeeed",
    btnColor: "rgba(51,51,51,0.5)",
    bgBlack: "#111",
  },
  mixins,

  brighteness: "brightness(50%)",

  linearGradient:
    "linear-gradient(94deg, rgba(2,0,36,1) 27%, rgba(2,0,36,0.5046393557422969) 50%)",

  mediaQueries: {
    sm: `only screen and (min-width: 576px)`,
    md: `only screen and (min-width: 798px)`,
    lg: `only screen and (min-width: 992px)`,
    xl: `only screen and (min-width: 1200px)`,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
