import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import Toolkit from '../components/Toolkit/Toolkit'
import Projects from '../components/Projects/Projects'
import Profile from '../components/Profile/Profile'
import Photography from '../components/Photography/Photography'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'
import { Container } from '@chakra-ui/react'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Patrick-Lam Nguyen</title>
        <meta name="Patrick-Lam's Portfolio" content="Created with NextJS and Chakra-UI" />
        <link rel="icon" href="/coding.ico" />
      </Head>

      <Hero />
      <Navbar />
      <Container maxW={{sm:'100%', md:'container.lg'}}>
        <Toolkit />
        <Projects />
        <Profile />
        <Photography />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}
