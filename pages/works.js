import Head from "next/head";
import dynamic from "next/dynamic";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Suspense } from "react";
const ContentLoader = dynamic(() =>
  import("../components/loader/ContentLoader")
);
import Layout from "../components/layout/Layout";
const Projects = dynamic(() => import("../components/works/Projects"), {
  suspense: true,
  ssr: true,
});
import styles from "../styles/Home.module.css";

function Works() {
  return (
    <Layout>
      <Suspense fallback={<ContentLoader />}>
        <Head>
          <title>Ikechukwu Peter Portfolio || Works</title>
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
            <Projects />
          </Flex>
        </main>
      </Suspense>
    </Layout>
  );
}

export default Works;
