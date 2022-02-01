import {
    Box,
    Center,
    HStack,
    Heading,
    Text,
    Link,
    Button,
    Image,
    useColorModeValue,
    DarkMode,
    SimpleGrid
} from '@chakra-ui/react'
import { AiOutlineLaptop } from 'react-icons/ai'
import { BsMegaphone, BsPhone } from 'react-icons/bs'

export default function Services() {
    const serviceBg = useColorModeValue("gray.50", "gray.800")
    const serviceTextColor = useColorModeValue("gray.600", "whiteAlpha.900")
    const serviceCardBg = useColorModeValue("gray.50", "gray.900")

    return (

        <Box
            bg={serviceBg}
            w="100vw"
            fontFamily="Source Sans Pro"
            color={serviceTextColor}
        >
            <Center
                pt="4rem"
                fontSize="2rem"
                fontWeight={600}
            >
                Services
            </Center>

            <SimpleGrid
                columns={[1, 1, 2, 3]}
                spacing='40px'
                width={["90%", "95%", "95%", "80%"]}
                m="auto"
                pt="2rem"
                pb="4rem"

            >
                <Box
                    bg={serviceCardBg}
                    height='auto'
                    transitionProperty='shadow'
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"

                >

                    <Box
                        d="flex"
                        flexDirection="column"
                        alignItems="center"
                        w={["90%", "86%", "80%", "90%"]}
                        m="auto"
                        mt="2rem"
                        textAlign="center"

                    >

                        <Box
                            color="purple.700"
                            fontSize="3rem"
                        >
                            <AiOutlineLaptop

                            />
                        </Box>

                        <Heading
                            fontSize="1rem"
                            my="1rem"
                        >
                            Website Creation
                        </Heading>
                        <Text>
                            Development of professional website, web system,
                            blogs and online stores.
                        </Text>

                    </Box>
                </Box>

                <Box
                    bg={serviceCardBg}
                    height='auto'
                    transitionProperty='shadow'
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"

                >

                    <Box
                        d="flex"
                        flexDirection="column"
                        alignItems="center"
                        w={["90%", "86%", "80%", "90%"]}
                        m="auto"
                        mt="2rem"
                        textAlign="center"

                    >

                        <Box
                            color="purple.700"
                            fontSize="3rem"
                        >
                            <BsPhone

                            />
                        </Box>

                        <Heading
                            fontSize="1rem"
                            my="1rem"
                        >
                            Responsivenes Site
                        </Heading>
                        <Text>
                            Creation of responsive website for the best viewing at all resolution.
                        </Text>

                    </Box>
                </Box>
                <Box
                    bg={serviceCardBg}
                    height='auto'
                    transitionProperty='shadow'
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"

                >

                    <Box
                        d="flex"
                        flexDirection="column"
                        alignItems="center"
                        w={["90%", "86%", "80%", "90%"]}
                        m="auto"
                        mt="2rem"
                        textAlign="center"

                    >

                        <Box
                            color="purple.700"
                            fontSize="3rem"
                        >
                            <BsMegaphone

                            />
                        </Box>

                        <Heading
                            fontSize="1rem"
                            my="1rem"
                        >
                           Semantic Code
                        </Heading>
                        <Text>
                            Strategy and monitoring for your business, making your website appear better and better in searches.
                        </Text>

                    </Box>
                </Box>

            </SimpleGrid>

        </Box>

    )

}