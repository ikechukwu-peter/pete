// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    500: "rgb(22 78 99)",
    400: "rgb(8 145 178)",
    300: "rgb(255 255 255)",
    200: "rgb(63 63 70)",
    100: " rgb(24 24 27)",
  },
};
// 3. extend the theme
export const theme = extendTheme({ colors, config });
