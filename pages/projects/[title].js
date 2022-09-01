import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";
import Loader from "../../components/loader/Loader";
import styles from "../../styles/Home.module.css";

export default function Projects() {
  const router = useRouter();
  const { title } = router.query;
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
          <Heading
            color={useColorModeValue("theme.500", "theme.100")}
            fontSize="2rem"
          >
            Coming So Soon
          </Heading>
        </Flex>
      </main>
    </Suspense>
  );
}
