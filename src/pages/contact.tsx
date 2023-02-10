import Head from "next/head";
import NextLink from "next/link";
import Layout from "@/layout/layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { useForm, Resolver } from "react-hook-form";
import { SocialButton } from "@/components/social-button";
import { socialLinks } from "@/data/links";
import { FormField } from "@/components/form-field";
import { ISENDMAIL } from "@/types/mail";
import { validateEmail } from "@/utils";

const resolver: Resolver<ISENDMAIL> = async (values) => {
  return {
    values: !!values ? values : {},
    errors:
      !values.email.trim() || !validateEmail(values.email)
        ? {
            email: {
              type: "required",
              message: "Valid email address is required.",
            },
          }
        : {} && !values.name.trim()
        ? {
            name: {
              type: "required",
              message: "name is required.",
            },
          }
        : {} && !values.message.trim()
        ? {
            message: {
              type: "required",
              message: "message is required",
            },
          }
        : {} && !values.subject.trim()
        ? {
            subject: {
              type: "required",
              message: "subject is required",
            },
          }
        : {},
  };
};

export default function Contact() {
  const loading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISENDMAIL>({ resolver });

  const onSubmit = handleSubmit(async (data) => console.log(data));
  return (
    <Layout>
      <Head>
        <title>Ikechukwu Peter | About</title>
        <meta name="description" content="Ikechukwu Peter | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        zIndex={10}
        w="100%"
        bg="brand.700"
        h="100vh"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        pt="2rem"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "column" }}
          maxW="container.xl"
        >
          <Flex
            as="form"
            onSubmit={onSubmit}
            gap=".6rem"
            direction="column"
            w={{ base: "100%", md: "50%" }}
          >
            <Heading
              fontWeight={600}
              fontSize="1.2rem"
              color="brand.300"
              my=".3rem"
            >
              {"Let's talk."}
            </Heading>
            <FormField error={errors.name?.message}>
              <Input
                bg="brand.500"
                borderColor="brand.800"
                borderWidth="2px"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                focusBorderColor="brand.300"
                _placeholder={{
                  color: "brand.300",
                  fontSize: ".8rem",
                }}
                color="brand.300"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
            </FormField>
            <FormField error={errors.email?.message}>
              <Input
                borderColor="brand.800"
                borderWidth="2px"
                bg="brand.500"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                focusBorderColor="brand.300"
                _placeholder={{
                  color: "brand.300",
                  fontSize: ".8rem",
                }}
                color="brand.300"
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
              />
            </FormField>
            <FormField error={errors.subject?.message}>
              <Input
                borderColor="brand.800"
                borderWidth="2px"
                bg="brand.500"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                focusBorderColor="brand.300"
                _placeholder={{
                  color: "brand.300",
                  fontSize: ".8rem",
                }}
                color="brand.300"
                type="text"
                placeholder="Enter your mail subject"
                {...register("subject")}
              />
            </FormField>
            <FormField error={errors.message?.message}>
              <Textarea
                borderColor="brand.800"
                borderWidth="2px"
                placeholder="Enter your mail subject"
                {...register("message")}
                resize="vertical"
                bg="brand.500"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                focusBorderColor="brand.300"
                _placeholder={{
                  color: "brand.300",
                  fontSize: ".8rem",
                }}
                size="md"
                color="brand.300"
              />
            </FormField>
            <Button
              size="lg"
              w="100%"
              mt="1rem"
              color="brand.300"
              bg={"brand.600"}
              _hover={{
                bg: "brand.400",
              }}
              rightIcon={<FiSend />}
              type="submit"
              _focus={{
                borderColor: "brand.300",
              }}
              _active={{
                borderColor: "brand.300",
              }}
            >
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color={"brand.300"}
                  size="md"
                />
              ) : (
                "Send"
              )}
            </Button>
          </Flex>
          <Box w="100%">
            <Box my="1.3rem" color="brand.300" w={{ base: "100%", md: "50%" }}>
              <Heading fontWeight={600} fontSize="2rem">
                Interested in working together?
              </Heading>
              <Heading fontWeight={600} fontSize="2rem" my="1rem">
                Feel free to contact me for any project or collaboration.
              </Heading>
            </Box>

            <Link
              href="mailto:ikechukwupeter1999@gmail.com"
              color="brand.300"
              fontWeight={700}
              _hover={{
                color: "brand.400",
              }}
            >
              ikechukwupeter1999@gmail.com
            </Link>

            <Flex gap="1rem" my="1.2rem">
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
