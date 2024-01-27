// import Head from "next/head";
// import Image from "next/image";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Heading, chakra, Text } from "@chakra-ui/react";
// import Typewriter from "typewriter-effect";
import { useAnimation } from "@codechem/chakra-ui-animations";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";
import { HeroImage } from "@/components/hero-image";
import { Images, SiteHeadContents } from "@/utils";
import { SiteButton } from "@/components/site-button";

export default function Home() {
  const animation = useAnimation("flash", {
    duration: 2000,
    iterationCount: "infinite",
  });

  // const ChakraImage = chakra(Image, {
  //   shouldForwardProp: (prop) =>
  //     ["src", "width", "height", "alt", "priority"].includes(prop),
  // });

  return (
    <Layout>
      <SiteHeadContents />
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        maxW="container.xl"
        w="100%"
      >
        <Box w="100%" mt="5%">
          <Box>
            <Heading
              fontWeight={"900"}
              fontSize={{
                base: "1.8rem",
                md: "2rem",
                lg: "2.3rem",
                xl: "2.5rem",
              }}
              mb="1rem"
              _hover={{
                color: "brand.800",
              }}
              color="brand.300"
            >
              <Text as="span" animation={animation}>
                Hi,{" "}
              </Text>
              {" I'm Ikechukwu Peter"}
            </Heading>
            <Heading
              fontWeight={"800"}
              fontSize={{
                base: "1.2rem",
                md: "1.6rem",
                lg: "1.8rem",
                xl: "2rem",
              }}
              color={"brand.400"}
              _hover={{
                color: "brand.300",
              }}
            >
              {"Software/Product Engineer"}
            </Heading>
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
              transition: "text-shadow 0.3s ease-out", // Add transition for the text-shadow property
              _hover: {
                textShadow: "0 0 1px rgba(255, 255, 255, 0.8)", // Set the text-shadow on hover
              },
            }}
          >
            <Heading fontSize={["1rem", "1.1rem", "1.2rem", "1.3rem"]}>
              I will take your software/product journey to new heights, guiding
              it through the development cycle. With a passion for impactful
              solutions, I specialize in crafting products that deliver
              measurable results and user satisfaction.
            </Heading>
          </Box>

          <Box>
            <Text
              fontWeight={["600"]}
              fontSize={[".6rem", ".7rem", ".8rem", "1rem"]}
              color="brand.300"
            >
              {
                "Let's turn your vision into reality and build software/product that not only works but also leaves a lasting impression."
              }
            </Text>

            <Flex gap="1rem" my="1.2rem">
              <NextLink href="/contact">
                <SiteButton title={"Talk to Me"} />
              </NextLink>
            </Flex>
          </Box>

          <Flex gap="1rem" my="1.2rem">
            {socialLinks.map(({ url, Icon, name }) => (
              <SocialButton key={url} href={url} label={name}>
                <Icon />
              </SocialButton>
            ))}
          </Flex>
        </Box>
        <Flex w="100%" display={{ base: "none", md: "flex" }} justify="end">
          <Box w="100%"></Box>
          <Box w="100%">
            <HeroImage
              url={Images.heroImage.url}
              alt={Images.heroImage.alt}
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
