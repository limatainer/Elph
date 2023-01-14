import React, { useState, createContext } from 'react'

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { }
});

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode: setDarkMode }}>
      <label className="flex items-center">
        <input
          className="hidden"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className={`relative w-6 h-3 rounded-full bg-${darkMode ? 'gray-800' : 'white'}`}>
          <span
            className={`absolute w-3 h-3 rounded-full bg-white transform transition-all ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}
          ></span>
          <span className={`absolute top-0 left-0 w-3 h-3 rounded-full bg-${darkMode ? 'white' : 'gray-800'} transform transition-all ${darkMode ? 'translate-x-0' : 'translate-x-full'}`}>
          </span>
        </span>
      </label>
    </DarkModeContext.Provider>
  )
}

export default DarkModeToggle
