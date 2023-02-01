import { extendTheme } from "@chakra-ui/react";
import components from "./components";
const themeConfig = {
  colors: {
    black: {
      "100": "#000000",
      "80": "rgba(0, 0, 0, 0.8)",
      "40": "rgba(0, 0, 0, 0.4)",
    },
    gray: {
      "100": "#EEEEEE",
      "200": "#716DF7",
      "300": "#F8F8F8",
      "50": "rgba(238, 238, 238, 0.5)",
    },
    purple: {
      "10": "rgba(113, 109, 247, 0.1)",
      "100": "#5A57C6",
    },
    blue: {
      "100": "#4E47DB",
      "200": "#716DF7",
    },
    white: {
      "100": "#ffffff",
      "200": "#F1F0FE",
      "300": "#5A57C6",
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: components,
};

// const config = {};

export const theme = extendTheme(themeConfig);
