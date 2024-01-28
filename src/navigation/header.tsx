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
import { CustomBox } from "@/components/animation/custom-elements";
import { Logo } from "@/components/logo";

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
      pos={"sticky"}
      top={0}
      zIndex={999}
    >
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        maxW={"container.xl"}
      >
        <Logo />

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
                      <CustomBox
                        key={name + index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <NextLink href={to} passHref onClick={onClose}>
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
                      </CustomBox>
                    ))}
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem border="none" p="-1px">
                        <CustomBox
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          // @ts-ignore no problem in operation, although type error appears.
                          transition={{ duration: 0.5, delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                        >
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
                        </CustomBox>

                        {courseLinks.map(({ name, to }, index) => (
                          <CustomBox
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            // @ts-ignore no problem in operation, although type error appears.
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <AccordionPanel pb={4}>
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
                          </CustomBox>
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
              <CustomBox
                key={name + index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9, y: 5 }}
              >
                <NextLink href={to} passHref>
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
              </CustomBox>
            ))}
            <Menu isLazy>
              <CustomBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9, y: 5 }}
              >
                <MenuButton
                  as={Button}
                  rightIcon={<BsChevronDown />}
                  bg="transparent"
                  _hover={{ color: "brand.400" }}
                  _active={{ color: "brand.400" }}
                  color={pathname === "/courses" ? "brand.400" : "brand.300"}
                >
                  Courses
                </MenuButton>
              </CustomBox>
              <MenuList w="100%" bg="brand.700">
                {courseLinks.map(({ name, to }, index) => (
                  <CustomBox
                    key={name + index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <MenuItem
                      bg="brand.700"
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
                  </CustomBox>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
