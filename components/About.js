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
    Image,
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
            <Flex fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "100%"]}
                flexDirection={["column", "column", "row-reverse", "row-reverse"]}
                py="5rem"
                px="2rem"
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["90%", "90%", "50%", "50%"]}
                    textAlign="left"

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
                <Box 
                w={[ "90%", "90%", "50%", "50%"]}
                    d={["flex", "flex", "flex", "flex"]}
                    py="2rem"
                >
                    <Image src="/about.svg"
                       w={[ "100%", "100%", "80%", "90%"]}
                       h={[ "100%", "100%", "100%", "50%"]}
                    >
                    </Image>
                </Box>
            </Flex>

        </Box>

    )

}