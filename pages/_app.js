// import '../styles/globals.css'
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import "../styles/globals.css";
import { ScrollToTop } from "../components/ScrollToTop";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ScrollToTop />
    </ChakraProvider>
  );
}

export default MyApp;
