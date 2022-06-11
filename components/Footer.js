import {
    Flex,
    Box,
    Link
} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa"
import { ImLinkedin2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'

export default function Introduction({
    darkBg
}) {
    const footerBg = "purple.700"
    return (
        <Box bg={footerBg}
            w="100vw"
            id="footer"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                py="3rem"
                color="gray.50"
                fontSize={["1.2rem", "1.2rem", "1.3rem", "1.5rem"]}
            >

                    <Link
                        href='https://linkedin.com/in/peter-ikechukwu'
                        isExternal
                        _hover={
                            {
                                textDecor: "none"
                            }
                        }

                        _focus={
                            {
                                border: "none",
                            }
                        }
                        px="2rem"
                    >
                        <ImLinkedin2 />
                    </Link>
                    <Link
                        href='https://github.com/ikechukwu-peter'
                        isExternal
                        _hover={
                            {
                                textDecor: "none"
                            }
                        }

                        _focus={
                            {
                                border: "none",
                            }
                        }
                        px="2rem"

                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://instagram.com/pete_iyke"
                        isExternal
                        _hover={
                            {
                                textDecor: "none"
                            }
                        }
                        _focus={
                            {
                                border: "none",
                            }

                        }
                        px="2rem"
                    >
                        <SiInstagram />
                    </Link>
              

            </Flex>

        </Box>

    )

}