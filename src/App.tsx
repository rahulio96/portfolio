import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Home from "./components/sections/Home"
import Projects from "./components/sections/Projects"
import { ToastContainer } from 'react-toastify'

function App() {
  const [toastTheme, setToastTheme] = useState('dark')

  return (
    <div className='flex flex-col justify-center items-center px-2 sm:px-5'>
      <ToastContainer theme={toastTheme} />
      <Navbar setToastTheme={setToastTheme} />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
