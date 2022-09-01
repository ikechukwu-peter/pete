import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Script from "next/script";
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
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    setPageLoad(false);
  }, []);

  useEffect(() => {
    const handleStart = (url) => {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget();
      }
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url) => {
      // return url === router.asPath && setLoading(false);
      window.Tawk_API.showWidget();
      setLoading(false);
    };
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
      {pageLoad ? (
        <Loader />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <ScrollToTop />
              <Footer />
              <Script id="tawk" strategy="lazyOnload">
                {`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/63108a0637898912e96697a4/1gbs9mb3k';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
              `}
              </Script>
            </>
          )}
        </>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
