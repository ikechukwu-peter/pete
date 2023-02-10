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
import { baseLinks, courseLinks } from "@/data/links";

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
      py={4}
      px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
      pos="sticky"
      top={0}
      zIndex={999}
    >
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        maxW={"container.xl"}
      >
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
                              as={NextLink}
                              fontWeight={600}
                              _hover={{
                                color: "brand.400",
                              }}
                              bg={pathname === to ? "brand.500" : undefined}
                              w="100%"
                              color="brand.300"
                              textAlign={"left"}
                              target="_blank"
                              href={to}
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
                    target="_blank"
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
