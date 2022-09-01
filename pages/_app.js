import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import { ScrollToTop } from "../components/ScrollToTop";
import theme from "../theme/theme";
import "../styles/globals.css";
import Loader from "../components/loader/Loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);
  return (
    <ChakraProvider theme={theme} resetCSS>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Header />
          <Component {...pageProps} />
          <ScrollToTop />
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
