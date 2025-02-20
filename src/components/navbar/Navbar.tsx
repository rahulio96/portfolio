import Close from "../../assets/icons/Close";
import Menu from "../../assets/icons/Menu";
import ToggleTheme from "./ToggleTheme"
import { useEffect, useState } from "react";

// Button names and section names
const buttons = ['Home', 'About', 'Experience', 'Projects', 'Contact']

// Vertical line between navbar buttons
const Line = ({ indexLeft, indexRight, selected }: { indexLeft: number, indexRight: number, selected: number }) => {
  return (
    <div className={'hidden sm:block max-h-full w-0.5 transition duration-400 ease-in-out ' +
      (indexLeft === selected || indexRight === selected ? 'bg-[var(--white)]' : 'bg-[var(--darkgrey)]')} />
  )
}

// Navbar button itself
interface NavbarButtonProps {
  index: number
  title: string
  selected: number
  setSelected: (index: number) => void
  hasLine: boolean
  setIsToggled?: (isToggled: boolean) => void
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
}

const NavbarButton = ({ index, title, selected, setSelected, setIsToggled, hasLine, isClicked, setIsClicked }: NavbarButtonProps) => {
  const onClick = () => {
    setSelected(index)
    setIsClicked(true)

    // scroll to section
    document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });

    // prevent the navbar buttons from changing when scrolling down
    if (isClicked) {
      setTimeout(() => setIsClicked(false), 500);
    }

    // mobile only behavior
    if (setIsToggled) {
      setTimeout(function () { setIsToggled(false) }, 150);
    }
  }

  return (
    <div className='flex'>
      <button className={'flex px-100 sm:block w-full sm:w-auto sm:px-5 md:px-7 lg:px-10 py-2 cursor-pointer transition duration-400 ease-in-out ' +
        (selected === index ? 'bg-[var(--white)] text-[var(--black)]' : 'text-[var(--grey)]')}
        onClick={onClick}>
        <a>
          {title}
        </a>
      </button>
      {hasLine && <Line indexRight={index} indexLeft={index + 1} selected={selected} />}
    </div>
  )
}

// Navbar for mobile devices
interface MobileNavbarProps {
  selected: number
  setSelected: (index: number) => void
  isToggled: boolean
  setIsToggled: (isToggled: boolean) => void
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
}

const MobileNavbar = ({ selected, setSelected, isToggled, setIsToggled, isClicked, setIsClicked }: MobileNavbarProps) => {
  return (
    <div className={`${isToggled ? 'top-[3.6rem]' : 'top-[-50%]'} fixed sm:hidden z-1 transition-all duration-500 ease-in-out`}>
      <div className='flex flex-col justify-center items-center w-full bg-[var(--darkgrey)] text-[1.1rem] font-bold overflow-hidden'>
        {buttons.map((button, index) => (
          <NavbarButton
            key={index}
            index={index}
            title={button}
            selected={selected}
            setSelected={setSelected}
            hasLine={false}
            setIsToggled={setIsToggled}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />))}
      </div>
    </div>
  )
}


// Navbar component
const Navbar = ({ setToastTheme }: { setToastTheme: (str: string) => void }) => {
  const [selected, setSelected] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  // use this to prevent navbar from changing selected button when user scrolls
  const [isClicked, setIsClicked] = useState(false)

  // Intersection Observer to change selected navbar button based on section in view
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // Viewport
      threshold: 0.30, // 30% of section must be visible to trigger
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isClicked) {
          setSelected(buttons.indexOf(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    buttons.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isClicked]);

  return (
    <>
      <MobileNavbar selected={selected} setSelected={setSelected} isToggled={isToggled} setIsToggled={setIsToggled} isClicked={isClicked} setIsClicked={setIsClicked} />
      <div className='fixed top-0 w-full bg-[var(--black)] p-2 sm:p-5 sm:px-20 z-2'>
        <div className='flex w-full justify-between sm:justify-center items-center'>

          <div className='hidden sm:flex font-bold lg:text-2xl'>
            <Line indexLeft={0} indexRight={0} selected={selected} />
            {buttons.map((button, index) => (
              <NavbarButton key={index} index={index} title={button} selected={selected} setSelected={setSelected} hasLine={true} isClicked={isClicked} setIsClicked={setIsClicked} />
            ))}
          </div>

          <div className='ml-0 pl-2 sm:pl-5 md:pl-10 sm:ml-auto'>
            <ToggleTheme setToastTheme={setToastTheme} />
          </div>

          <button className='sm:hidden p-1' onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <Close color={'var(--red)'} /> : <Menu />}
          </button>

        </div>
      </div>
    </>
  )
}

export default Navbar