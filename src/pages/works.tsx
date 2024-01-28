import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Card } from "@/components/card";
import { projects } from "@/data/projects";
import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";
import { SocialButtons } from "@/components/social-buttons";
import { CustomBox } from "@/components/animation/custom-elements";

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
              {projects.map((project, index) => (
                <CustomBox
                  key={project.url + project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9, y: 5 }}
                >
                  <Card {...project} />
                </CustomBox>
              ))}
            </SimpleGrid>
          </Box>

          <SocialButtons />
        </Box>
      </Flex>
    </Layout>
  );
}
