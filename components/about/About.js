import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  Image as ChakraImage,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import Image from "next/image";
import profile from "/public/profile.svg";

export default function AboutMe() {
  return (
    <Box w="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "row-reverse",
          "row-reverse",
        ]}
        gap={{ base: "2rem", md: "4rem" }}
        w="100%"
      >
        <Box d="flex" justifyContent="flex-end" flexDir="column" w="100%">
          <Heading
            fontWeight={600}
            color={useColorModeValue("theme.500", "theme.100")}
            mb="1rem"
            fontSize={["1rem", "1rem", "1.5rem", "2rem"]}
          >
            Ikechukwu Peter
          </Heading>
          <Text
            fontWeight={600}
            fontSize={[".8rem", ".8rem", "1rem", "1rem"]}
            color={useColorModeValue("theme.600", "theme.400")}
            mb=".6rem"
          >
            Full Stack Developer, technical writer, and a passionate learner.
          </Text>
          <Text
            fontWeight={600}
            fontSize={[".8rem", ".8rem", "1rem", "1rem"]}
            color={useColorModeValue("theme.500", "theme.100")}
            mb=".6rem"
          >
            Email Me
          </Text>
          <Link
            href="mailto: ikechukwupeter1999@gmail.com"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              color={useColorModeValue("theme.500", "theme.100")}
              rounded="xl"
              bg="theme.400"
              _hover={{
                textDecor: "none",
                bg: "theme.400",
              }}
            >
              Send Mail
            </Button>
          </Link>
          <Flex
            mt={{ base: "2rem", md: "4rem" }}
            w="100%"
            gap="1rem"
            align={"center"}
            flexWrap="wrap"
          >
            <NextLink href="works" passHref>
              <Link
                _hover={{
                  textDecor: "none",
                }}
              >
                <Button
                  color={useColorModeValue("theme.500", "theme.100")}
                  rounded="xl"
                  bg="theme.400"
                  _hover={{
                    textDecor: "none",
                    bg: "theme.400",
                  }}
                >
                  Works
                </Button>
              </Link>
            </NextLink>
            <NextLink href="blog" passHref>
              <Link
                _hover={{
                  textDecor: "none",
                }}
              >
                <Button
                  color={useColorModeValue("theme.100", "theme.100")}
                  rounded="xl"
                  bg="theme.600"
                  _hover={{
                    textDecor: "none",
                    bg: "theme.600",
                  }}
                >
                  Blogs
                </Button>
              </Link>
            </NextLink>
            <NextLink href="contact" passHref>
              <Link
                _hover={{
                  textDecor: "none",
                }}
              >
                <Button
                  color={useColorModeValue("theme.500", "theme.100")}
                  rounded="xl"
                  bg="theme.300"
                  _hover={{
                    textDecor: "none",
                    bg: "theme.300",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </NextLink>
          </Flex>
          <Flex
            mt="2rem"
            gap="1rem"
            align={"center"}
            color={useColorModeValue("theme.500", "theme.100")}
            fontWeight={700}
            textAlign={{ base: "center", md: "left" }}
            fontSize={"1.3rem"}
            w="100%"
            direction={{ base: "column", md: "row" }}
          >
            <Text textAlign={{ base: "center", md: "left" }}>Follow me on</Text>
            <Flex
              align={"center"}
              color={useColorModeValue("theme.500", "theme.100")}
              gap="1rem"
            >
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
          </Flex>
        </Box>
        <Box d={"block"} w="100%" mb="1rem">
          <Image
            layout="responsive"
            placeholder="empty"
            src={profile}
            alt="A picture of Peter"
            width={"100%"}
            height={"100%"}
            as={ChakraImage}
          />
        </Box>
      </Flex>
      <Divider />

      <Box mt="2rem" w="100%">
        <Text
          py="1rem"
          color={useColorModeValue("theme.500", "theme.400")}
          fontSize={{ base: "1rem", md: "1.4rem" }}
          w="100%"
        >
          Hi there! Thanks for visiting my portfolio.
        </Text>
        <Text
          lineHeight={"2rem"}
          fontSize={{ base: "1rem", md: "1.4rem" }}
          color={useColorModeValue("theme.500", "theme.400")}
        >
          {"I'm"}{" "}
          <Link
            _hover={{
              textDecor: "none",
              opacity: 0.8,
            }}
            href="https://www.linkedin.com/in/peter-ikechukwu/"
            isExternal={true}
            color="theme.300"
          >
            Ikechukwu Peter
          </Link>
          , a Full Stack Developer, Technical Writer, and a passionate learner.
          {/* I am pursuing B.Science in Computer Science at{" "}
          <Link
            _hover={{
              textDecor: "none",
              opacity: 0.8,
            }}
            href="https://nou.edu.ng"
            isExternal={true}
            color="theme.300"
          >
            National Open University of Nigeria
          </Link>
          , Abuja, Nigeria. I have worked on a wide range of technologies and */}
          I have worked on a wide range of technologies and have worked on
          projects ranging from small to large scale. I am a self-motivated and
          self-driven individual who is always looking for new challenges and
          opportunities. I love participating in hackathons and engaging in
          communities.
        </Text>
      </Box>
    </Box>
  );
}
