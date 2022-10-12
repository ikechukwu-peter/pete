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
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

export default function Blogs({ blogs }) {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Center>
        {" "}
        <Text
          fontSize={{ base: "1rem", md: "1.5rem" }}
          fontWeight={600}
          color="theme.400"
        >
          Blogs
        </Text>
      </Center>

      <SimpleGrid columns={[1, 1, 2, 4, 4]} spacing="40px" pt="2rem" pb="4rem">
        {!!blogs?.length &&
          blogs.map(({ thumbnail, title, link: url, pubDate }, index) => (
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
                    src={thumbnail}
                    alt={title}
                    blurDataURL={`/_next/image?url=${thumbnail}&w=16&q=1`}
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
                    <Stack
                      align={"center"}
                      direction="row"
                      as={Link}
                      _hover={{
                        textDecor: "none",
                      }}
                      isExternal={true}
                    >
                      <BsCalendarDate />
                      <Text>{pubDate?.split(" ")[0]}</Text>
                    </Stack>
                    <Stack
                      align={"center"}
                      direction="row"
                      as={Link}
                      _hover={{
                        textDecor: "none",
                      }}
                      href={url}
                      isExternal={true}
                    >
                      <AiFillEye display={"inline"} />
                      <Text>View</Text>
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
