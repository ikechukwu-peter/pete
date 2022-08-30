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
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";

export default function Projects() {
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
        <Link
          href="works"
          _hover={{
            textDecor: "none",
          }}
          _focus={{
            border: "none",
          }}
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
      </Flex>
      <Flex
        justify={"space-between"}
        align="center"
        mt="2rem"
        gap="2rem"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
          }}
          w="100%"
          // pb="4rem"
          rounded="xl"
          borderWidth={"2px"}
        >
          <Image
            src="/about.svg"
            alt="Webzerve picture"
            w="50%"
            objectFit={"contain"}
          />

          <Box bg="theme.600" p="1rem">
            <HStack>
              <Text>Blog</Text>

              <HStack>
                <Text>Hello</Text>
              </HStack>
            </HStack>
            <Box>
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
                <Text>Live Preview</Text>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
          }}
          w="100%"
          // pb="4rem"
          rounded="xl"
          borderWidth={"2px"}
        >
          <Image
            src="/about.svg"
            alt="Webzerve picture"
            w="50%"
            objectFit={"contain"}
          />

          <Box bg="theme.600" p="1rem">
            <HStack>
              <Text>Blog</Text>

              <HStack>
                <Text>Hello</Text>
              </HStack>
            </HStack>
            <Box>
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
                <Text>Live Preview</Text>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
