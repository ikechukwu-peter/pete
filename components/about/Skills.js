import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Tooltip,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaHtml5, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  return (
    <Box mt="2rem" w="100%">
      <Box w="100%">
        <Heading fontSize={{ base: "1rem", md: "2rem" }} color="theme.300">
          {"Tools, Languages & Frameworks/Libraries"}{" "}
        </Heading>
      </Box>
      <Flex
        justifyContent="space-between"
        flexDir={["column", "column", "column", "row"]}
        py="2rem"
        align="center"
      >
        <Box w={["100%", "100%", "100%", "100%"]}>
          <SimpleGrid
            columns={[2, 2, 2, 4]}
            spacing="40px"
            pt="2rem"
            pb="4rem"
            // placeItems="center"
          >
            <Icon
              as={FaHtml5}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={SiCss3}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={SiJavascript}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.1)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={SiReact}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={FaNodeJs}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={SiTypescript}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />

            <Icon
              as={FaSass}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />
            <Icon
              as={SiExpress}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
              }}
              w={["30%", "30%", "30%", "30%"]}
              rounded="xl"
              color="theme.300"
            />
          </SimpleGrid>
        </Box>
      </Flex>

      <Box w="100%">
        <Heading
          fontSize={{ base: "1rem", md: "2rem" }}
          color="theme.300"
          mb="1rem"
        >
          {"Skills"}
        </Heading>
        <Flex direction={"column"} gap="2rem" align={"center"}>
          <Text
            p="1.4rem"
            rounded={"xl"}
            bg="theme.600"
            color={useColorModeValue("theme.100", "theme.100")}
          >
            Web Development
          </Text>
          <Text
            p="1.4rem"
            rounded={"xl"}
            bg="theme.600"
            color={useColorModeValue("theme.100", "theme.100")}
          >
            Mobile Development
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
