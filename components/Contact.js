import {
    Flex,
    Box,
    HStack,
    Heading,
    Text,
    Link,
    Button,
    Image,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    DarkMode
} from '@chakra-ui/react'
import { BiCloudDownload } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { FiSend } from "react-icons/fi"


export default function About({
    darkTextColor,
    darkBg
}) {
    return (
        <Box
            bg={darkBg}
        >
            <Flex fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "90%"]}
                flexDirection={["column-reverse", "column-reverse", "row", "row"]}
                py="2rem"
                px="2rem"
                m="auto"
                color={darkTextColor}
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    textAlign="left"
                    ml="4rem"
                    m="auto"

                >
                    <Heading fontWeight={600}
                        color={darkTextColor}
                        mb="1rem"
                    >
                        Write me
                    </Heading>
                    <FormControl isRequired
                        w={["100%", "100%", "80%", "80%"]}
                    >
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input id='name' type='text' placeholder='Enter your name'
                            _focus={
                                {
                                    borderColor: "purple.700",
                                    borderWidth: ".15rem"
                                }
                            }
                            _placeholder={ {
                                // color: "whiteAlpha.800"                              
                            }}
                        />
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' placeholder='Enter your email'
                            _focus={
                                {
                                    borderColor: "purple.700",
                                    borderWidth: ".15rem"
                                }
                            }
                            _placeholder={ {
                                // color: "whiteAlpha.800"                              
                            }}
                        />
                        <FormHelperText>We'll never share your email.</FormHelperText>

                        <Textarea
                            mt="1rem"
                            focusBorderColor="purple.700"
                            placeholder='Enter your message'
                            size='sm'
                            resize={"vertical"}
                            isRequired
                        />
                        <Button
                            size="lg"
                            w="100%"
                            mt="2rem"
                            color="whiteAlpha.900"
                            bg={"purple.700"}
                            _hover={{
                                bg: 'purple.800',
                            }}

                            rightIcon={<FiSend />}
                            type="submit"
                            _focus={
                                {
                                    borderColor: "purple.500"
                                }
                            }
                            _active={
                                {
                                    borderColor: "purple.500"
                                }
                            }
                        >
                            Send
                        </Button>

                    </FormControl>

                </Box>
                <Box
                    w={["90%", "90%", "50%", "50%"]}
                    d={["flex", "flex", "flex", "flex"]}
                    py="2rem"
                >
                    <Image src="/send_email.svg"
                        w={["100%", "100%", "80%", "90%"]}
                        h={["100%", "100%", "100%", "50%"]}
                        alt="A man sitting and relaxing"
                    >
                    </Image>
                </Box>

            </Flex>

        </Box>

    )

}