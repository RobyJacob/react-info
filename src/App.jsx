import Nav from './components/Nav'
import Main from './components/Main'
import './styles.css'
import { useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className='container'>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}
