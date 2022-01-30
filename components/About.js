import Image from 'next/image'
import {
    Flex,
    Box,
    Container,
    VStack,
    HStack,
    Heading,
    Text,
    Link,
    IconButton,
    Button,
    Image as ChakraImage,
    useColorMode,
    useColorModeValue,
    DarkMode
} from '@chakra-ui/react'
import { BiCloudDownload } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
export default function About() {
    const aboutBg = useColorModeValue("gray.50", "gray.800")
    const abtextColor = useColorModeValue("gray.600", "whiteAlpha.900")
    const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

    return (
        <Box bg={aboutBg}>
            <Container maxW={["container.base", "container.base", "container.sm", "container.md"]}>
                <Flex fontFamily="Source Sans Pro"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width={["80%", "80%", "100%", "100%"]}
                    m="auto"
                    flexDir="row-reverse"
                >
                    <Box d="flex"
                        alignSelf="center"
                        justifyContents="center"
                        flexDir="column"
                        w={["80%", "80%", "80%", "100%"]}
                        textAlign="left"
                        m="auto"

                    >
                        <Heading fontWeight={600}
                            color={abtextColor}
                            mb=".1rem"
                        >
                            About me
                        </Heading>
                        <Text fontWeight={600}
                            color={abtextColor}
                            mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                        >
                            I am Peter, currently located in Lagos, Nigeria.
                            web developer
                        </Text>
                        <Text fontWeight={600}
                            color={abtextColor}
                            mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                        >
                            I design great websites, online stores, learning platforms and anything you can imagine on the web.
                        </Text>
                        <HStack>
                            <DarkMode>
                                <Button
                                    size="md"
                                    color="whiteAlpha.900"
                                    bg={"purple.600"}
                                    variant="ghost"
                                    _hover={{
                                        bg: 'purple.800',
                                    }}
                                    _focus={{
                                        bg: 'purple.800',
                                        border: "none"
                                    }}
                                    _active={{
                                        bg: 'purple.800',
                                        border: "none"
                                    }}
                                >
                                    <FaGithub /> Github
                                </Button>
                                <DarkMode>
                                    <Button
                                        size="md"
                                        color="whiteAlpha.900"
                                        bg={"purple.600"}
                                        variant="ghost"
                                        _hover={{
                                            bg: 'purple.800',
                                        }}
                                        _focus={{
                                            bg: 'purple.800',
                                            border: "none"
                                        }}
                                        _active={{
                                            bg: 'purple.800',
                                            border: "none"
                                        }}
                                    >
                                        <BiCloudDownload /> Resume
                                    </Button>
                                </DarkMode>

                            </DarkMode>
                        </HStack>

                    </Box>
                    <Box w={"40rem"}
                        bg={"teal.600"}
                        h={"15rem"}
                        d={["none", "none", "flex", "flex"]}
                    >


                        {/* <Image src="/assets/undraw_developer.svg"
                           layout="fill"


                        >
                        </Image> */}
                    </Box>
                </Flex>

            </Container>

        </Box>

    )

}