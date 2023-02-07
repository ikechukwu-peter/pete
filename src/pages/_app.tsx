import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theming/colors";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  weight: "300",
  variable: "--ubuntu-font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
