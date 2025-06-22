import { motion } from "framer-motion"

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <motion.h1
      className='text-center sm:text-left mb-5 sm:mb-10 justify-start items-start text-[var(--red)] font-bold text-4xl sm:text-5xl md:text-[3.3rem] lg:text-7xl'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {title}
    </motion.h1>
  )
}

export default Header