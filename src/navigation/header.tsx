import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import NextLink from "next/link";
import { useRouter } from "next/router";
//LINKS on my header
const baseLinks = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "About Me", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const courseLinks = [
  { name: "Video", to: "" },
  { name: "Blog", to: "" },
];

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <Box
      w="100%"
      h={16}
      bg="brand.100"
      color="brand.300"
      p={4}
      pos="sticky"
      top={0}
    >
      <Flex w="100%" justify="space-between" align="center">
        <Box as="h2">Pete</Box>
        <Flex as="ul" gap={3}>
          {baseLinks.map(({ name, to }, index) => (
            <NextLink href={to} passHref key={name + index}>
              <Box
                fontWeight={600}
                _hover={{ bg: "brand.400", p: 2, rounded: "xl" }}
                bg={pathname === to ? "brand.500" : undefined}
                rounded="xl"
                p={pathname === to ? 2 : 1}
              >
                {name}
              </Box>
            </NextLink>
          ))}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              bg="brand.200"
              _hover={{ bg: "brand.400", p: 2, rounded: "xl" }}
            >
              Courses
            </MenuButton>
            <MenuList bg="brand.100" w="100%">
              {courseLinks.map(({ name, to }, index) => (
                <MenuItem
                  key={name + index}
                  bg={pathname === to ? "brand.500" : undefined}
                  _hover={{ bg: "brand.400", p: 2, rounded: "xl" }}
                  as={NextLink}
                  href={to}
                  color="black"
                >
                  {name}
                  {/* <Box
                    fontWeight={600}
                    _hover={{ bg: "brand.400", p: 2, rounded: "xl" }}
                    bg={pathname === to ? "brand.500" : undefined}
                    rounded="xl"
                    p={pathname === to ? 2 : 1}
                    w="100%"
                  >
                   
                  </Box> */}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
