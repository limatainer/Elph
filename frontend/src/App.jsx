import Header from "./components/Header"
import React, { useContext } from 'react'
import { DarkModeContext } from './util/DarkModeToggle'
import Services from "./components/Services"
import Footer from "./components/Footer"
import About from "./components/About"
import Description from "./components/Description"
function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="App">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} text-${darkMode ? 'white' : 'black'}`}>
      </div>
      <Header />
      <About />
      <Description />
      <Services />
      <Footer />
    </div>
  )
}

export default App
