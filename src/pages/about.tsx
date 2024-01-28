import NextLink from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { Box, Flex, Link } from "@chakra-ui/react";
import Layout from "@/layout/layout";
import {
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
import { SocialButtons } from "@/components/social-buttons";
import {
  CustomBox,
  CustomHeading,
  CustomText,
  slideInFromTopVariant,
  slideInLeftVariants,
} from "@/components/animation/custom-elements";
import { Greeting } from "@/components/greeting";

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
            <CustomBox
              initial="hidden"
              animate="visible"
              variants={slideInFromTopVariant}
            >
              <Greeting />
            </CustomBox>

            <CustomHeading
              initial="hidden"
              variants={slideInFromTopVariant}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" },
              }}
              fontSize={{
                base: "1.2rem",
                md: "1.6rem",
                lg: "1.8rem",
                xl: "2rem",
              }}
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
              {
                "A passionate software/product engineer building impactful solutions."
              }{" "}
            </CustomHeading>
          </Box>
          <CustomText
            fontSize={["1rem", "1.1rem", "1.2rem", "1.3rem"]}
            fontWeight="600"
            my="1rem"
            color="brand.300"
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.4, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
            _hover={{
              color: "brand.400",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {
              "I'm a proactive problem-solver, passionate about taking on challenges and seizing opportunities. Beyond coding, I enjoy indoor games, music, and comedy."
            }
          </CustomText>{" "}
          <CustomBox
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.6, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
          >
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
          </CustomBox>
          <Box display={{ base: "none", md: "block" }}>
            <Box color="brand.300">
              <CustomHeading
                initial="hidden"
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1.8, ease: "easeInOut" },
                }}
                variants={slideInLeftVariants}
                fontWeight={600}
                fontSize="1rem"
                _hover={{
                  color: "brand.400",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Interested in working together?
              </CustomHeading>
              <CustomHeading
                initial="hidden"
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 2, ease: "easeInOut" },
                }}
                variants={slideInLeftVariants}
                fontWeight={600}
                fontSize="1rem"
                my="1rem"
                _hover={{
                  color: "brand.400",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Feel free to contact me for any project or collaboration.
              </CustomHeading>
            </Box>
            <CustomBox
              initial="hidden"
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 2.2, ease: "easeInOut" },
              }}
              variants={slideInLeftVariants}
            >
              <NextLink href={baseLinks[2].to}>
                <SiteButton title="Reach Out" />
              </NextLink>
            </CustomBox>

            <CustomBox
              // @ts-ignore no problem in operation, although type error appears.
              transition={{ duration: 2.5, delay: 1 }} // Add a delay here
            >
              <SocialButtons />
            </CustomBox>
          </Box>
        </Box>
        <Flex w="100%" display={{ base: "block", md: "flex" }} justify="end">
          <Box w="100%"></Box>
          <Box w="100%">
            <Tools
              title="Languages I speak."
              isTool
              items={languages}
              duration={2.7}
            />
            <Tools
              title="Frontend Tools"
              isTool
              items={frontend}
              duration={2.9}
            />
            <Tools
              title="Backend Tools"
              isTool
              items={backend}
              duration={3.1}
            />
            <Tools
              title="Database Tools"
              isTool
              items={databases}
              duration={3.4}
            />
            <Tools title="Other Tools" isTool items={others} duration={3.7} />
          </Box>
        </Flex>
      </Flex>
      <Box pb="2rem" display={{ base: "block", md: "none" }}>
        <Box color="brand.300">
          <CustomHeading
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.8, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
            fontWeight={600}
            fontSize="1rem"
          >
            Interested in working together?
          </CustomHeading>
          <CustomHeading
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
            fontWeight={600}
            fontSize="1rem"
            my="1rem"
          >
            Feel free to contact me for any project or collaboration.
          </CustomHeading>
        </Box>
        <CustomBox
          initial="hidden"
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 2.2, ease: "easeInOut" },
          }}
          variants={slideInLeftVariants}
        >
          <NextLink href={baseLinks[2].to}>
            <SiteButton title="Reach Out" />
          </NextLink>
        </CustomBox>

        <CustomBox
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 2.5, delay: 1 }} // Add a delay here
        >
          <SocialButtons />
        </CustomBox>
      </Box>
    </Layout>
  );
}
