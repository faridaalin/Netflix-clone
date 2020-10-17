import React from "react";
import { ThemeProvider } from "styled-components";
import mixins from "./mixins/mixins.styles";

const theme = {
  colors: {
    white: "#efeeed",
    btnColor: "rgba(51,51,51,0.5)",
  },
  mixins,

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
