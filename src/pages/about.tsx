import Head from "next/head";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter | About</title>
        <meta name="description" content="Ikechukwu Peter | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        zIndex={10}
        w="100%"
        bg="brand.700"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
        pos="relative"
        minH="100vh"
        border="1px solid transparent"
      >
        <Box maxW="container.xl" minH="100vh" mb="2rem">
          <Box
            fontWeight={700}
            fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
            color="brand.300"
            textAlign={{ base: "left", md: "left" }}
            my="2rem"
            w="100%"
          >
            <Heading fontSize="2.5rem">{"Hi, I am Ikechukwu Peter."}</Heading>
            <Heading fontSize="2.5rem">
              {"A software engineer with a passion for technology."}{" "}
            </Heading>
          </Box>
          <Heading
            as="p"
            fontSize={{ base: "1rem" }}
            fontWeight="500"
            w={{ base: "100%", md: "60%", lg: "50%" }}
            my="1.3rem"
            color="brand.300"
          >
            {
              "I love problem-solving, rap and EDM. When not working or futzing around with code I play chess, watch movies or play video games. I also speak sarcasm."
            }
          </Heading>{" "}
          *
          <Box my="1.3rem" color="brand.300">
            <Heading>Languages I speak.</Heading>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Frontend</Heading>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Backend</Heading>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Database</Heading>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Others</Heading>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading fontWeight={600} fontSize="1rem">
              Interested in working together?
            </Heading>
            <Heading fontWeight={600} fontSize="1rem" my="1rem">
              Feel free to contact me for any project or collaboration.
            </Heading>
          </Box>
          <NextLink href="/contact">
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
              Reach Out
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
      </Box>
    </Layout>
  );
}
