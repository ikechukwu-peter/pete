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
    <Box mt="2rem">
      <Box>
        <Heading fontSize="3rem" color="theme.300">
          {"          Tools, Languages & Frameworks/Libraries"}{" "}
        </Heading>
      </Box>
      <Flex
        justifyContent="space-between"
        flexDir={["column", "column", "column", "row"]}
        py="2rem"
      >
        <Box w={["100%", "100%", "100%", "100%"]}>
          <SimpleGrid
            columns={[2, 2, 2, 4]}
            spacing="40px"
            pt="2rem"
            pb="4rem"
            placeItems="center"
          >
            <Icon
              as={FaHtml5}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={SiCss3}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={SiJavascript}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.1)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={SiReact}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={FaNodeJs}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={SiTypescript}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />

            <Icon
              as={FaSass}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />
            <Icon
              as={SiExpress}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.2)",
                // bg: "gray.700",
              }}
              w={["30%", "35%", "40%", "60%"]}
              //  pb="2rem"
              rounded="xl"
              color="purple.500"
            />
          </SimpleGrid>
        </Box>
      </Flex>

      <Box>
        <Heading fontSize="3rem" color="theme.300">
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
