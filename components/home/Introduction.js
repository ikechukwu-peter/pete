import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Image as ChakraImage,
  Button,
  useColorModeValue,
  DarkMode,
  Icon,
} from "@chakra-ui/react";
import {
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
import Image from "next/image";
import NextLink from "next/link";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import CountUp from "react-countup";
import developer from "/public/developer.svg";
import webdev from "/public/webdev.svg";

export default function Introduction() {
  return (
    <>
      <Flex
        bg={useColorModeValue("theme.100", "theme.500")}
        py={{ base: "1rem", md: "2rem" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-between" }}
        w="100%"
      >
        <Box>
          <Text
            fontWeight={800}
            bg={useColorModeValue("theme.100", "theme.500")}
            mb=".2rem"
            fontSize={[".8rem", "1rem"]}
            textAlign={{ base: "center", md: "left" }}
          >
            Hello!
          </Text>
          <Heading
            fontWeight={600}
            bg={useColorModeValue("theme.100", "theme.500")}
            mb=".1rem"
            fontSize={["2.1rem", "2.5rem"]}
            textAlign={{ base: "center", md: "left" }}
          >
            {"I'm "}
            <Heading display={"inline"} color="theme.300" as="span">
              Peter
            </Heading>
          </Heading>

          <Box
            fontWeight={600}
            fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
            color="theme.400"
            textAlign={{ base: "center", md: "left" }}
          >
            <Typewriter
              options={{
                strings: ["Web developer", "Frontend + Backend"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <Box>
            <Text
              fontWeight={600}
              color={useColorModeValue("theme.500", "theme.700")}
              fontSize={["1rem", "1rem", "1rem", "1.2rem"]}
              py="1rem"
              textAlign={{ base: "center", md: "left" }}
            >
              I have a passion for technology.
            </Text>
            <Text
              fontWeight={600}
              fontSize={["1rem", "1rem", "1rem", "1.3rem"]}
              color={useColorModeValue("theme.500", "theme.700")}
              textAlign={{ base: "center", md: "left" }}
            >
              <NextLink href="/about" passHref>
                <Link
                  color="theme.300"
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  Know More <Icon as={AiOutlineLink} pt=".4rem" />
                </Link>
              </NextLink>
              about me
            </Text>

            <Flex
              gap="1rem"
              align={"center"}
              color="theme.100"
              fontWeight={700}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text textAlign={{ base: "center", md: "left" }}>
                Follow me on
              </Text>
              <Link
                href="https://linkedin.com/in/peter-ikechukwu"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <ImLinkedin2 />
              </Link>
              <Link
                href="https://github.com/ikechukwu-peter"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://instagram.com/pete_iyke"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
                _focus={{
                  border: "none",
                }}
              >
                <SiInstagram />
              </Link>
            </Flex>
          </Box>

          <Flex gap="1rem" mt="1rem">
            <DarkMode>
              <Link
                href="mailto:ikechukwupeter1999@gmail.com"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
              >
                <Button
                  color="theme.100"
                  bg={"theme.300"}
                  textDecor="none"
                  _hover={{
                    bg: "purple.500",
                  }}
                  _focus={{
                    bg: "purple.800",
                    border: "none",
                  }}
                  _active={{
                    bg: "purple.800",
                    border: "none",
                  }}
                  boxShadow={" 2px 2px 1px 1px  #ff5403"}
                  boxSizing="border-box"
                  mb={["2rem", "2rem", "3rem", "4rem"]}
                  leftIcon={<AiOutlineMail />}
                >
                  Email Me
                </Button>
              </Link>
            </DarkMode>
            <DarkMode>
              <Link
                href="/Ikechukwu Peter's Resume.pdf"
                download="Ikechukwu_Peter_CV"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
              >
                <Button
                  color="theme.100"
                  bg={"theme.500"}
                  borderWidth="2px"
                  borderColor={"theme.300"}
                  boxShadow={" 1px 1px 1px  #ff5403"}
                  textDecor="none"
                  _hover={{
                    bg: "theme.300",
                  }}
                  _focus={{
                    bg: "theme.300",
                    border: "none",
                  }}
                  _active={{
                    bg: "theme.300",
                    border: "none",
                  }}
                  mb={["2rem", "2rem", "3rem", "4rem"]}
                  leftIcon={<AiOutlineDownload />}
                >
                  Resume
                </Button>
              </Link>
            </DarkMode>
          </Flex>
        </Box>
        <Box display={["none", "none", "block", "block"]} w="50%">
          <Image
            alt="A developer writing code"
            width="60%"
            layout="responsive"
            placeholder="blur"
            src={developer}
            height={"35%"}
            as={ChakraImage}
            blurDataURL="empty"
          />
        </Box>
      </Flex>

      <Flex
        bg="theme.600"
        align={{ base: "center", md: "center" }}
        justify={{ base: "center", md: "space-between" }}
        w="100%"
        p="1rem"
        borderRadius={"2rem"}
        direction={[
          "column-reverse",
          "column-reverse",
          "row-reverse",
          "row-reverse",
        ]}
        gap="2rem"
      >
        <Box
          d="flex"
          justifyContent="center"
          flexDir="column"
          w={{ base: "100%", md: "50%" }}
        >
          <Heading
            fontWeight={600}
            color={"theme.100"}
            mb=".3rem"
            fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]}
          >
            <CountUp end={50} />
            {"+"}
          </Heading>
          <Text
            fontWeight={600}
            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
            color={"theme.100"}
          >
            completed projects
          </Text>
          <Text
            fontWeight={600}
            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
            color={"theme.400"}
          >
            Glad to you help you!
          </Text>
          <Text
            fontWeight={600}
            fontSize={[".6rem", ".6rem", ".8rem", "1rem"]}
            color={"theme.700"}
          >
            {
              "As a web developer, technical writer and a passionate learner, I'm always on the lookout for new challenges and opportunities to further improve my knowledge and skills."
            }
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} d={"block"} py="2rem">
          <Image
            layout="responsive"
            src={webdev}
            width={"60%"}
            height={"35%"}
            alt="A man sitting and relaxing"
            as={ChakraImage}
            placeholder="empty"
          />
        </Box>
      </Flex>
    </>
  );
}
