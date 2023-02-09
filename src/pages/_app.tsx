import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theming/colors";
import { Ubuntu } from "@next/font/google";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Script from "next/script";
import { UILoader } from "@/components/loaders/ui-loader";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const ubuntu = Ubuntu({
  weight: "300",
  variable: "--ubuntu-font",
  subsets: ["latin"],
});

//color="8,145,178"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    setPageLoad(false);
  }, []);

  useEffect(() => {
    const handleStart = (url: any) => {
      // if (window.Tawk_API) {
      //   Tawk_API.hideWidget();
      // }
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url: any) => {
      // return url === router.asPath && setLoading(false);
      // Tawk_API.showWidget();
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
    <ChakraProvider resetCSS theme={theme}>
      {pageLoad ? (
        <UILoader />
      ) : (
        <>
          {loading ? (
            <UILoader />
          ) : (
            <div className={ubuntu.className}>
              <Component {...pageProps} />
              <AnimatedCursor />
              {/* <ScrollToTop /> */}
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
            </div>
          )}
        </>
      )}
    </ChakraProvider>
  );
}
