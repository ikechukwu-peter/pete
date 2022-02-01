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

                >
                    <Heading
                        mb="2rem"
                    >
                        Skills
                    </Heading>
                    <Text
                        fontWeight={600}
                        w={["80%", "80%", "80%", "60%"]}
                    >
                        This skills listed here are not exhausitive and will keep changing but I am very versatile in them for many years now.
                    </Text>

                </Box>
                <Box
                    w={["100%", "100%", "100%", "50%"]}
                >

                    <SimpleGrid
                        columns={[1, 1, 2, 4]}
                        spacing='40px'
                        pt="2rem"
                        pb="4rem"
                        placeItems="center"

                    >

                        <Tooltip hasArrow label='HTML' bg='gray.700' color='blackAlpha.800'>
                            <Icon
                                as={FaHtml5}
                                bg={cardBg}
                                height='auto'
                                transitionProperty='transform'
                                transitionDuration='2s'
                                transitionTimingFunction='ease'
                                _hover={{
                                    transform: "scale(1.1)",
                                    bg: "gray.700",
                                }}
                                w={["30%", "35%", "50%", "60%"]}
                                //  pb="2rem"
                                rounded="xl"
                                color="purple.500"
                            />
                        </Tooltip>

                        <Icon
                            as={SiCss3}
                            bg={cardBg}
                            height='auto'
                            transitionProperty='transform'
                            transitionDuration='2s'
                            transitionTimingFunction='ease'
                            _hover={{
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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
                                transform: "scale(1.1)",
                                bg: "gray.700",
                            }}
                            w={["30%", "35%", "50%", "60%"]}
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