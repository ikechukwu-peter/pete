import React from 'react'
import {
    Box,
    Flex,
    Center,
    HStack,
    Heading,
    Text,
    Link,
    Button,
    Image,
    useColorModeValue,
    DarkMode,
    SimpleGrid,
    Tooltip,
    VStack,
    IconButton,
    Icon
} from '@chakra-ui/react'

import { FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiReact, SiTypescript, SiExpress } from 'react-icons/si'

export default function Services() {
    const skillsBg = useColorModeValue("gray.50", "gray.900")
    const skillsTextColor = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
    const skillsCardBg = useColorModeValue("gray.100", "gray.800")

    return (

        <Box
            bg={skillsBg}
            w="100vw"
            fontFamily="Source Sans Pro"
            color={skillsTextColor}
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
                                w={6}
                                bg={skillsCardBg}
                                height='auto'
                                transitionProperty='shadow'
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
                            as={SiCss3} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={SiJavascript} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={SiReact} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={FaNodeJs} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={SiTypescript} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={FaSass} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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
                            as={SiExpress} w={6}
                            bg={skillsCardBg}
                            height='auto'
                            transitionProperty='shadow'
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