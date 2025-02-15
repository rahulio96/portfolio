import { ReactNode } from "react"
import Header from "./Header"

const Section = ({ children, id, title }: { children: ReactNode, id: string, title: string }) => {
  return (
    <div 
        id={id}
        className='px-3 sm:px-0 sm:w-[37.5rem] md:w-[45.8rem] lg:w-[56.2rem] sm:text-2xl md:text-3xl py-40 mt-56'
    >
        <Header title={title} />
        {children}
    </div>
  )
}

export default Section