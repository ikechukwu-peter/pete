import NextLink from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Layout from "@/layout/layout";
import { SocialButton } from "@/components/social-button";
import {
  socialLinks,
  languages,
  frontend,
  backend,
  databases,
  others,
  baseLinks,
} from "@/data/links";
import { SiteHeadContents } from "@/utils";
import { SiteButton } from "@/components/site-button";
import { Tools } from "@/components/tools";

export default function About() {
  return (
    <Layout>
      <SiteHeadContents title={"Ikechukwu Peter | About"} />
      <Flex
        maxW="container.xl"
        direction={{ base: "column", md: "row" }}
        mb="2rem"
      >
        <Box w="100%">
          <Box
            fontWeight={700}
            color="brand.300"
            textAlign={{ base: "left" }}
            mt="2rem"
            w="100%"
          >
            <Heading
              fontWeight={"900"}
              fontSize={{
                base: "1.8rem",
                md: "2rem",
                lg: "2.3rem",
                xl: "2.5rem",
              }}
            >
              {"Hi, I am Ikechukwu Peter."}
            </Heading>
            <Heading
              fontSize={{
                base: "1.2rem",
                md: "1.6rem",
                lg: "1.8rem",
                xl: "2rem",
              }}
            >
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
          <Box display={{ base: "none", md: "block" }}>
            <Box color="brand.300">
              <Heading fontWeight={600} fontSize="1rem">
                Interested in working together?
              </Heading>
              <Heading fontWeight={600} fontSize="1rem" my="1rem">
                Feel free to contact me for any project or collaboration.
              </Heading>
            </Box>
            <NextLink href={baseLinks[2].to}>
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
        </Box>
        <Flex w="100%" display={{ base: "block", md: "flex" }} justify="end">
          <Box w="100%"></Box>
          <Box w="100%">
            <Tools title="Languages I speak." isTool items={languages} />
            <Tools title="Frontend Tools" isTool items={frontend} />
            <Tools title="Backend Tools" isTool items={backend} />
            <Tools title="Database Tools" isTool items={databases} />
            <Tools title="Other Tools" isTool items={others} />
          </Box>
        </Flex>
      </Flex>
      <Box pb="2rem" display={{ base: "block", md: "none" }}>
        <Box color="brand.300">
          <Heading fontWeight={600} fontSize="1rem">
            Interested in working together?
          </Heading>
          <Heading fontWeight={600} fontSize="1rem" my="1rem">
            Feel free to contact me for any project or collaboration.
          </Heading>
        </Box>
        <NextLink href={baseLinks[2].to}>
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
    </Layout>
  );
}
