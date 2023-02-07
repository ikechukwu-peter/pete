import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { CgMenuMotion } from "react-icons/cg";
//LINKS on my header
const baseLinks = [
  { name: "About Me", to: "/about" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
];

const courseLinks = [
  { name: "Video", to: "/video" },
  { name: "Blog", to: "/blog" },
];

export const Header = () => {
  const { pathname } = useRouter();

  // ssr-friendly media query with fallback
  const [isMobile] = useMediaQuery("(max-width: 600px)", {
    ssr: true,
    fallback: false,
  });

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box
      w="100%"
      h={20}
      bg="brand.700"
      color="brand.300"
      p={4}
      pos="sticky"
      top={0}
    >
      <Flex w="100%" justify="space-between" align="center">
        <NextLink href="/">
          <Flex
            direction={"column"}
            _hover={{
              color: "brand.400",
            }}
            fontWeight={{ base: "500", md: "700" }}
            gap="0"
          >
            <Box
              as="h2"
              fontSize={{ base: "1rem" }}
              shadow="xl"
              textTransform="uppercase"
            >
              Iyke
            </Box>
            <Box
              as="h2"
              fontSize={{ base: "1rem" }}
              shadow="xl"
              textTransform="uppercase"
              pl="1rem"
            >
              Peter
            </Box>
          </Flex>
        </NextLink>

        {isMobile ? (
          <>
            {!isOpen && (
              <Box
                as="span"
                onClick={onToggle}
                aria-label="open menu"
                color="brand.300"
                fontWeight={700}
                fontSize={{ base: "2rem" }}
              >
                <CgMenuMotion />
              </Box>
            )}

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="brand.700">
                <DrawerCloseButton
                  bg="brand.200"
                  borderRadius="50%"
                  color="brand.300"
                  fontWeight="2rem"
                />

                <DrawerBody mt="4rem">
                  <Flex as="ul" gap={3} direction={{ base: "column" }}>
                    {baseLinks.map(({ name, to }, index) => (
                      <NextLink
                        href={to}
                        passHref
                        key={name + index}
                        onClick={onClose}
                      >
                        <Box
                          fontWeight={600}
                          _hover={{
                            color: "brand.400",
                          }}
                          p={2}
                          color={pathname === to ? "brand.400" : "brand.300"}
                        >
                          {name}
                        </Box>
                      </NextLink>
                    ))}
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem border="none" p="-1px">
                        <h2>
                          <AccordionButton p="2">
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color="brand.300"
                              w="100%"
                              fontWeight={600}
                            >
                              Courses
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        {courseLinks.map(({ name, to }) => (
                          <AccordionPanel pb={4} key={name}>
                            <Box
                              fontWeight={600}
                              _hover={{
                                color: "brand.400",
                              }}
                              bg={pathname === to ? "brand.500" : undefined}
                              w="100%"
                              color="brand.300"
                              textAlign={"left"}
                            >
                              {name}
                            </Box>
                          </AccordionPanel>
                        ))}
                      </AccordionItem>
                    </Accordion>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex as="ul" gap={3}>
            {baseLinks.map(({ name, to }, index) => (
              <NextLink href={to} passHref key={name + index}>
                <Box
                  fontWeight={700}
                  _hover={{ color: "brand.400" }}
                  rounded="xl"
                  p={2}
                  color={pathname === to ? "brand.400" : "brand.300"}
                >
                  {name}
                </Box>
              </NextLink>
            ))}
            <Menu isLazy>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                bg="transparent"
                _hover={{ color: "brand.400" }}
                _active={{ color: "brand.400" }}
              >
                Courses
              </MenuButton>
              <MenuList w="100%" bg="brand.700">
                {courseLinks.map(({ name, to }, index) => (
                  <MenuItem
                    bg="brand.700"
                    key={name + index}
                    as={NextLink}
                    href={to}
                  >
                    <Box
                      fontWeight={600}
                      _hover={{ color: "brand.400" }}
                      w="100%"
                      color={pathname === to ? "brand.400" : "brand.300"}
                      textAlign={"center"}
                    >
                      {name}
                    </Box>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
