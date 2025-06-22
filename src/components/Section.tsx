import { ReactNode } from "react"
import Header from "./Header"

const Section = ({ children, id, title }: { children: ReactNode, id: string, title: string }) => {
  return (
    <div 
        id={id}
        className='px-3 md:px-[5rem] lg:px-[15%] sm:text-2xl md:text-3xl py-20 sm:py-35 w-full'
    >
        <Header title={title} />
        {children}
    </div>
  )
}

export default Section