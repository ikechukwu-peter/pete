import {
    Flex,
    Box,
    HStack,
    Heading,
    Text,
    Link,
    Button,
    Image,
    DarkMode
} from '@chakra-ui/react'
import { BiCloudDownload } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
export default function About({
    darkTextColor,
    darkBg
}) {
    return (
        <Box
            bg={darkBg}
            id="about"
        >
            <Flex fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "90%"]}
                flexDirection={["column-reverse", "column-reverse", "row-reverse", "row-reverse"]}
                py="2rem"
                px="2rem"
                m="auto"
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    textAlign="left"
                    ml="4rem"
                    m="auto"
                    data-aos="fade-up"
                >
                    <Heading fontWeight={600}
                        color={darkTextColor}
                        mb="1rem"
                        fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]}
                    >
                        About me
                    </Heading>
                    <Text fontWeight={600}
                        fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
                        color={darkTextColor}
                        mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                    >
                        I am Peter, currently located in Lagos, Nigeria.
                        A fullstack web developer.
                    </Text>
                    <Text fontWeight={600}
                        fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
                        color={darkTextColor}
                        mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                    >
                        I design great websites, online stores, learning platforms and anything you can imagine on the web.
                    </Text>
                    <HStack
                        justify={["space-between", "space-between", "normal", "normal"]}
                        mt={["1rem", "1.5rem", "2rem", "2rem"]}
                    >
                        <DarkMode>
                            <Link
                                href="https://github.com/ikechukwu-peter"
                                isExternal
                                _hover={
                                    {
                                        textDecor: "none"
                                    }
                                }
                            >
                                <Button
                                    mr={["0rem", "0rem", "2rem", "3rem"]}
                                    size="md"
                                    color="whiteAlpha.900"
                                    bg={"purple.700"}
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
                                    leftIcon={<FaGithub
                                    />}
                                >
                                    Github
                                </Button>
                            </Link>

                        </DarkMode>
                        <DarkMode
                        >
                            <Link
                                href="/Peter_Ikechukwu_CV.pdf"
                                download="Ikechukwu_Peter_CV"
                                isExternal
                                _hover={
                                    {
                                        textDecor: "none"
                                    }
                                }
                            >
                                <Button
                                    size="md"
                                    color="whiteAlpha.900"
                                    bg={"purple.700"}
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

                                    leftIcon={<BiCloudDownload />}
                                >

                                    Resume
                                </Button>

                            </Link>

                        </DarkMode>

                    </HStack>

                </Box>
                <Box
                    w={["90%", "90%", "50%", "50%"]}
                    d={["flex", "flex", "flex", "flex"]}
                    py="2rem"
                    data-aos="fade-down"
                >
                    <Image src="/about.svg"
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