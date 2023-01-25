import React from 'react'

import {
  Header,
  About,
  Footer,
  Services,
  Clients
} from '../components'

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Clients />
      <Services />
      <Footer />
    </div>
  )
}
