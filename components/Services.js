import {
    Box,
    Center,
    Heading,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import { AiOutlineLaptop } from 'react-icons/ai'
import { BsMegaphone, BsPhone } from 'react-icons/bs'

export default function Services({
    darkTextColor,
    darkBg,
    serviceCardBg

}) {
    return (

        <Box
            bg={darkBg}
            w="100vw"
            fontFamily="Source Sans Pro"
            color={darkTextColor}
            id="services"
        >
            <Center
                pt="4rem"
                fontSize="3rem"
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
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        // bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"
                    rounded="xl"

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
                             fontSize="1.8rem"
                            my="1rem"
                        >
                            Website Creation
                        </Heading>
                        <Text
                            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
                        >
                            Development of professional website, web system,
                            blogs and online stores.
                        </Text>

                    </Box>
                </Box>

                <Box
                    bg={serviceCardBg}
                    height='auto'
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        // bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"
                    rounded="xl"

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
                             fontSize="1.8rem"
                            my="1rem"
                        >
                            Responsivenes Site
                        </Heading>
                        <Text
                            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
                        >
                            Creation of responsive website for the best viewing at all resolution.
                        </Text>

                    </Box>
                </Box>
                <Box
                    bg={serviceCardBg}
                    height='auto'
                    transitionProperty='transform'
                    transitionDuration='2s'
                    transitionTimingFunction='ease'
                    _hover={{
                        transform: "scale(1.1)",
                        // bg: "gray.700",
                    }}
                    w="100%"
                    pb="2rem"
                    rounded="xl"

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
                             fontSize="1.8rem"
                            my="1rem"
                        >
                            Semantic Code
                        </Heading>
                        <Text
                            fontSize={["1.2rem", "1.4rem", "1.4rem", "1.8rem"]}
                        >
                            Strategy and monitoring for your business, making your website appear better and better in searches.
                        </Text>

                    </Box>
                </Box>

            </SimpleGrid>

        </Box>

    )

}