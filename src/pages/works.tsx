import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";
import { Card } from "@/components/card";
import { projects } from "@/data/projects";
import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";

export default function Works() {
  return (
    <Layout>
      <SiteHeadContents title="Ikechukwu Peter | Works" />
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        maxW="container.xl"
      >
        <Box w="100%" mb="2rem">
          <Box p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}>
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
    </Layout>
  );
}
