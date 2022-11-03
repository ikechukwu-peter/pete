import {
  Box,
  Center,
  Text,
  Link,
  Image as ChakraImage,
  SimpleGrid,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import NextLink from "next/link";
import Image from "next/image";
import webzerve from "/public/webzerve.png";
import weaverbuxx from "/public/weaverbuxx.png";
import portfolio from "/public/portfolio.png";
import nip from "/public/nip.png";
import hqistore from "/public/hqistore.png";
import woodin from "/public/woodin.png";

const projects = [
  {
    cover: webzerve,
    title: "Webzerve",
    url: "https://webzerve.vercel.app",
    tools: "NodeJs, TypeScript, NextJs",
  },
  {
    cover: weaverbuxx,
    title: "Weaverbuxx",
    url: "https://weaverbuxx.com",
    tools: "NodeJs, TypeScript, , NextJs",
  },
  {
    cover: portfolio,
    title: "Portfolio ",
    url: "https://pete.vercel.com",
    tools: "NextJs, ChakraUI",
  },
  {
    cover: nip,
    title: "Nip ",
    url: "https://nipurl.herokuapp.com",
    tools: "NodeJs, TypeScript",
  },
  {
    cover: hqistore,
    title: "HQI Store",
    url: "https://hqi-store.vercel.app/",
    tools: "NodeJs, TypeScript, ReactJs, Redux",
  },

  {
    cover: woodin,
    title: "Woodin",
    url: "https://wood-omega.vercel.app/",
    tools: "JavaScript, HTML, CSS",
  },
];

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box w="100%">
      <Center>
        {" "}
        <Text
          fontSize={{ base: "1rem", md: "1.5rem" }}
          fontWeight={600}
          color="theme.400"
        >
          Projects
        </Text>
      </Center>

      <SimpleGrid columns={[1, 1, 2, 4, 4]} spacing="40px" pt="2rem" pb="4rem">
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
                  <Image
                    layout="responsive"
                    placeholder="blur"
                    src={cover}
                    alt={title}
                    width="100%"
                    height={"100%"}
                    as={ChakraImage}
                  />
                </Box>
              </Box>
              <Box
                bg="theme.600"
                p="1rem"
                color={colorMode === "dark" ? "theme.100" : "theme.100"}
              >
                <Stack>
                  <Text>{title}</Text>
                </Stack>
                <Box>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing="10px"
                    pt="1rem"
                    align={"left"}
                  >
                    <NextLink href={"projects/" + title} passHref>
                      <Stack
                        align={"center"}
                        direction="row"
                        as={Link}
                        isExternal={false}
                        _hover={{
                          textDecor: "none",
                        }}
                        fontSize={".8rem"}
                      >
                        <BsBook />
                        <Text>Details</Text>
                      </Stack>
                    </NextLink>

                    <Stack
                      align={"center"}
                      direction="row"
                      as={Link}
                      _hover={{
                        textDecor: "none",
                      }}
                      href={url}
                      isExternal={true}
                      fontSize={".8rem"}
                    >
                      <AiFillEye display={"inline"} />
                      <Text>Live Preview</Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}
