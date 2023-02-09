import Head from "next/head";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";

export default function Contact() {
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
        h="100vh"
        py={4}
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          maxW="container.xl"
        >
          <Box w="100%">
            <Box my="1.3rem" color="brand.300" w={{ base: "100%", md: "50%" }}>
              <Heading fontWeight={600} fontSize="2rem">
                Interested in working together?
              </Heading>
              <Heading fontWeight={600} fontSize="2rem" my="1rem">
                Feel free to contact me for any project or collaboration.
              </Heading>
            </Box>

            <Link
              href="mailto:ikechukwupeter1999@gmail.com"
              color="brand.300"
              fontWeight={700}
              _hover={{
                color: "brand.400",
              }}
            >
              ikechukwupeter1999@gmail.com
            </Link>

            <Flex gap="1rem" my="1.2rem">
              {socialLinks.map(({ url, Icon, name }) => (
                <SocialButton key={url} href={url} label={name}>
                  <Icon />
                </SocialButton>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
