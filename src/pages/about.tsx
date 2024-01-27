import Head from "next/head";
import NextLink from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { IconType } from "react-icons";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
import { SiteHeadContents } from "@/utils";
import { SiteButton } from "@/components/site-button";

export default function About() {
  return (
    <Layout>
      <SiteHeadContents title={"Ikechukwu Peter | About"} />
      <Box
        maxW="container.xl"
        minH="100vh"
        mb="2rem"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Box
            fontWeight={700}
            fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
            color="brand.300"
            textAlign={{ base: "left" }}
            mt="2rem"
            w="100%"
          >
            <Heading fontSize="2.5rem">{"Hi, I am Ikechukwu Peter."}</Heading>
            <Heading fontSize="2.5rem">
              {
                "A passionate software/product engineer building impactful solutions."
              }{" "}
            </Heading>
          </Box>
          <Text
            fontSize={["1rem", "1.1rem", "1.2rem", "1.3rem"]}
            fontWeight="600"
            my="1rem"
            color="brand.300"
          >
            {
              "I'm a proactive problem-solver, passionate about taking on challenges and seizing opportunities. Beyond coding, I enjoy indoor games, music, and comedy."
            }
          </Text>{" "}
          <Link
            href="/IkechukwuPeter.pdf"
            download="IkechukwuPeterResume"
            isExternal
            _hover={{
              textDecor: "none",
            }}
          >
            <SiteButton
              title="Download Resume"
              ButtonIcon={AiOutlineDownload}
            />
          </Link>
          <Box color="brand.300">
            <Heading fontWeight={600} fontSize="1rem">
              Interested in working together?
            </Heading>
            <Heading fontWeight={600} fontSize="1rem" my="1rem">
              Feel free to contact me for any project or collaboration.
            </Heading>
          </Box>
          <NextLink href="/contact">
            <SiteButton title="Reach Out" />
          </NextLink>
          <Flex gap="1rem">
            {socialLinks.map(({ url, Icon, name }) => (
              <SocialButton key={url} href={url} label={name}>
                <Icon />
              </SocialButton>
            ))}
          </Flex>
        </Box>
        <Box w="100%" textAlign="left">
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
        </Box>
      </Box>
    </Layout>
  );
}
