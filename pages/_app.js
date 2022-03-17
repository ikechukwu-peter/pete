// import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/theme"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
