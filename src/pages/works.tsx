import Head from "next/head";
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";
import { Card } from "@/components/card";
import { projects } from "@/data/projects";
import Layout from "@/layout/layout";

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter | Works</title>
        <meta name="description" content="Ikechukwu Peter | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pete.png" />
      </Head>
      <Box
        as="main"
        zIndex={10}
        w="100%"
        bg="brand.700"
        h="100vh"
        py={4}
        // px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          maxW="container.xl"
        >
          <Box w="100%" mb="2rem">
            <Box
              mt="3rem"
              p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
            >
              <SimpleGrid
                columns={[1, 1, 2, 3, 3]}
                spacing="40px"
                pt="2rem"
                pb="4rem"
              >
                {projects.map((project) => (
                  <Card key={project.url + project.title} {...project} />
                ))}
              </SimpleGrid>
            </Box>

            <Flex gap="1rem" my="1.2rem" ml="2rem">
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
