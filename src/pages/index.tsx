import Head from "next/head";
import Image from "next/image";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { SocialButton } from "@/components/social-button";

const socialLinks = [
  {
    name: "youtube",
    url: "https://youtube.com/@ikechukwu1peter",
    Icon: BsYoutube,
  },
  {
    name: "twitter",
    url: "https://twitter.com/pete_iyke",
    Icon: BsTwitter,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/peter-ikechukwu/",
    Icon: BsLinkedin,
  },
  {
    name: "instagram",
    url: "https://instagram.com/pete_iyke",
    Icon: BsInstagram,
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter | Home</title>
        <meta name="description" content="Ikechukwu Peter | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        // align="start"
        w="100vw"
        h="100vh"
        py={4}
        bg="brand.700"
        overflowX="hidden"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
      >
        <Box w="100%">
          <Heading
            as="h5"
            color="brand.300"
            fontWeight={600}
            fontSize={{ base: "1rem" }}
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
                  "I am a NodeJS Engineer",
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
          >
            <Heading>
              I craft <br />
              fascinating <br /> web and <br />
              mobile applications.
            </Heading>
          </Box>

          <Button>About Me</Button>

          <Flex gap="1rem" my="1.2rem">
            {socialLinks.map(({ url, Icon, name }) => (
              <SocialButton key={url} href={url} label={name}>
                <Icon />
              </SocialButton>
            ))}
          </Flex>
        </Box>
        <Box w="100%" display={{ base: "none", md: "block" }}>
          <Image
            src={"/pete.png"}
            alt="Ikechukwu's Picture"
            width={400}
            height={400}
            priority
          />
        </Box>
      </Flex>
    </Layout>
  );
}
