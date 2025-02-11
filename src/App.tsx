import Navbar from "./components/navbar/Navbar"
import Home from "./components/sections/Home"

function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen px-2 sm:px-5'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
