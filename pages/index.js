import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
const ContentLoader = dynamic(() =>
  import("../components/loader/ContentLoader")
);
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

const Home = () => (
  <Layout>
    <Suspense fallback={<ContentLoader />}>
      <Head>
        <title>Ikechukwu Peter || Professional Web Developer</title>

        <meta property="og:type" content="Home" />

        <meta property="og:site_name" content="pete.vercel.app" />

        <meta property="og:url" content="https://pete.vercel.app" />
        <meta property="og:title" content="Ikechukwu Peter Web developer" />
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <meta name="description" content={" Ikechukwu Peter"} />
        <meta name="description" content={" Peter Ikechukwu  "} />
        <meta
          name="keywords"
          content="website, websites, web developement, javascript, react, reactjs, node, nodejs, software, software engineer, full stack developer, full-stack developer, frontend, frontend developer, backend, backend developer"
        />
        <meta name="author" content="Ikechukwu Peter Chinedu" />
        <meta name="description" content={" Web developer  "} />

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
  </Layout>
);

export default Home;
