import Head from "next/head";
import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";

function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter Portfolio || Not Found</title>

        <meta property="og:type" content="404" />

        <meta property="og:site_name" content="pete.vercel.app" />

        <meta property="og:url" content="https://pete.vercel.app" />
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <meta
          property="og:title"
          content="404 - Ikechukwu Peter Web developer"
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
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, theme.300, theme.200)"
            backgroundClip="text"
          >
            404
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text color={"gray.500"} mb={6}>
            {"The page you're looking for does not seem to exist"}
          </Text>

          <NextLink href="/" passHref>
            <Button
              as={Link}
              _hover={{
                textDecoration: "none",
              }}
              bgGradient="linear(to-r, theme.300, theme.200, 'theme.600)"
              bg={"theme.300"}
              color={useColorModeValue("theme.500", "theme.100")}
              variant="solid"
            >
              Go to Home
            </Button>
          </NextLink>
        </Flex>
      </main>
    </Layout>
  );
}

export default NotFound;
