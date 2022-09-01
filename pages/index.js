import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import {  Flex, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
const Loader = dynamic(() => import("../components/loader/Loader"));
const Introduction = dynamic(() => import("../components/home/Introduction"), {
  suspense: true,
  ssr: true,
});
const Projects = dynamic(() => import("../components/home/Projects"), {
  suspense: true,
  ssr: true,
});
const Services = dynamic(() => import("../components/home/Services"), {
  suspense: true,
  ssr: true,
});
export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
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
          <Introduction />
          <Projects />
          <Services />
        </Flex>
      </main>
    </Suspense>

  );
}
