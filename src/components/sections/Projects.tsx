import { motion } from "framer-motion"
import Buttons from "../Buttons"
import Section from "../Section"
import SkillTags from "../SkillTags"
import { useState } from "react"

class Project {
    title: string
    desc: string
    skills: string[]
    buttons: string[][]
    src: string


    constructor(title: string, desc: string, skills: string[], buttons: string[][], src: string) {
        this.title = title
        this.desc = desc
        this.skills = skills
        this.buttons = buttons
        this.src = src
    }
}

const chemTrack = new Project(
    'ChemTrack',
    'Designed and currently developing the ChemTrack iOS and Android mobile app.',
    ['React Native', 'TypeScript', 'Figma', 'Go'],
    [['GitHub', 'https://github.com/ekjyotshinh/ChemTrack']],
    'projects/ChemTrack.png'
)

const discordBot = new Project(
    'Discord Standup Bot',
    'Developed a Discrod bot that automates and faciliates daily standup meetings.',
    ['JavaScript', 'Node.js', 'AWS'],
    [['GitHub', 'https://github.com/rahulio96/discord-bot']],
    'projects/Discord.png'
)

const compass = new Project(
    'Compass for Canvas',
    'Placed 4th at Hornet Hacks 2024 for developing an AI-powered web app that helps students find course information.',
    ['React', 'TypeScript', 'Tailwind CSS'],
    [['GitHub', 'https://github.com/rahulio96/discord-bot'], ['Demo', 'https://www.youtube.com/watch?v=nKx--FjSrU4&t=9s']],
    'projects/Compass.png'
)

const digitRecognizer = new Project(
    'Digit Recognizer',
    'Built and deployed a web that allows users to draw digits and have a neural network predict the digit.',
    ['React', 'Flask', 'AWS'],
    [['GitHub', 'https://github.com/rahulio96/discord-bot'], ['View', 'https://drawdigits.netlify.app/']],
    'projects/Digits.png'
)

const minesweeper = new Project(
    'MineSweeper',
    'Re-created Minesweeper using Java, LWJGL, and OpenGL with a custom game engine',
    ['Java'],
    [['GitHub', 'https://github.com/rahulio96/minesweeper']],
    'projects/Minesweeper.png'
)

const mnist = new Project(
    'MNIST Neural Network',
    'Coded and trained a neural network to identify digits using the MNIST data set. Used in the Digit Recognizer project.',
    ['Python', 'PyTorch'],
    [['GitHub', 'https://github.com/rahulio96/MNIST-Neural-Network']],
    'projects/MNIST.png'
)

const pharmaStudy = new Project(
    'Pharmaceutical Study Simulator',
    'Co-led a team of 7 to build a pharmaceutical study web app for Vendia.',
    ['React', 'Firebase', 'Agile'],
    [['GitHub', 'https://github.com/Angkaram/Pharmaceutical-Study-Web-App-Project'], ['Demo', 'https://www.youtube.com/watch?v=K2LDj28C5iA']],
    'projects/Pharma.png'
)

const projectList = [chemTrack, discordBot, compass, digitRecognizer, minesweeper, mnist, pharmaStudy]

const ProjectBox = ({ project }: { project: Project }) => {
    const [isHover, setIsHover] = useState(false)

    const mouseIn = () => {
        setIsHover(true)
    }

    const mouseOut = () => {
        setIsHover(false)
    }

    return (
        <div
            className='overflow-hidden relative'
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
        >
            <img src={project.src} />
            <motion.div
                className={`absolute h-full w-full bottom-0 left-0 bg-[var(--white)] text-[var(--black)] font-semibold text-[0.8rem] lg:text-[1rem] py-1.5 px-2 lg:p-4`}
                initial={{ y: '100%' }}
                animate={{ y: isHover ? '0%' : '100%' }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="flex flex-col justify-start h-full">
                    <h3 className='text-[var(--red)] text-xl md:text-3xl font-bold mb-0.5 lg:mb-3'>{project.title}</h3>
                    <p className='mb-0 lg:mb-4'>{project.desc}</p>
                    <Buttons color='black' buttons={project.buttons} isSmall={true} />
                    <SkillTags skills={project.skills} color='darkgrey' isSmall={true} />
                </div>
            </motion.div>
        </div>
    )
}

const Projects = () => {
    return (
        <Section id={'projects'} title={'Projects'}>
            <div className='grid min-[38rem]:grid-cols-2 gap-4'>
                {projectList.map((project, index) => (
                    <ProjectBox key={index} project={project} />
                ))}
            </div>
        </Section>
    )
}

export default Projects