import Head from "next/head";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Suspense } from "react";
const ContentLoader = dynamic(() =>
  import("../components/loader/ContentLoader")
);
import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";

const Blogs = dynamic(() => import("../components/blog/Blogs"), {
  suspense: true,
  ssr: true,
});
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEDIUM_FEED_URL}`);
  const blogs = await res.json();
  return {
    props: {
      blogs: blogs.items,
    },
  };
}

function Blog({ blogs }) {
  return (
    <Layout>
      <Suspense fallback={<ContentLoader />}>
        <Head>
          <title>Ikechukwu Peter || Blog</title>

          <meta property="og:type" content="Blog" />

          <meta property="og:site_name" content="pete.vercel.app" />

          <meta property="og:url" content="https://pete.vercel.app" />
          <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
          <meta
            property="og:title"
            content="Blog  - Ikechukwu Peter Web developer"
          />
          <meta
            name="description"
            content={
              " Ikechukwu Peter's Portfolio,Ikechkwu Peter, Peter Ikechukwu portfolio website"
            }
          />

          <meta
            name="keywords"
            content="ikechukwu peter, ikechukwu peter chinedu, chinedu, website, websites, web developement, javascript, react, reactjs, node, nodejs, software, software engineer, full stack developer, full-stack developer, frontend, frontend developer, backend, backend developer"
          />

          <meta property="twitter:card" content="summary" />
          <meta
            property="twitter:url"
            content={"https://twitter.com/pete_iyke"}
          />
          <meta property="twitter:title" content={"Ikechukwu Peter Chinedu"} />
          <meta
            property="twitter:description"
            content={"I am a  software engineer, I enjoy writing #code"}
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
            <Blogs blogs={blogs} />
          </Flex>
        </main>
      </Suspense>
    </Layout>
  );
}

export default Blog;
