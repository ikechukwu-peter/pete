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
    useColorMode,
    useColorModeValue,
    DarkMode
} from '@chakra-ui/react'
export default function Introduction() {
    const introBg = useColorModeValue("gray.50", "gray.900")
    const textColor = useColorModeValue("gray.600", "whiteAlpha.900")
    const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

    return (
        <Box bg={introBg}>
            <Container maxW={["container.base", "container.base", "container.sm", "container.md"]}>
                <Flex fontFamily="Source Sans Pro"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width={["80%", "80%", "100%", "100%"]}
                    m="auto"

                >
                    <Box d="flex"
                        justifyContent="center"
                        flexDir="column"
                        w={["80%", "80%", "80%", "100%"]}
                        textAlign="left"
                        m="auto"

                    >
                        <Text fontWeight={800}
                            color={textColor}
                            mt={["2rem", "2rem", "3rem", "4rem"]}
                            mb=".2rem"
                        >
                            Hello Im
                        </Text>
                        <Heading fontWeight={600}
                            color={textColor}
                            mb=".1rem"
                        >
                            Ikechukwu Peter
                        </Heading>
                        <Text fontWeight={600}
                            color={textColor}
                            mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                        >
                            Full-stack web developer
                        </Text>
                        <DarkMode>
                            <Button
                                size="md"
                                w={["50%", "50%", "50%", "60%"]}
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
                                mb={["2rem", "2rem", "3rem", "4rem"]}
                            >
                                Hire me
                            </Button>
                        </DarkMode>

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