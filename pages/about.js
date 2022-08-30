import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const AboutMe = dynamic(() => import("../components/about/About"));
const Skills = dynamic(() => import("../components/about/Skills"));

export default function About() {
  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio || About Me</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        align="center"
        justify={"center"}
        flex="1"
        w="100%"
        bg={useColorModeValue("theme.100", "theme.500")}
      >
        <Box w="90%" m="auto">
          <AboutMe />
          <Skills />
        </Box>
      </Flex>
    </>
  );
}
