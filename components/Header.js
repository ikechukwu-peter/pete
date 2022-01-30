import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {
  Flex,
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  SmallCloseIcon,
  MoonIcon,
  SunIcon
} from "@chakra-ui/icons"
// import undraw_developer from '../public/assets/undraw_developer.svg'
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState("none")
  const logo = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
  const bgColor = useColorModeValue("gray.200", "gray.800")
  const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content="Ikechukwu Peter Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex maxW="auto"
        bg={bgColor}
        minH={"4rem"}
        h={"4rem", "4rem", "5rem"}
        justifyContent="space-around"
        alignItems="center"
        fontFamily="Source Sans Pro"
        fontWeight="600"


      >
        <Heading
          _hover={{ cursor: "pointer" }}
          fontSize={["1rem", "1.2rem"]}
          color={logo}
        >
          Pete
        </Heading>
        <Box
          d="flex"
          justifyContent="space-around"
          alignItems="center">
          <Box d={["none", "none", "flex", "flex"]}
            w="100%"
            justifyContent={"space-around"}
            fontSize={["1rem", "1.2rem"]}
          >

            <Link
              href="#"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
            >About me</Link>
            <Link
              href="#"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
            >Projects</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">Services</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">
              Skills</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">
              Articles</Link>
          </Box>
          <Box>
            <IconButton
              _focus={{
                border: "none",
                outline: "none"
              }}
              _hover={{
                border: "none",
                outline: "none"
              }}
              _active={{
                border: "none",
                outline: "none"
              }}
              // variant="ghost"

              rounded={60}
              size={"sm"}
              aria-label="Toggle Mode"
              onClick={toggleColorMode}
              zIndex="21"
              ml={{ base: "null", sm: "null", md: "1rem", lg: "3rem" }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Box>
          <Flex
            d={["flex", "flex", "none", "none"]}
            justifyContent={"flex-end"}

            pl={"5rem"}>
            <HamburgerIcon
              fontSize={"1.5rem"}
              onClick={() => changeDisplay("flex")}
            />
          </Flex>


          <Flex flexDir={"column"}
            w={"100vw"}
            h={"100vh"}
            bg={"blackAlpha.900"}
            top={0}
            left={0}
            pos={"fixed"}
            zIndex={20}
            display={display}
          >

            <Flex
              justifyContent={"flex-end"}
              mt={"1.8rem"}
              mr={"2.6rem"}>
              <SmallCloseIcon
                onClick={() => changeDisplay("none")}
                fontSize={"1.5rem"} />
            </Flex>


            <Box
              d={"flex"}
              flexDir={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              w={"100vw"}
              h={"100vh"}
            >

<Link
              href="#"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
            >About me</Link>
            <Link
              href="#"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
            >Projects</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">Services</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">
              Skills</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { bgColor },
                bg: "teal.400",
              }}
              _focus={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              _active={{
                textDecor: "none",
                bg: "none",
                border: "none"
              }}
              href="#">
              Articles</Link>
            </Box>
          </Flex>

        </Box>

      </Flex>


    </>
  )
}