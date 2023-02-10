// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    800: "	#F0FFFF",
    700: "rgba(34, 49, 63,1)",
    600: "rgba(4, 59, 92,1)",
    500: "rgb(22 78 99)",
    400: "rgb(8 145 178)",
    300: "rgb(255 255 255)",
  },
};
// 3. extend the theme
export const theme = extendTheme({ colors, config });
