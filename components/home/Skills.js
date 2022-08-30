import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Tooltip,
    Icon
} from '@chakra-ui/react'

import { FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiReact, SiTypescript, SiExpress } from 'react-icons/si'

export default function Skills({
    lightBg,
    lightTextColor,
    cardBg,
}) {
    return (

        <Box
            bg={lightBg}
            w="100vw"
            fontFamily="Source Sans Pro"
            color={lightTextColor}
            id="skills"
        >

            <Flex
                justifyContent="space-between"
                flexDir={["column", "column", "column", "row"]}
                w="80%"
                m="auto"
                py="2rem"
            >
                <Box
                    w={["100%", "100%", "100%", "50%"]}
                    color={lightTextColor}

                >
                    <Heading
                        mb="2rem"
                        fontSize="3rem"
                    >
                        Skills
                    </Heading>
                    <Text
                        fontWeight={600}
                        w={["100%", "100%", "100%", "60%"]}
                        fontSize={["1.2rem", "1.4rem", "1.4rem", "1.6rem"]}
                    >
                        The following are skills I have worked with four the past four years and I am very versatile with them.
                        However, I am constantly growing and this section will keep updating...😉
                    </Text>

                </Box>
                <Box
                    w={["100%", "100%", "100%", "50%"]}
                >

                    <SimpleGrid
                        columns={[2, 2, 2, 4]}
                        spacing='40px'
                        pt="2rem"
                        pb="4rem"
                        placeItems="center"

                    >
                        <Icon
                            as={FaHtml5}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />


                        <Icon
                            as={SiCss3}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />

                        <Icon
                            as={SiJavascript}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.1)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />

                        <Icon
                            as={SiReact}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />

                        <Icon
                            as={FaNodeJs}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />

                        <Icon
                            as={SiTypescript}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />

                        <Icon
                            as={FaSass}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />
                        <Icon
                            as={SiExpress}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.2)",
                                // bg: "gray.700",
                            }}
                            w={["30%", "35%", "40%", "60%"]}
                            //  pb="2rem"
                            rounded="xl"
                            color="purple.500"
                        />
                    </SimpleGrid>

                </Box>

            </Flex>

        </Box>

    )

}