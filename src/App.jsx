import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingPage'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/Eyes'
import Featured from './components/feautured'
import Cards from './components/card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}


export default App