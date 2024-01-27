import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";

function NotFound() {
  return (
    <Layout>
      <SiteHeadContents title="Ikechukwu Peter Portfolio || Not Found" />

      <Flex
        direction={"column"}
        align="center"
        justify={"center"}
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
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, brand.300, brand.400)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2} color="brand.300">
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          {"The page you're looking for does not seem to exist"}
        </Text>

        <NextLink href="/" passHref>
          <Button
            as={Link}
            _hover={{
              textDecoration: "none",
              bg: "brand.400",
            }}
            bg={"brand.600"}
            color="brand.300"
            variant="solid"
          >
            Go to Home
          </Button>
        </NextLink>
      </Flex>
    </Layout>
  );
}

export default NotFound;
