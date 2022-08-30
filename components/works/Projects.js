import {
  Box,
  Center,
  Text,
  Link,
  Image,
  SimpleGrid,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const projects = [
  {
    cover: "/dev_pete.png",
    title: "Nip ",
    url: "https://nipurl.herokuapp.com",
    tools: "NodeJs, TypeScript",
  },
  {
    cover: "/dev_pete.png",
    title: "HQI Store",
    url: "https://hqistore.com",
    tools: "NodeJs, TypeScript, ReactJs, Redux",
  },
  {
    cover: "/dev_pete.png",
    title: "Webzerve",
    url: "https://webzerve.vercel.app",
    tools: "NodeJs, TypeScript, NextJs, NextJs",
  },
];

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box mt="2rem">
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
                  <Image src={cover} alt={title} lazy />
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
                  <Stack direction="row">
                    <Stack
                      align={"center"}
                      justify="center"
                      direction="row"
                      as={Link}
                      _hover={{
                        textDecor: "none",
                      }}
                    >
                      <BsBook />
                      <Link
                        href={title}
                        isExternal={true}
                        _hover={{
                          textDecor: "none",
                        }}
                      >
                        Details
                      </Link>
                    </Stack>
                    <Stack
                      align={"center"}
                      justify="center"
                      direction="row"
                      as={Link}
                      _hover={{
                        textDecor: "none",
                      }}
                    >
                      <AiFillEye display={"inline"} />
                      <Link
                        href={url}
                        isExternal={true}
                        _hover={{
                          textDecor: "none",
                        }}
                      >
                        Live Preview
                      </Link>
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
