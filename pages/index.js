import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Toolkit from '../components/Toolkit/Toolkit'
import Projects from '../components/Projects/Projects'
import Profile from '../components/Profile/Profile'
import Photography from '../components/Photography/Photograhpy'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Patrick-Lam Nguyen</title>
        <meta name="Patrick-Lam's Portfolio" content="Created with NextJS and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Navbar />
      <Toolkit />
      <Projects />
      <Profile />
      <Photography />
      <Contact />
      <Footer />
    </div>
  )
}
