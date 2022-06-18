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
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Projects({ lightBg, lightTextColor, cardBg }) {
  return (
    <Box
      bg={lightBg}
      w="100vw"
      fontFamily="Source Sans Pro"
      color={lightTextColor}
      id="projects"
    >
      <Center pt="4rem" fontSize="3rem" fontWeight={600}>
        Projects
      </Center>

      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing="40px"
        width={["90%", "95%", "95%", "80%"]}
        m="auto"
        pt="2rem"
      >
        <Box
          bg={cardBg}
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
            // bg: "gray.700",
          }}
          w="100%"
          pb="4rem"
          rounded="xl"
        >
          <Box
            d="flex"
            flexDirection="column"
            alignItems="flex-start"
            w={["90%", "86%", "80%", "60%"]}
            m="auto"
            mt="2rem"
          >
            <Heading fontSize="1.8rem" my="1rem">
              Nip
            </Heading>
            <Text fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}>
              A URL shortening and expanding website, built with NodeJs,
              Typescript, Pug and CSS.
            </Text>
            <HStack
              justify={["space-between", "space-between", "normal", "normal"]}
              mt={["1rem", "1rem", "1rem", "1rem"]}
            >
              <DarkMode>
                <Link
                  href="https://nipurl.herokuapp.com"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    mr={["0rem", "0rem", "2rem", "3rem"]}
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FiLink />}
                  >
                    Website
                  </Button>
                </Link>
              </DarkMode>
              <DarkMode>
                <Link
                  href="https://github.com/ikechukwu-peter/nip"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </DarkMode>
            </HStack>
          </Box>
        </Box>
        <Box
          bg={cardBg}
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
            // bg: "gray.700",
          }}
          pb="4rem"
          rounded="xl"
        >
          <Box
            d="flex"
            flexDirection="column"
            alignItems="flex-start"
            w={["90%", "86%", "80%", "60%"]}
            m="auto"
            mt="2rem"
          >
            <Heading fontSize="1.8rem" my="1rem">
              Wood.in
            </Heading>
            <Text fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}>
              An e-commerce landing page, built with HTML, CSS and Javascript.
            </Text>
            <HStack
              justify={["space-between", "space-between", "normal", "normal"]}
              mt={["1rem", "1rem", "1rem", "1rem"]}
            >
              <DarkMode>
                <Link
                  href="https://wood-omega.vercel.app/"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    mr={["0rem", "0rem", "2rem", "3rem"]}
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FiLink />}
                  >
                    Website
                  </Button>
                </Link>
              </DarkMode>
              <DarkMode>
                <Link
                  href="https://github.com/ikechukwu-peter/wood.in"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </DarkMode>
            </HStack>
          </Box>
        </Box>
        <Box
          bg={cardBg}
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
            // bg: "gray.700",
          }}
          pb="4rem"
          rounded="xl"
        >
          <Box
            d="flex"
            flexDirection="column"
            alignItems="flex-start"
            w={["90%", "86%", "80%", "60%"]}
            m="auto"
            mt="2rem"
          >
            <Heading fontSize="1.8rem" my="1rem">
              Crebb
            </Heading>
            <Text fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}>
              A session booking site built with ReactJs, CSS and Nodejs.
            </Text>
            <HStack
              justify={["space-between", "space-between", "normal", "normal"]}
              mt={["1rem", "1rem", "1rem", "1rem"]}
            >
              <DarkMode>
                <Link
                  href="https://crebb.vercel.app/"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    mr={["0rem", "0rem", "2rem", "3rem"]}
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FiLink />}
                  >
                    Website
                  </Button>
                </Link>
              </DarkMode>
              <DarkMode>
                <Link
                  href="https://github.com/ikechukwu-peter/crebb"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </DarkMode>
            </HStack>
          </Box>
        </Box>

        <Box
          bg={cardBg}
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
            // bg: "gray.700",
          }}
          pb="4rem"
          rounded="xl"
        >
          <Box
            d="flex"
            flexDirection="column"
            alignItems="flex-start"
            w={["90%", "86%", "80%", "60%"]}
            m="auto"
            mt="2rem"
          >
            <Heading fontSize="1.8rem" my="1rem">
              HQI Store
            </Heading>
            <Text fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}>
              {" An E-commerce store , built  ReactJS and ChakraUI."}
            </Text>
            <HStack
              justify={["space-between", "space-between", "normal", "normal"]}
              mt={["1rem", "1rem", "1rem", "1rem"]}
            >
              <DarkMode>
                <Link
                  href="https://hqi-store.vercel.app/"
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    mr={["0rem", "0rem", "2rem", "3rem"]}
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FiLink />}
                  >
                    Website
                  </Button>
                </Link>
              </DarkMode>
              <DarkMode>
                <Link
                  href="https://github.com/ikechukwu-peter/hqi-store"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </DarkMode>
            </HStack>
          </Box>
        </Box>
        <Box
          bg={cardBg}
          height="auto"
          transitionProperty="transform"
          transitionDuration="2s"
          transitionTimingFunction="ease"
          _hover={{
            transform: "scale(1.1)",
            // bg: "gray.700",
          }}
          pb="4rem"
          rounded="xl"
        >
          <Box
            d="flex"
            flexDirection="column"
            alignItems="flex-start"
            w={["90%", "86%", "80%", "60%"]}
            m="auto"
            mt="2rem"
          >
            <Heading fontSize="1.8rem" my="1rem">
              Pete
            </Heading>
            <Text fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}>
              {
                "Ikechukwu Peter's portfolio site, built with NextJS, ReactJS and ChakraUI."
              }
            </Text>
            <HStack
              justify={["space-between", "space-between", "normal", "normal"]}
              mt={["1rem", "1rem", "1rem", "1rem"]}
            >
              <DarkMode>
                <Link
                  href="https://pete.vercel.app/"
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    mr={["0rem", "0rem", "2rem", "3rem"]}
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FiLink />}
                  >
                    Website
                  </Button>
                </Link>
              </DarkMode>
              <DarkMode>
                <Link
                  href="https://github.com/ikechukwu-peter/pete"
                  isExternal
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    size="md"
                    color="whiteAlpha.900"
                    bg={"purple.700"}
                    variant="ghost"
                    _hover={{
                      bg: "purple.800",
                    }}
                    _focus={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    _active={{
                      bg: "purple.800",
                      border: "none",
                    }}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </DarkMode>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      <Center pt="4rem" pb="4rem" fontSize="2rem" fontWeight={600}>
        <Link
          href="https://github.com/ikechukwu-peter?tab=repositories"
          isExternal
          _hover={{
            textDecor: "none",
          }}
          _active={{
            textDecor: "none",
            variant: "ghost",
            outline: "none",
            border: "none",
          }}
          _focus={{
            textDecor: "none",
            variant: "ghost",
            outline: "none",
            border: "none",
          }}
          color="purple.600"
          fontSize="1rem"
        >
          Respositories on Github
        </Link>
      </Center>
    </Box>
  );
}
