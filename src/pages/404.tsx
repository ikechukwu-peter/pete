import Head from "next/head";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "@/layout/layout";

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
        <link rel="icon" href="/pete.png" />
      </Head>

      <Flex
        direction={"column"}
        align="center"
        justify={"center"}
        as="main"
        zIndex={10}
        w="100%"
        bg="brand.700"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
        pos="relative"
        minH="100vh"
        border="1px solid transparent"
      >
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, brand.300, brand.400)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2} color="brand.300">
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
              bg: "brand.400",
            }}
            bg={"brand.600"}
            color="brand.300"
            variant="solid"
          >
            Go to Home
          </Button>
        </NextLink>
      </Flex>
    </Layout>
  );
}

export default NotFound;
