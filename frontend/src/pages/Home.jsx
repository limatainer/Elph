import React from 'react'

import {
  Header,
  Presentation,
  Footer,
  Services,
  About
} from '../components'

export default function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <About />
      <Services />
      <Footer />
    </div>
  )
}
