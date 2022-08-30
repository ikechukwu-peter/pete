import Head from "next/head";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio || Blog</title>
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
          Hello
        </Box>
      </Flex>
    </>
  );
}
