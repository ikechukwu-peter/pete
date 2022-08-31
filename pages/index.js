import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
const Introduction = dynamic(() => import("../components/home/Introduction"));
const Projects = dynamic(() => import("../components/home/Projects"));
const Services = dynamic(() => import("../components/home/Services"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        align="center"
        justify={"center"}
        flex="1"
        w="100%"
        minW={"100vw"}
        minH={"100vH"}
        // bg={useColorModeValue("theme.100", "theme.500")}
      >
        <Heading color={useColorModeValue("theme.100", "theme.500")}>
          This site is currently under maintenance,
          <br /> please check back!
        </Heading>
      </Flex>
      {/* <Flex
        direction={"column"}
        align="center"
        justify={"center"}
        flex="1"
        w="100%"
        bg={useColorModeValue("theme.100", "theme.500")}
      >
        <Box w="90%" m="auto">
          <Introduction />
          <Projects />
          <Services />
        </Box>
      </Flex> */}
    </>
  );
}
