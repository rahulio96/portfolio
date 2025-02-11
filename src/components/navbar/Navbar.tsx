import ToggleTheme from "./ToggleTheme"
import { useState } from "react";

interface NavbarButtonProps {
  index: number
  title: string
  selected: number
  setSelected: (index: number) => void
}

const Line = ({ indexLeft, indexRight, selected }: { indexLeft: number, indexRight: number, selected: number }) => {
  return (
    <div className={'max-h-full w-0.5 transition duration-400 ease-in-out ' +
      (indexLeft === selected || indexRight === selected ? 'bg-[var(--white)]' : 'bg-[var(--darkgrey)]')} />
  )
}

const NavbarButton = ({ index, title, selected, setSelected }: NavbarButtonProps) => {
  return (
    <div className='flex'>
      <button className={'sm:px-5 md:px-10 py-2 cursor-pointer transition duration-400 ease-in-out ' +
        (selected === index ? 'bg-[var(--white)] text-[var(--black)]' : 'text-[var(--grey)]')}
        onClick={() => setSelected(index)}>
        <a>
          {title}
        </a>
      </button>
      <Line indexRight={index} indexLeft={index + 1} selected={selected} />
    </div>
  )
}

const Navbar = () => {
  const [selected, setSelected] = useState(0)
  const buttons = ['Home', 'About', 'Experience', 'Projects', 'Contact']

  return (
    <div className='fixed top-0 w-full bg-[var(--black)] p-5 px-5 sm:px-20 z-1'>
      <div className='flex justify-center items-center'>

        <div className='flex font-bold lg:text-2xl'>
          <Line indexLeft={0} indexRight={0} selected={selected} />
          {buttons.map((button, index) => (
            <NavbarButton key={index} index={index} title={button} selected={selected} setSelected={setSelected} />
          ))}
        </div>

        <div className='absolute right-15'>
          <ToggleTheme />
        </div>

      </div>
    </div>
  )
}

export default Navbar