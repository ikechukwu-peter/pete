import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    Image,
    Button,
    useColorModeValue,
    DarkMode
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';


export default function Introduction() {
    const introBg = useColorModeValue("gray.50", "gray.900")
    const textColor = useColorModeValue("gray.600", "whiteAlpha.900")
    const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

    return (
        <Box bg={introBg}
            w="100vw"
        >
            <Flex
                fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "100%"]}
                py="5rem"
                minW="100vw"
            // m="auto"


            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    // w={["80%", "80%", "80%", "100%"]}
                    textAlign="left"
                // m="auto"

                >
                    <Text fontWeight={800}
                        color={textColor}
                        mt={["2rem", "2rem", "3rem", "4rem"]}
                        mb=".2rem"
                    >
                        {/* "rules": { "react/no-unescaped-entities": 0 } */}
                        {" Hello I'm "}
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
                        <Typewriter
                            options={{
                                strings: ['Full-stack web developer', 'Frontend + Backend'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </Text>
                    <DarkMode>
                        <Link
                            href='https://api.whatsapp.com/send/?phone=23409082906878&text=Hello+Ikechukwu+Peter%2C+I+Need+a+website+or+Web-app+&app_absent=0'
                            isExternal
                            _hover={{
                                textDecor: "none"
                            }}
                        >
                            <Button
                                size="md"
                                w={["50%", "50%", "50%", "60%"]}
                                color="whiteAlpha.900"
                                bg={"purple.600"}
                                variant="ghost"
                                textDecor="none"
                                _hover={{
                                    bg: 'purple.500',
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
                                leftIcon={<FaWhatsapp />}
                            >
                                WhatsApp
                            </Button>
                        </Link>

                    </DarkMode>

                </Box>
                <Box
                    d={["none", "none", "flex", "flex"]}
                    w="50%"
                >

                    <Image src="/developer.svg"
                        w="100%"
                        h="50%"
                    >
                    </Image>
                </Box>
            </Flex>
        </Box>

    )

}