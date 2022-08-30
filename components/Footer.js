import { Flex, Box, Link, Text, Heading, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <Box bg="theme.500">
        <Box w="90%" m="auto">
          <Flex
            justify={"space-between"}
            direction={{ base: "column", md: "row" }}
          >
            <Box py="1rem" textAlign={{ base: "center", md: "left" }}>
              <Heading
                fontSize={{ base: "1rem", md: "1.2rem" }}
                color="theme.100"
              >
                {"Let's Connect"}
              </Heading>
              <Text color="theme.100" py="1rem">
                Visits:{" "}
                <Text
                  as="span"
                  px="2"
                  py="1"
                  color="theme.500"
                  rounded={"xl"}
                  bg="theme.300"
                >
                  1233
                </Text>
              </Text>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              color="gray.50"
              fontSize={["1.2rem", "1.2rem", "1.3rem", "1.5rem"]}
              gap="1rem"
              mb="1rem"
            >
              <Link
                href="https://linkedin.com/in/peter-ikechukwu"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <ImLinkedin2 />
              </Link>
              <Link
                href="https://github.com/ikechukwu-peter"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://instagram.com/pete_iyke"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <SiInstagram />
              </Link>
            </Flex>
          </Flex>
          <VStack align={"left"} color="theme.100" pb="1rem">
            <Link
              _hover={{
                textDecor: "none",
                cursor: "pointer",
              }}
            >
              Report
            </Link>
            <Link
              _hover={{
                textDecor: "none",
                cursor: "pointer",
              }}
            >
              Feedback
            </Link>
            <Link
              _hover={{
                textDecor: "none",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </Link>
          </VStack>
        </Box>
      </Box>
      <Box bg="theme.600">
        <Box w="90%" m="auto">
          <Flex py="3rem" direction={"row"} justifyContent="space-between">
            <Text color="theme.100">
              &copy; {date} Peter. All rights reserved.
            </Text>

            <Flex
              justifyContent="center"
              alignItems="center"
              color="gray.50"
              fontSize={["1.2rem", "1.2rem", "1.3rem", "1.5rem"]}
              gap="1rem"
            >
              <Link
                href="https://linkedin.com/in/peter-ikechukwu"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <ImLinkedin2 />
              </Link>
              <Link
                href="https://github.com/ikechukwu-peter"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://instagram.com/pete_iyke"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <SiInstagram />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
