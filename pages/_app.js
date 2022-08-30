import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import theme from "../theme/theme";
import "../styles/globals.css";
import { ScrollToTop } from "../components/ScrollToTop";
const LoadingScreen = dynamic(() => import("../components/LoadingScreen"));
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
