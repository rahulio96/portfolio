import Close from "../../assets/icons/Close";
import Menu from "../../assets/icons/Menu";
import ToggleTheme from "./ToggleTheme"
import { useState } from "react";

interface NavbarButtonProps {
  index: number
  title: string
  selected: number
  setSelected: (index: number) => void
  hasLine: boolean
}

const Line = ({ indexLeft, indexRight, selected }: { indexLeft: number, indexRight: number, selected: number }) => {
  return (
    <div className={'hidden sm:block max-h-full w-0.5 transition duration-400 ease-in-out ' +
      (indexLeft === selected || indexRight === selected ? 'bg-[var(--white)]' : 'bg-[var(--darkgrey)]')} />
  )
}

const NavbarButton = ({ index, title, selected, setSelected, hasLine }: NavbarButtonProps) => {
  return (
    <div className='flex'>
      <button className={'flex px-100 sm:block w-full sm:w-auto sm:px-5 md:px-7 lg:px-10 py-2 cursor-pointer transition duration-400 ease-in-out ' +
        (selected === index ? 'bg-[var(--white)] text-[var(--black)]' : 'text-[var(--grey)]')}
        onClick={() => setSelected(index)}>
        <a>
          {title}
        </a>
      </button>
      {hasLine && <Line indexRight={index} indexLeft={index + 1} selected={selected} />}
    </div>
  )
}

const buttons = ['Home', 'About', 'Experience', 'Projects', 'Contact']

const MobileNavbar = ({selected, setSelected, isToggled} : {selected: number, setSelected: (index: number) => void, isToggled: boolean}) => {
  return (
    <div className={`${isToggled ? 'top-[4rem]' : 'top-[-50%]'} fixed sm:hidden z-1 transition-all duration-500 ease-in-out`}>
      <div className='flex flex-col justify-center items-center w-full bg-[var(--darkgrey)] text-[1.1rem] font-bold overflow-hidden'>
        {buttons.map((button, index) => (
          <NavbarButton key={index} index={index} title={button} selected={selected} setSelected={setSelected} hasLine={false} />))}
      </div>
    </div>
  )
}

const Navbar = () => {
  const [selected, setSelected] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
    <MobileNavbar selected={selected} setSelected={setSelected} isToggled={isToggled} />
    <div className='fixed top-0 w-full bg-[var(--black)] p-2 sm:p-5 px-5 sm:px-20 z-2'>
      <div className='flex w-full justify-between sm:justify-center items-center'>

        <div className='hidden sm:flex font-bold lg:text-2xl'>
          <Line indexLeft={0} indexRight={0} selected={selected} />
          {buttons.map((button, index) => (
            <NavbarButton key={index} index={index} title={button} selected={selected} setSelected={setSelected} hasLine={true} />
          ))}
        </div>

        <div className='ml-0 pl-2 sm:pl-5 md:pl-10 sm:ml-auto'>
          <ToggleTheme />
        </div>

        <button className='sm:hidden p-2' onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? <Close color={'var(--red)'}/> : <Menu />}
        </button>
        
      </div>
    </div>
    </>
  )
}

export default Navbar