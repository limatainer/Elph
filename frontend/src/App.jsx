import React, { useContext } from 'react'

import { DarkModeContext } from './util/DarkModeToggle'

import Home from "./pages/Home"

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="App">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} text-${darkMode ? 'white' : 'black'}`}>
      </div>
      <Home />
    </div>
  )
}

export default App
