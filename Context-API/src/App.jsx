import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import ThemeContext from './Context/ThemeContext'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  )
}

export default App