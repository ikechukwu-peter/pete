import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Contact = dynamic(() => import("../components/contact/Contact"));

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio || Contact</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        align="center"
        justify={"center"}
        flex="1"
        w="100%"
        bg={useColorModeValue("theme.400", "theme.400")}
      >
        <Box w="90%" m="auto">
          <Contact />
        </Box>
      </Flex>
    </>
  );
}
