import { useRef } from "react";
import {
  Flex,
  Box,
  Heading,
  IconButton,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const links = [
  { name: "Home", to: "/" },
  { name: "Works", to: "works" },
  { name: "About me", to: "about" },
  { name: "Contact", to: "contact" },
  { name: "Blog", to: "blog" },
];

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [isTab] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex
        maxW="auto"
        minH={"6rem"}
        h={["4rem", "4rem", "4rem"]}
        justifyContent="space-around"
        alignItems="center"
        fontWeight="600"
        bg="theme.500"
      >
        <Heading
          _hover={{ cursor: "pointer", textDecor: "none", color: "theme.300" }}
          fontSize={["1rem", "1.2rem"]}
          color="theme.100"
          ml={["1rem", "1rem", "1rem", "3rem"]}
          w="50%"
          as={Link}
          href="/"
          textDecor={"none"}
        >
          Pete
        </Heading>
        <Box
          d="flex"
          justifyContent={["end", "end", "end", "space-around"]}
          alignItems="center"
          w={["50%", "50%", "50%", "100%"]}
        >
          <Box
            d={["none", "none", "none", "flex"]}
            w={["100%", "100%", "100%", "80%"]}
            justifyContent={"space-around"}
            fontSize={["1rem", "1.2rem"]}
          >
            {links.map(({ name, to }, index) => (
              <Link
                key={index}
                href={to}
                fontWeight={700}
                px={(".2rem", ".2rem", ".5rem", "1rem")}
                py=".8rem"
                _hover={{
                  textDecor: "none",
                  color: "theme.300",
                }}
                _focus={{
                  textDecor: "none",
                  bg: "none",
                  border: "none",
                }}
                _active={{
                  textDecor: "none",
                  bg: "none",
                  border: "none",
                }}
                onClick={onClose}
                color="theme.100"
              >
                {name}
              </Link>
            ))}
          </Box>
          <Box mr={["1.4rem", "1.4rem", "1.4rem", "0rem"]}>
            <IconButton
              _focus={{
                border: "none",
                outline: "none",
              }}
              _hover={{
                border: "none",
                outline: "none",
              }}
              _active={{
                border: "none",
                outline: "none",
              }}
              rounded={60}
              size={"sm"}
              aria-label="Toggle Mode"
              color="theme.100"
              onClick={toggleColorMode}
              ml={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
            >
              {colorMode === "light" ? (
                <MoonIcon color="theme.300" />
              ) : (
                <SunIcon color="theme.300" />
              )}
            </IconButton>
          </Box>

          <Flex
            d={["flex", "flex", "flex", "none"]}
            justifyContent={"flex-end"}
            mr={["1.5rem"]}
            ref={btnRef}
            onClick={onOpen}
          >
            <HamburgerIcon color="theme.100" fontSize={"1.5rem"} />
          </Flex>

          {isTab && (
            <Box display={["flex", "flex", "none", "none"]}>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={isTab && "md"}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton mt="2rem" />
                  <DrawerBody>
                    <Flex
                      direction={"column"}
                      align="center"
                      gap={9}
                      mt={"6rem"}
                    >
                      {links.map(({ name, to }, index) => (
                        <Link
                          key={index}
                          href={to}
                          fontWeight={700}
                          px={("2rem", ".6rem", "1rem", "2rem")}
                          py=".8rem"
                          _hover={{
                            textDecor: "none",
                            color: "theme.300",
                          }}
                          _focus={{
                            textDecor: "none",
                            bg: "none",
                            border: "none",
                          }}
                          _active={{
                            textDecor: "none",
                            bg: "none",
                            border: "none",
                          }}
                          onClick={onClose}
                        >
                          {name}
                        </Link>
                      ))}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
}
