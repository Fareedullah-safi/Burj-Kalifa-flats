import React from 'react'
import Home from './page/Home'
import Hero from './page/Hero'
import Flats from './page/Flats'
// import Footer from './page/Footer'
// import Navbar from './page/Navbar'

const page = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Home />
      <Hero />
      <Flats />
    </main>
  )
}

export default page