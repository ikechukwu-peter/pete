import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theming/colors";
import { Ubuntu } from "next/font/google";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { UILoader } from "@/components/loaders/ui-loader";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const ubuntu = Ubuntu({
  weight: "300",
  variable: "--ubuntu-font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    setPageLoad(false);
  }, []);

  useEffect(() => {
    const handleStart = (url: any) => {
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url: any) => {
      // return url === router.asPath && setLoading(false);

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
            </div>
          )}
        </>
      )}
    </ChakraProvider>
  );
}
