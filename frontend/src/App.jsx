import Header from "./components/Header"
import React, { useContext } from 'react'
import { DarkModeContext } from './util/DarkModeToggle'
import Services from "./components/Services"
import Footer from "./components/Footer"
function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="App">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} text-${darkMode ? 'white' : 'black'}`}>
        {/* Your content here */}
      </div>
      <Header />
      <Services />
      <Footer />
    </div>
  )
}

export default App
