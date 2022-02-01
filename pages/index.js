import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import Header from '../components/Header'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState("none")
  console.log(colorMode)
  const logo = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
  const bgColor = useColorModeValue("gray.200", "whiteAlpha.50")
  const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")

  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content="Ikechukwu Peter Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Introduction />
      <About />
      <Projects />

    </>
  )
}
