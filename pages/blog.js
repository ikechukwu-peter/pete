import Head from "next/head";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Suspense } from "react";
import Loader from "../components/loader/Loader";
import dynamic from "next/dynamic";
const Blogs = dynamic(() => import("../components/blog/Blogs"), {
  suspense: true,
  ssr: true,
});
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devpete"
  );
  const blogs = await res.json();
  return {
    props: {
      blogs: blogs.items,
    },
  };
}

export default function Blog({ blogs }) {
  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>Ikechukwu Peter Portfolio || Blog</title>
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
          <Blogs blogs={blogs} />
        </Flex>
      </main>
    </Suspense>

  );
}
