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
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Services />
      <Skills />

    </>
  )
}
