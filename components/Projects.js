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
    Image,
    useColorMode,
    useColorModeValue,
    DarkMode,
    SimpleGrid
} from '@chakra-ui/react'
import { BiCloudDownload } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
export default function About() {
    const projectsBg = useColorModeValue("gray.50", "gray.900")
    const projecttextColor = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
    const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

    return (

        <Box bg={projectsBg}
            w="100vw"
        >

            <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>

        </Box>

    )

}