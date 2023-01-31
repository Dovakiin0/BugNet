import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  colors: {
    primary: {
      900: "#000000",
      800: "#1A1A1A",
      700: "#333333",
      600: "#4D4D4D",
      500: "#666666",
      400: "#808080",
      300: "#999999",
      200: "#B3B3B3",
      100: "#FFFFFF",
    },
    brand: {
      900: "#150050",
      800: "#1A0066",
      700: "#1F007F",
      600: "#250099",
      500: "#2A00B3",
      400: "#3300CC",
      300: "#4D00E6",
      200: "#6600FF",
      100: "#8000FF",
    },
    text: {},
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "primary.900",
        color: "primary.100",
      },
    }),
  },
  components: {
    Text: {
      baseStyle: {
        color: "primary.100",
      },
    },
  },
});
