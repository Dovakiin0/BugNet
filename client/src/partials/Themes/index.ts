import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { Text, Button, Input } from "./components";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  colors: {
    primary: {
      900: "#0F0F0F",
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
      900: "#3F0071",
      800: "#4D0080",
      700: "#5C0099",
      600: "#6A00B3",
      500: "#7900CC",
      400: "#8800E6",
      300: "#A300FF",
      200: "#BF00FF",
      100: "#CC00FF",
    },
    secondary: {
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
    Text,
    Button,
    Input,
  },
});
