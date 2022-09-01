import {
  Flex,
  Box,
  Link,
  Text,
  Heading,
  VStack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Footer() {
  console.log(process.env.NEXT_PUBLIC_COUNTAPI_KEY);
  const [visits, setVisits] = useState(0);

  const getNumberOfVisit = useCallback(() => {
    axios
      .get(
        `https://api.countapi.xyz/hit/pete.vercel.app/${process.env.NEXT_PUBLIC_COUNTAPI_KEY}`
      )
      .then((result) => {
        console.log(result);
        setVisits(result.value);
      });
  }, []);

  useEffect(() => {
    getNumberOfVisit();
  }, [getNumberOfVisit]);

  const { colorMode } = useColorMode();

  let date = new Date().getFullYear();
  return (
    <Box className={styles.footer} w="100%">
      <Box bg={useColorModeValue("theme.100", "theme.500")} w="100%">
        <Box w="90%" m="auto">
          <Flex
            justify={"space-between"}
            direction={{ base: "column", md: "row" }}
            mt="1rem"
          >
            <Box py="1rem" textAlign={{ base: "center", md: "left" }}>
              <Heading
                fontSize={{ base: "1rem", md: "1.2rem" }}
                color={colorMode === "dark" ? "theme.100" : "theme.500"}
              >
                {"Let's Connect"}
              </Heading>
              {visits > 0 && (
                <Text
                  color={colorMode === "dark" ? "theme.100" : "theme.500"}
                  py="1rem"
                >
                  Visits:{" "}
                  <Text
                    as="span"
                    px="2"
                    py="1"
                    color="theme.500"
                    rounded={"xl"}
                    bg="theme.300"
                  >
                    {visits}
                  </Text>
                </Text>
              )}
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              color={colorMode === "dark" ? "theme.100" : "theme.500"}
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
          <VStack
            align={{ base: "center", md: "left" }}
            color={colorMode === "dark" ? "theme.100" : "theme.500"}
            pb="1rem"
          >
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
      <Box bg="theme.600" w="100%" h="100%">
        <Box w="90%" m="auto">
          <Flex
            py="3rem"
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="1rem"
          >
            <Text color="theme.100" textAlign={{ base: "center", md: "left" }}>
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
    </Box>
  );
}
