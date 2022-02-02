import { useState } from 'react'
import {
    Flex,
    Box,
    Heading,
    Button,
    Image,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Textarea,
    Spinner,

} from '@chakra-ui/react'
import axios from 'axios'
import { FiSend } from "react-icons/fi"
import cogoToast from 'cogo-toast'

export default function Contact({
    darkTextColor,
    darkBg
}) {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
if(name, email, subject, message){

    try {
        setLoading(true)
        let res = await axios({
            method: "POST",
            url: '/api/mail',
            data: {
                name,
                email,
                subject,
                message
            }
        })
        console.log(res.data)
        const { hide, hideAfter } = cogoToast.success(`${res.data.success}`, {
            onClick: () => {
                hide();
            },
            hideAfter: 5
        });
    } catch (error) {
        console.log(error)
        let errorResponse = error.response ? error.response.errorMessage : "Check your internet connection"

        const { hide, hideAfter } = cogoToast.error(`${errorResponse}`, {
            onClick: () => {
                hide();
            },
            hideAfter: 5
        });

    }
    finally {
        setLoading(false)
    }

}
else {
    const { hide, hideAfter } = cogoToast.warn('Fill all the fields.😒', {
        onClick: () => {
            hide();
        },
        hideAfter: 5
    }); 
}


       
    }

    return (
        <Box
            bg={darkBg}
        >
            <Flex fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "90%"]}
                flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
                py="2rem"
                px="2rem"
                m="auto"
                color={darkTextColor}
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["100%", "100%", "90%", "50%"]}
                    textAlign="center"
                    ml="4rem"
                    m= "auto"

                >
                    <Heading fontWeight={600}
                        color={darkTextColor}
                        mb="1rem"
                    >
                        Write me
                    </Heading>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >

                        <FormControl
                            isRequired
                            w={["100%", "100%", "100%", "80%"]}
                        >

                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input id='name' type='text' placeholder='Enter your name'
                                _focus={
                                    {
                                        borderColor: "purple.700",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <Input id='email' type='email' placeholder='Enter your email'
                                _focus={
                                    {
                                        borderColor: "purple.700",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormHelperText>{"We'll never share your email."}</FormHelperText>

                            <FormLabel htmlFor='subject'>Subject</FormLabel>
                            <Input id='subject' type='text' placeholder='Enter Subject'
                                _focus={
                                    {
                                        borderColor: "purple.700",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <Textarea
                                mt="1rem"
                                focusBorderColor="purple.700"
                                placeholder='Enter your message'
                                size='sm'
                                resize={"vertical"}
                                isRequired
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button
                                size="lg"
                                w="100%"
                                mt="2rem"
                                color="whiteAlpha.900"
                                bg={"purple.700"}
                                _hover={{
                                    bg: 'purple.800',
                                }}

                                rightIcon={<FiSend />}
                                type="submit"
                                _focus={
                                    {
                                        borderColor: "purple.500"
                                    }
                                }
                                _active={
                                    {
                                        borderColor: "purple.500"
                                    }
                                }
                            >
                                {loading ? <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='whiteAlpha.500'
                                    size='md'
                                /> : "Send"}
                            </Button>

                        </FormControl>

                    </form>

                </Box>
                <Box
                    w={["90%", "90%", "100%", "50%"]}
                    d={["flex", "flex", "flex", "flex"]}
                    py="2rem"
                >
                    <Image src="/send_email.svg"
                        w={["100%", "100%", "80%", "90%"]}
                        h={["100%", "100%", "100%", "50%"]}
                        alt="A man sitting and relaxing"
                    >
                    </Image>
                </Box>

            </Flex>

        </Box>

    )

}