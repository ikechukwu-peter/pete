import {
  Box,
  Center,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsMegaphone, BsPhone } from "react-icons/bs";

const _reasons = [
  {
    img: "/communication.svg",
    title: "Communicative",
    text: "I balance talking and listening hence ensuring effective communication.",
  },
  {
    img: "/ethic.svg",
    title: "Work Ethics",
    text: "I don't wait for deadlines, deadlines wait for me.",
  },
  {
    img: "/collaboration.svg",
    title: "Collaborative",
    text: "Teamwork makes the dream work. Collaboration first, then work.",
  },

  {
    img: "/motivation.svg",
    title: "Self Motivated",
    text: "I put myself into action to achieve my goals.",
  },
];

export default function Services() {
  return (
    <Box my="2rem">
      <Center
        pt="4rem"
        fontSize={{ base: "1rem", md: "2rem", xl: "3rem" }}
        fontWeight={600}
      >
        Why Hire Me{" "}
        <Text as="span" color="theme.300">
          ?
        </Text>
      </Center>

      <SimpleGrid columns={[1, 1, 2, 4, 4]} spacing="40px" pt="2rem" pb="4rem">
        {_reasons.map(({ img, title, text }, index) => (
          <Box
            key={index}
            height="auto"
            transitionProperty="transform"
            transitionDuration="2s"
            transitionTimingFunction="ease"
            _hover={{
              transform: "scale(1.1)",
            }}
            w="100%"
            pb="2rem"
            rounded="xl"
          >
            <Box
              d="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box w="50%">
                <Image src={img} alt={title} lazy />
              </Box>

              <Heading fontSize="1.8rem" my="1rem" color="theme.400">
                {title}
              </Heading>
              <Text
                fontSize={["1rem", "1rem", "1rem", "1rem"]}
                color="theme.700"
              >
                {text}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Flex
        justify={"space-between"}
        align="center"
        p={{ base: "2rem", md: "6rem" }}
        borderRadius={"2rem"}
        bg="theme.600"
        direction={{ base: "column", md: "row" }}
        gap="1rem"
      >
        <Heading>Interested in working with me?</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing="24px">
          <Link
            href="mailto:ikechukwupeter1999@gmail.com"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              color="theme.100"
              bg={"theme.500"}
              borderWidth="2px"
              borderColor={"theme.300"}
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.1)",
                textDecor: "none",
                bg: "theme.300",
              }}
            >
              Email Me
            </Button>
          </Link>
          <Link
            href="works"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              transitionProperty="transform"
              transitionDuration="2s"
              transitionTimingFunction="ease"
              _hover={{
                transform: "scale(1.1)",
                textDecor: "none",
                bg: "theme.300",
              }}
              color="theme.100"
              bg={"theme.500"}
              borderWidth="2px"
              borderColor={"theme.300"}
            >
              See More Projects
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
