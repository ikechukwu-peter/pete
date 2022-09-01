import {
  Box,
  Center,
  HStack,
  Heading,
  Text,
  Link,
  Button,
  Image,
  DarkMode,
  SimpleGrid,
  Flex,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import NextLink from "next/link";
import { BsBook } from "react-icons/bs";

const projects = [
  {
    cover: "/webzerve.png",
    title: "Webzerve",
    url: "https://webzerve.vercel.app",
    tools: "NodeJs, TypeScript, NextJs",
  },
  {
    cover: "/weaverbuxx.png",
    title: "Weaverbuxx",
    url: "https://weaverbuxx.com",
    tools: "NodeJs, TypeScript, , NextJs",
  },
];

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box mt="2rem">
      <Flex justify={"space-between"} align="center">
        <Text
          fontSize={{ base: "1rem", md: "1.5rem" }}
          fontWeight={600}
          color="theme.400"
        >
          Recent Projects
        </Text>
        <NextLink href="works" passHref>
          <Link
            _hover={{
              textDecor: "none",
            }}
            _focus={{
              border: "none",
            }}
            mr=".4rem"
          >
            <Button
              color="theme.100"
              bg={"theme.300"}
              _hover={{
                bg: "theme.300",
              }}
              _focus={{
                bg: "theme.300",
              }}
              _active={{
                bg: "theme.300",
              }}
            >
              View More
            </Button>
          </Link>
        </NextLink>
      </Flex>
      <Flex
        justify={"space-between"}
        align="center"
        mt="2rem"
        gap="1.5rem"
        direction={{ base: "column", md: "row" }}
      >
        {!!projects?.length &&
          projects.map(({ cover, title, url, tools }, index) => (
            <Box
              key={index}
              height="auto"
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.1)",
              }}
              w="100%"
              rounded="md"
              border="2px"
              borderColor={colorMode === "dark" ? "theme.600" : "theme.700"}
            >
              <Box d="flex" flexDirection="column" alignItems="center" w="100%">
                <Box w="100%">
                  <Image src={cover} alt={title} />
                </Box>
              </Box>
              <Box
                bg="theme.600"
                p="1rem"
                color={colorMode === "dark" ? "theme.100" : "theme.100"}
              >
                <Stack>
                  <Text>{title}</Text>

                  {/* <Text>{tools}</Text> */}
                </Stack>
                <Box>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing="10px"
                    pt="1rem"
                    align={"left"}
                  >
                    <Stack
                      align={"center"}
                      //   justify="center"
                      direction="row"
                      as={Link}
                      href={title}
                      isExternal={true}
                      _hover={{
                        textDecor: "none",
                      }}
                    >
                      <BsBook />
                      <Text>Details</Text>
                    </Stack>
                    <Stack
                      align={"center"}
                      direction="row"
                      as={Link}
                      href={url}
                      isExternal={true}
                      _hover={{
                        textDecor: "none",
                      }}
                    >
                      <AiFillEye display={"inline"} />
                      <Text>Live Preview</Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          ))}
      </Flex>
    </Box>
  );
}
