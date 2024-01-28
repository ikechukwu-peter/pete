import NextLink from "next/link";
import Layout from "@/layout/layout";
import { Box, Button, Flex, Input, Spinner, Textarea } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { useForm, Resolver } from "react-hook-form";
import { FormField } from "@/components/form-field";
import { ISENDMAIL } from "@/types/mail";
import { SiteHeadContents, validateEmail } from "@/utils";
import { useMail } from "@/hooks";
import { SiteButton } from "@/components/site-button";
import { SocialButtons } from "@/components/social-buttons";
import {
  CustomBox,
  CustomHeading,
  slideInFromTopVariant,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/components/animation/custom-elements";

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
  const { loading, sendMail } = useMail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISENDMAIL>({ resolver });

  const onSubmit = handleSubmit(async (data: any) => await sendMail(data));

  return (
    <Layout>
      <SiteHeadContents title="Ikechukwu Peter | Contact" />
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        maxW="container.xl"
        w="100%"
        mt="4rem"
      >
        <Flex
          as="form"
          onSubmit={onSubmit}
          gap=".6rem"
          direction="column"
          w={{ base: "100%", md: "50%" }}
        >
          <CustomHeading
            initial="hidden"
            animate="visible"
            variants={slideInFromTopVariant}
            fontWeight={600}
            fontSize="1.2rem"
            color="brand.300"
            my=".3rem"
            _hover={{
              color: "brand.400",
            }}
          >
            {"Let's talk."}
          </CustomHeading>
          <CustomBox
            display="flex"
            flexDir="column"
            gap="1rem"
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.4, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
          >
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
          </CustomBox>
          <CustomBox
            initial="hidden"
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.8, ease: "easeInOut" },
            }}
            variants={slideInLeftVariants}
          >
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
          </CustomBox>
        </Flex>

        <Flex w="100%" display={{ base: "block", md: "flex" }} justify="end">
          <Box w="100%"></Box>
          <Box w="100%">
            <Box my="1.3rem" color="brand.300" w={{ base: "100%", md: "100%" }}>
              <CustomHeading
                fontWeight={600}
                fontSize={{
                  base: "1.8rem",
                  md: "2rem",
                  lg: "2.3rem",
                  xl: "2.5rem",
                }}
                _hover={{
                  color: "brand.400",
                }}
                initial="hidden"
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 2.2, ease: "easeInOut" },
                }}
                variants={slideInRightVariants}
              >
                Interested in working together?
              </CustomHeading>
              <CustomHeading
                fontWeight={600}
                fontSize={{
                  base: ".6rem",
                  md: ".8rem",
                  lg: "1rem",
                  xl: "1.2rem",
                }}
                my="1rem"
                _hover={{
                  color: "brand.400",
                }}
                initial="hidden"
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 2.6, ease: "easeInOut" },
                }}
                variants={slideInRightVariants}
              >
                Feel free to contact me for any project or collaboration.
              </CustomHeading>
            </Box>
            <CustomBox
              initial="hidden"
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 2.9, ease: "easeInOut" },
              }}
              variants={slideInRightVariants}
            >
              <NextLink href="mailto:ikechukwupeter1999@gmail.com">
                <SiteButton title="Mail Me!" />
              </NextLink>
            </CustomBox>

            <CustomBox
              initial="hidden"
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 3.1, ease: "easeInOut" },
              }}
              variants={slideInRightVariants}
            >
              <SocialButtons />
            </CustomBox>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
