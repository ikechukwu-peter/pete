import {
  Flex,
  Box,
  HStack,
  Heading,
  Text,
  Link,
  Button,
  Image,
  DarkMode,
} from "@chakra-ui/react";
import { BiCloudDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <Box>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        width={["100%", "100%", "100%", "90%"]}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "row-reverse",
          "row-reverse",
        ]}
        py="2rem"
        px="2rem"
        m="auto"
      >
        <Box
          d="flex"
          justifyContent="center"
          flexDir="column"
          w={["100%", "100%", "50%", "50%"]}
          textAlign="left"
          ml="4rem"
          m="auto"
          data-aos="fade-up"
        >
          <Heading
            fontWeight={600}
            color={"theme.600"}
            mb="1rem"
            fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]}
          >
            About me
          </Heading>
          <Text
            fontWeight={600}
            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
            color={"theme.300"}
            mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
          >
            I am Peter, currently located in Lagos, Nigeria. A fullstack web
            developer.
          </Text>
          <Text
            fontWeight={600}
            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
            color={"theme.300"}
            mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
          >
            I design great websites, online stores, learning platforms and
            anything you can imagine on the web.
          </Text>
        </Box>
        <Box
          w={["90%", "90%", "50%", "50%"]}
          d={["flex", "flex", "flex", "flex"]}
          py="2rem"
          data-aos="fade-down"
        >
          <Image
            src="/about.svg"
            w={["100%", "100%", "80%", "90%"]}
            h={["100%", "100%", "100%", "50%"]}
            alt="A man sitting and relaxing"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}
