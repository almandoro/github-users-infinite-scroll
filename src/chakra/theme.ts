import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  "sm": "420px",
  "md": "800px",
  "lg": "1024px",
  "xl": "1440px",
  "2xl": "1920px",
});

export const theme = extendTheme({
  colors: {
    text: {
      base: "#262626",
      secondary: "#999999",
    },
    pressable: "#1A74FF",
    background: "#F5F5F5",
    team: {
      a: {
        text: "#0047B3",
        bg: "#B3D1FF",
      },
      b: {
        text: "#C83300",
        bg: "#FFD6C8",
      },
      c: {
        text: "#059E42",
        bg: "#A6FCC8",
      },
    },
  },
  breakpoints,
  fonts: {
    body: "Poppins",
  },
});
