import Head from "next/head";
import dynamic from "next/dynamic";

import { Flex, useColorModeValue } from "@chakra-ui/react";

const AboutMe = dynamic(() => import("../components/about/About"), {
  suspense: true,
  ssr: true,
});
const Skills = dynamic(() => import("../components/about/Skills"), {
  suspense: true,
  ssr: true,
});
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import Loader from "../components/loader/Loader";

export default function About() {
  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>Ikechukwu Peter Portfolio || About Me</title>
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
          <AboutMe />
          <Skills />
        </Flex>
      </main>
    </Suspense>

  );
}
