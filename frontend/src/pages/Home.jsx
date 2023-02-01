import React from 'react'

import {
  Navbar,
  Presentation,
  Footer,
  Services,
  About
} from '../components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <About />
      <Services />
      <Footer />
    </div>
  )
}
