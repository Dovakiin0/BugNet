import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  colors: {
    brand: {
      900: "#222222",
      800: "#3B3B3B",
      700: "#515151",
      600: "#626262",
      500: "#7E7E7E",
      400: "#9E9E9E",
      300: "#B1B1B1",
      200: "#CFCFCF",
      100: "#E1E1E1",
    },
    text: {},
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "brand.900",
      },
    }),
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.100",
      },
    },
  },
});
