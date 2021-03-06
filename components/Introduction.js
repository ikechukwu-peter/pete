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


export default function Introduction({
    lightBg,
    lightTextColor
}) {
    return (
        <Box bg={lightBg}
            w="100vw"
            id="introduction"
        >
            <Flex
                fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["80%", "80%", "80%", "90%"]}
                py="5rem"
                m="auto"
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["100%", "100%", "50%", "50%"]}
                    textAlign="left"
                    ml="4rem"
                    m="auto"
                >
                    <Text fontWeight={800}
                        color={lightTextColor}
                        mt={["2rem", "2rem", "3rem", "4rem"]}
                        mb=".2rem"
                        fontSize={["1.5rem","2rem"]}
                    >
                        {/* "rules": { "react/no-unescaped-entities": 0 } */}
                        {" Hello I'm "}
                    </Text>
                    <Heading fontWeight={600}
                        color={lightTextColor}
                        mb=".1rem"
                        fontSize={["2.1rem","2.5rem"]}
                    >
                        Ikechukwu Peter
                    </Heading>
                    <Box fontWeight={600}
                        color={lightTextColor}
                        fontSize={["1.2rem","2rem", "2rem", "2rem"]}
                        mb={["1rem", "1.2rem", "1.4rem", "1.6rem"]}
                    >
                        <Typewriter
                            options={{
                                strings: ['Full-stack web developer', 'Frontend + Backend'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </Box>
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
                                w={["50%", "50%", "50%", "40%"]}
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
                        alt="A developer writing code"
                        w="100%"
                        h="50%"
                    >
                    </Image>
                </Box>
            </Flex>
        </Box>

    )

}