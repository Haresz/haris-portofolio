import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    pink: "#F5199B",
    blue: "#1B3FE0",
    navy: "#0B0B2A",
  },
  fonts: {
    heading: "var(--font-display), var(--font-montserrat)",
    body: "var(--font-montserrat)",
  },
  styles: {
    global: {
      body: {
        bg: "#0B0B2A",
        color: "white",
      },
    },
  },
});
