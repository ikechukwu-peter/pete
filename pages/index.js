import Head from 'next/head'
import {
  useColorModeValue
} from '@chakra-ui/react'

import Header from '../components/Header'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  const darkBg = useColorModeValue("gray.50", "gray.800")
  const darkTextColor = useColorModeValue("gray.600", "whiteAlpha.900")

  const logo = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
  const headBg = useColorModeValue("gray.50", "gray.800")
  const hoverBg = useColorModeValue("blackAlpha.600", "whiteAlpha.600")
  const hamburgerNav = useColorModeValue("white", "black")
  const serviceCardBg = useColorModeValue("whiteAlpha.900", "gray.900")


  const lightBg = useColorModeValue("whiteAlpha.50", "gray.900")
  const lightTextColor = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
  const cardBg = useColorModeValue("gray.50", "gray.800")

 

  return (
    <>
      <Head>
        <title>Ikechukwu Peter Portfolio</title>
        <meta name="description" content={" Ikechukwu Peter's Portfolio "} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        headBg={headBg}
        logo={logo}
        hamburgerNav={hamburgerNav}
        hoverBg={hoverBg}
        darkTextColor={darkTextColor} />
      <Introduction
        lightBg={lightBg}
        lightTextColor={lightTextColor}
      />
      <About
        darkTextColor={darkTextColor}
        darkBg={darkBg}

      />
      <Projects
        lightBg={lightBg}
        lightTextColor={lightTextColor}
        cardBg={cardBg}
      />
      <Services
        darkTextColor={darkTextColor}
        darkBg={darkBg}
        serviceCardBg={serviceCardBg}
      />
      <Skills
        lightBg={lightBg}
        lightTextColor={lightTextColor}
        cardBg={cardBg}
      />
      <Footer 
       darkBg={darkBg}
      />

    </>
  )
}
