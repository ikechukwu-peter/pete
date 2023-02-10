import Head from "next/head";
import NextLink from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { IconType } from "react-icons";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import Layout from "@/layout/layout";
import { SocialButton } from "@/components/social-button";
import {
  socialLinks,
  languages,
  frontend,
  backend,
  databases,
  others,
} from "@/data/links";

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
              "I love problem-solving,  I am a self-motivated and self-driven individual who is always looking for new challenges and opportunities. When not engaged with programming activities, I play indoor games, listen to music and watch comedies."
            }
          </Heading>{" "}
          <Link
            href="/IkechukwuPeter.pdf"
            download="IkechukwuPeterResume"
            isExternal
            _hover={{
              textDecor: "none",
            }}
          >
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
              rightIcon={<AiOutlineDownload />}
            >
              Download Resume
            </Button>
          </Link>
          <Box my="1.3rem" color="brand.300">
            <Heading>Languages I speak.</Heading>
            <Flex gap="1rem" wrap={"wrap"} my="1rem">
              {languages.map(
                ({
                  label,
                  href,
                  Icon,
                }: {
                  label: string;
                  href: string;
                  Icon: IconType;
                }) => (
                  <SocialButton
                    key={label + href}
                    label={label}
                    href={href}
                    isTool
                  >
                    <Icon />
                  </SocialButton>
                )
              )}
            </Flex>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Frontend</Heading>
            <Flex gap="1rem" wrap={"wrap"} my="1rem">
              {frontend.map(
                ({
                  label,
                  href,
                  Icon,
                }: {
                  label: string;
                  href: string;
                  Icon: IconType;
                }) => (
                  <SocialButton
                    key={label + href}
                    label={label}
                    href={href}
                    isTool
                  >
                    <Icon />
                  </SocialButton>
                )
              )}
            </Flex>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Backend</Heading>
            <Flex gap="1rem" wrap={"wrap"} my="1rem">
              {backend.map(
                ({
                  label,
                  href,
                  Icon,
                }: {
                  label: string;
                  href: string;
                  Icon: IconType;
                }) => (
                  <SocialButton
                    key={label + href}
                    label={label}
                    href={href}
                    isTool
                  >
                    <Icon />
                  </SocialButton>
                )
              )}
            </Flex>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Databases</Heading>
            <Flex gap="1rem" wrap={"wrap"} my="1rem">
              {databases.map(
                ({
                  label,
                  href,
                  Icon,
                }: {
                  label: string;
                  href: string;
                  Icon: IconType;
                }) => (
                  <SocialButton
                    key={label + href}
                    label={label}
                    href={href}
                    isTool
                  >
                    <Icon />
                  </SocialButton>
                )
              )}
            </Flex>
          </Box>
          <Box my="1.3rem" color="brand.300">
            <Heading>Others</Heading>
            <Flex gap="1rem" wrap={"wrap"} my="1rem">
              {others.map(
                ({
                  label,
                  href,
                  Icon,
                }: {
                  label: string;
                  href: string;
                  Icon: IconType;
                }) => (
                  <SocialButton
                    key={label + href}
                    label={label}
                    href={href}
                    isTool
                  >
                    <Icon />
                  </SocialButton>
                )
              )}
            </Flex>
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
