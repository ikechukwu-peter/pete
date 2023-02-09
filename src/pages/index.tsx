import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Heading, chakra } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useAnimation } from "@codechem/chakra-ui-animations";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";

export default function Home() {
  const animation = useAnimation("flash", {
    duration: 2000,
    iterationCount: "infinite",
  });

  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "width", "height", "alt", "priority"].includes(prop),
  });

  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter | Home</title>
        <meta name="description" content="Ikechukwu Peter | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        zIndex={10}
        w="100%"
        bg="brand.700"
        h="100vh"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
        pos="relative"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          maxW="container.xl"
          w="100%"
        >
          <Box w="100%">
            <Heading
              as="h5"
              color="brand.300"
              fontWeight={600}
              fontSize={{ base: "1rem" }}
              animation={animation}
            >
              Hello there!
            </Heading>
            <Box
              fontWeight={600}
              fontSize={["1rem", "1rem", "1.2rem", "1.3rem"]}
              color="brand.300"
              textAlign={{ base: "left", md: "left" }}
              my="1rem"
            >
              <Typewriter
                options={{
                  strings: [
                    "I am Ikechukwu Peter",
                    "I am a Software Engineer",
                    "I am a Fullstack Developer",
                    "I am a NodeJs Engineer",
                    "I am a ReactJs Engineer",
                    "I am a  Content Creator",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>

            <Box
              fontWeight={700}
              fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
              color="brand.300"
              textAlign={{ base: "left", md: "left" }}
              my="2rem"
              w="100%"
              sx={{
                background:
                  "radial-gradient(68.73% 68.73% at 50% 50%, #ffffff  0%, rgb(8 145 178) 42.71%, #FFFFFF 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
              }}
            >
              <Heading>I craft</Heading>
              <Heading>fascinating web </Heading>
              <Heading> and mobile applications.</Heading>
            </Box>

            <NextLink href="/about">
              <Button
                color="brand.300"
                bg={"transparent"}
                borderWidth="2px"
                borderColor={"brand.400"}
                boxShadow={" 1px 1px 1px  rgb(8,145,178)"}
                textDecor="none"
                _hover={{
                  bg: "brand.400",
                }}
                _focus={{
                  bg: "brand.400",
                  border: "none",
                }}
                _active={{
                  bg: "brand.400",
                  border: "none",
                }}
                mb={["2rem", "2rem", "3rem", "4rem"]}
                transition="background 1s ease"
              >
                About Me
              </Button>
            </NextLink>

            <Flex gap="1rem" my="1.2rem">
              {socialLinks.map(({ url, Icon, name }) => (
                <SocialButton key={url} href={url} label={name}>
                  <Icon />
                </SocialButton>
              ))}
            </Flex>
          </Box>
          <Flex w="100%" display={{ base: "none", md: "flex" }} justify="end">
            <ChakraImage
              as={Image}
              src={"/pete.png"}
              alt="Ikechukwu's Picture"
              width={400}
              height={400}
              priority
              rounded="md"
            />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
