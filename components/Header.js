import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  Link,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  SmallCloseIcon,
  MoonIcon,
  SunIcon
} from "@chakra-ui/icons"

export default function Header({
  headBg,
  logo,
  hamburgerNav,
  hoverBg,
  darkTextColor }) {

  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState("none")

  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content="Ikechukwu Peter Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex maxW="auto"
        bg={headBg}
        minH={"6rem"}
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
          ml={["1rem", "1rem", "1rem", "3rem"]}
          w="50%"
        >
          Pete
        </Heading>
        <Box
          d="flex"
          justifyContent={["end", "end", "end", "space-around"]}
          alignItems="center"
          w={["50%", "50%", "50%", "100%"]}
        >
          <Box d={["none", "none", "none", "flex"]}
            w={["100%", "100%", "100%", "80%"]}
            justifyContent={"space-around"}
            fontSize={["1rem", "1.2rem"]}
            color={darkTextColor}
          >

            <Link
    
              href="#about"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { headBg },
                bg: "purple.500",
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
              href="#projects"
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { headBg },
                bg: "purple.500",
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
                color: { headBg },
                bg: "purple.500",
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
              href="#services">Services</Link>
            <Link
              px={"2rem", ".6rem", "1rem", "2rem"}
              py=".8rem"
              _hover={{
                textDecor: "none",
                bg: { hoverBg },
                color: { headBg },
                bg: "purple.500",
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
              href="#skills">
              Skills</Link>
          </Box>
          <Box
            mr={["1.4rem", "1.4rem", "1.4rem", ".1rem"]}
          >
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
              ml={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}

            </IconButton>
          </Box>
          <Flex
            d={["flex", "flex", "flex", "none"]}
            justifyContent={"flex-end"}
            mr={["1.5rem"]}
          >
            <HamburgerIcon
              fontSize={"1.5rem"}
              onClick={() => changeDisplay("flex")}
            />
          </Flex>


          <Flex flexDir={"column"}
            w={"100vw"}
            h={"100vh"}
            bg={hamburgerNav}
            top={0}
            left={0}
            pos={"fixed"}
            zIndex={20}
            display={display}
          >

            <Flex
              justifyContent={"flex-end"}
              mt={"2.4rem"}
              mr={"1.5rem"}>
              <SmallCloseIcon
                onClick={() => changeDisplay("none")}
                fontSize={"1.5rem"} />
            </Flex>


            <Box
              d={"flex"}
              flexDir={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              touchAction="none"
              w={"100vw"}
              h={"100vh"}
            >

              <Link
                href="#about"
                px={"2rem", ".6rem", "1rem", "2rem"}
                py=".8rem"
                _hover={{
                  textDecor: "none",
                  bg: { hoverBg },
                  color: { headBg },
                  bg: "purple.500",
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
                onClick={() => changeDisplay("none")}
              >About me</Link>
              <Link
                href="#projects"
                px={"2rem", ".6rem", "1rem", "2rem"}
                py=".8rem"
                _hover={{
                  textDecor: "none",
                  bg: { hoverBg },
                  color: { headBg },
                  bg: "purple.500",
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
                onClick={() => changeDisplay("none")}
              >Projects</Link>
              <Link
                px={"2rem", ".6rem", "1rem", "2rem"}
                py=".8rem"
                _hover={{
                  textDecor: "none",
                  bg: { hoverBg },
                  color: { headBg },
                  bg: "purple.500",
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
                href="#services"
                onClick={() => changeDisplay("none")}
              >Services</Link>
              <Link
                px={"2rem", ".6rem", "1rem", "2rem"}
                py=".8rem"
                _hover={{
                  textDecor: "none",
                  bg: { hoverBg },
                  color: { headBg },
                  bg: "purple.500",
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
                href="#skills"
                onClick={() => changeDisplay("none")}
              >
                Skills</Link>

            </Box>
          </Flex>

        </Box>

      </Flex>


    </>
  )
}
