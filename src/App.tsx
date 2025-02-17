import Navbar from "./components/navbar/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Home from "./components/sections/Home"
import Projects from "./components/sections/Projects"

function App() {

  return (
    <div className='flex flex-col justify-center items-center px-2 sm:px-5'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className='h-96' />
    </div>
  )
}

export default App
