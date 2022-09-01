import Head from "next/head";
import dynamic from "next/dynamic";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Suspense } from "react";
import Loader from "../components/loader/Loader";
const ContactMe = dynamic(() => import("../components/contact/Contact"), {
  suspense: true,
  ssr: true,
});
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>Ikechukwu Peter Portfolio || Contact</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Flex
          direction={"column"}
          align="center"
          justify={"center"}
          flex="1"
          w="100%"
          bg={useColorModeValue("theme.100", "theme.500")}
          className={styles.container}
        >
          <ContactMe />
        </Flex>
      </main>
    </Suspense>
  );
}
