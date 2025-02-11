
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='items-start font-bold text-4xl sm:text-5xl md:text-[3.3rem] lg:text-7xl'>
                <h1>Hi, I'm Rahul</h1>
                <h1>
                    <span className='hidden sm:inline text-[var(--white)]'>I'm a </span>
                    <span className='text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl'>Full Stack Developer</span>
                </h1>
            </div>

            <div className='my-5 sm:my-10'></div>

            <a
                href="https://drive.google.com/file/d/1ufNKIZ8lNfL62nl5G0L03uPOf0hr-vxU/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className='px-10 py-2 sm:px-15 sm:py-3 border-3 border-[var(--red)] cursor-pointer
                    font-medium text-xl sm:text-3xl text-[var(--red)]
                    hover:bg-[var(--red)] hover:text-[var(--black)] transition duration-400 ease-in-out'>
                Resume
            </a>

        </div>
    )
}

export default Home;

