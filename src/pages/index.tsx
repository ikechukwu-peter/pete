// import Head from "next/head";
// import Image from "next/image";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { baseLinks, socialLinks } from "@/data/links";
import { HeroImage } from "@/components/hero-image";
import { Images, SiteHeadContents } from "@/utils";
import { SiteButton } from "@/components/site-button";
import { SocialButtons } from "@/components/social-buttons";
import {
  CustomBox,
  CustomHeading,
  CustomText,
  letterVariants,
  slideInRightVariants,
  slideInLeftVariants,
  staggerVariants,
} from "@/components/animation/custom-elements";
import { Greeting } from "@/components/greeting";

export default function Home() {
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
          <CustomBox
            initial="hidden"
            animate="visible"
            variants={slideInLeftVariants}
          >
            <Greeting />
            <CustomBox
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              whileHover={{
                textShadow: "0px 0px 8px rgba(8, 145, 178, 0.8)",
              }}
            >
              {Array.from("Software/Product Engineer").map((letter, index) => (
                <CustomHeading
                  key={index}
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
                  display="inline-block"
                  mr="4px"
                  variants={letterVariants}
                >
                  {letter}
                </CustomHeading>
              ))}
            </CustomBox>
          </CustomBox>

          <CustomBox
            initial="hidden"
            // animate="visible"
            variants={slideInLeftVariants}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.2, ease: "easeInOut" },
            }}
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
          </CustomBox>

          <Box>
            <CustomText
              initial="hidden"
              variants={slideInLeftVariants}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1.6, ease: "easeInOut" },
              }}
              fontWeight={["600"]}
              fontSize={[".6rem", ".7rem", ".8rem", "1rem"]}
              color="brand.300"
              _hover={{
                color: "brand.400",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {
                "Let's turn your vision into reality and build software/product that not only works but also leaves a lasting impression."
              }
            </CustomText>

            <CustomBox
              initial="hidden"
              variants={slideInLeftVariants}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
            >
              <Flex gap="1rem" my="1.2rem">
                <NextLink href={baseLinks[2].to}>
                  <SiteButton title={"Talk to Me"} />
                </NextLink>
              </Flex>
            </CustomBox>
          </Box>

          <CustomBox
            initial="hidden"
            variants={slideInLeftVariants}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 2.4, ease: "easeInOut" },
            }}
          >
            <SocialButtons />
          </CustomBox>
        </Box>

        <Flex w="100%" display={{ base: "none", md: "flex" }} justify="end">
          <Box w="100%"></Box>
          <CustomBox
            initial="hidden"
            variants={slideInRightVariants}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 2.8, ease: "easeInOut" },
            }}
          >
            {" "}
            <HeroImage
              url={Images.heroImage.url}
              alt={Images.heroImage.alt}
              width="100%"
              height="100%"
            />
          </CustomBox>
        </Flex>
      </Flex>
    </Layout>
  );
}
