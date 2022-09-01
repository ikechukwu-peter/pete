import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Image as ChakraImage,
  Input,
  Textarea,
  Spinner,
  useColorModeValue,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import cogoToast from "cogo-toast";
import FormField from "../common/FormField";
import useMail from "../../hooks/useMail";
import Image from "next/image";
import send_email from "/public/send_email.svg";

export default function Contact() {
  const { loading, sendMail } = useMail();
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((name, email, subject, message)) {
      await sendMail({ name, email, subject, message });
      setEmail("");
      setSubject("");
      setName("");
      setMessage("");
    } else {
      const { hide } = cogoToast.warn("Fill all the fields.😒", {
        onClick: () => {
          hide();
        },
        hideAfter: 5,
      });
    }
  };

  return (
    <Box w="100%">
      <Center mb="1rem">
        <Heading color={useColorModeValue("theme.500", "theme.100")}>
          {"I'd love to hear from you!"}
        </Heading>
      </Center>
      <Flex
        align="center"
        justify="space-between"
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row-reverse",
        ]}
        gap={{ base: "1rem", md: "1rem" }}
        color={useColorModeValue("theme.500", "theme.100")}
        w="100%"
      >
        <Box d="flex" flexDir="column" w="100%" mb="1rem">
          <Heading
            fontWeight={600}
            fontSize={{ base: "1.4rem", md: "2rem", lg: "3rem" }}
            mb="1rem"
          >
            Write me
          </Heading>
          <Box as="form" onSubmit={(e) => handleSubmit(e)} w="100%">
            <Box py=".6rem">
              <FormField isRequired label="Name">
                <Input
                  fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  _focus={{
                    borderColor: "theme.300",
                    borderWidth: ".15rem",
                  }}
                  _placeholder={{
                    color: colorMode === "light" ? "theme.500" : "theme.100",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  bg={colorMode === "light" ? "theme.100" : "theme.500"}
                />
              </FormField>
            </Box>

            <Box py=".6rem">
              <FormField
                isRequired
                label="Email Address"
                helper={"We'll never share your email."}
              >
                <Input
                  fontSize={["1.1rem", "1.1rem", "1.3rem", "1.3rem"]}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  _focus={{
                    borderColor: "theme.300",
                    borderWidth: ".15rem",
                  }}
                  _placeholder={{
                    color: colorMode === "light" ? "theme.500" : "theme.100",
                  }}
                  bg={colorMode === "light" ? "theme.100" : "theme.500"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
            </Box>

            <Box py=".6rem">
              <FormField isRequired label="Subject">
                <Input
                  bg={colorMode === "light" ? "theme.100" : "theme.500"}
                  fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  _focus={{
                    borderColor: "theme.300",
                    borderWidth: ".15rem",
                  }}
                  _placeholder={{
                    color: colorMode === "light" ? "theme.500" : "theme.100",
                  }}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FormField>
            </Box>

            <Box py=".6rem">
              <FormField isRequired label="Message">
                <Textarea
                  bg={colorMode === "light" ? "theme.100" : "theme.500"}
                  fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                  mt="1rem"
                  focusBorderColor="theme.300"
                  placeholder="Enter your message"
                  _placeholder={{
                    color: colorMode === "light" ? "theme.500" : "theme.100",
                  }}
                  size="md"
                  resize={"vertical"}
                  isRequired
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormField>
            </Box>

            <Button
              size="lg"
              w="100%"
              mt="2rem"
              color={useColorModeValue("theme.500", "theme.100")}
              bg={"theme.300"}
              _hover={{
                bg: "theme.300",
              }}
              rightIcon={<FiSend />}
              type="submit"
              _focus={{
                borderColor: "theme.300",
              }}
              _active={{
                borderColor: "theme.300",
              }}
            >
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color={colorMode === "light" ? "theme.500" : "theme.100"}
                  size="md"
                />
              ) : (
                "Send"
              )}
            </Button>
          </Box>
        </Box>
        <Box d={"block"} w="100%">
          <Image
            src={send_email}
            layout="responsive"
            alt="Contact us page"
            width={"100%"}
            height="100%"
            as={ChakraImage}
          />
        </Box>
      </Flex>
    </Box>
  );
}
