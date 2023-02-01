import React from 'react'

import {
  Navbar,
  Presentation,
  Footer,
  Services,
  About,
  Contato,
  Portfolio
} from '../components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <About />
      <Services />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  )
}
