import { motion } from "framer-motion";
import RotatingText from "../../blocks/TextAnimations/RotatingText";
import { useState } from "react";

const Home = () => {

    const [isAn, setIsAn] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-center pt-75 sm:pt-85"
            id='Home'
        >
            <motion.div
                initial={{ transform: "translateX(calc(-50%-100vw))" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{ type: "spring", stiffness: 25, duration: 1 }}
                className='block w-[19.1rem] sm:w-[37.5rem] md:w-[45.8rem] lg:w-[56.2rem] justify-center font-bold text-4xl sm:text-5xl md:text-[3.3rem] lg:text-7xl'>
                <h1>Hi, I'm Rahul</h1>
                <h1 className="flex">
                    <span className='hidden sm:inline text-[var(--white)]'>{'I\'m ' + (isAn ? 'an' : 'a')}&nbsp;</span>
                    <RotatingText
                        texts={['Software Engineer', 'Sac State Student', 'Frontend Developer', 'OSS Contributor', 'Full Stack Developer']}
                        staggerDuration={0.02}
                        rotationInterval={3500}
                        mainClassName={'text-[var(--red)] text-[1.9rem] sm:text-5xl md:text-6xl lg:text-7xl'}
                        exit={{ y: "-20%", opacity: 0 }}
                        initial={{ y: "30%", opacity: 0 }}
                        setFlag={setIsAn}
                        keyword="OSS Contributor"
                    />
                </h1>
            </motion.div>

            <div className='my-5 sm:my-10' />

            <a
                href="https://drive.google.com/file/d/1ufNKIZ8lNfL62nl5G0L03uPOf0hr-vxU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='px-10 py-2 sm:px-15 sm:py-3 border-2 sm:border-3 border-[var(--red)] cursor-pointer
                    font-medium text-xl sm:text-3xl text-[var(--red)]
                    hover:bg-[var(--red)] hover:text-[var(--black)] transition duration-400 ease-in-out'>
                Resume
            </a>

        </motion.div>
    )
}

export default Home;

