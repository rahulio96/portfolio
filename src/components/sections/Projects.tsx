import { motion } from "framer-motion"
import { Buttons } from "../Buttons"
import Section from "../Section"
import SkillTags from "../SkillTags"
import { useState } from "react"
import { Project, projects } from "../../data/projectsData"

const ProjectBox = ({ project }: { project: Project }) => {
    const [isHover, setIsHover] = useState(false)

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const mouseIn = () => {
        setIsHover(true)
    }

    const mouseOut = () => {
        setIsHover(false)
    }

    return (
        <motion.div
            className='overflow-hidden relative'
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            variants={itemVariants}
        >
            <img src={project.src} alt={project.alt} className='w-full h-auto' />
            <motion.div
                className={`overflow-y-auto absolute h-full w-full bottom-0 left-0 bg-[var(--white)] text-[var(--black)] font-semibold text-[0.8rem] lg:text-[1rem] p-2.5`}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: isHover ? '0%' : '100%', opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="flex flex-col justify-start h-full  
                    space-y-1 min-[24.688rem]:space-y-5 sm:space-y-1.5 min-[63.75rem]:space-y-2.5">
                    <h3 className='text-[var(--red)] text-xl min-[20.938rem]:text-2xl min-[54.063rem]:text-3xl font-bold'>{project.title}</h3>
                    <p>{project.desc}</p>
                    <Buttons color='black' buttons={project.buttons} isSmall={true} />
                    <SkillTags skills={project.skills} color='darkgrey' isSmall={true} />
                </div>
            </motion.div>
        </motion.div>
    )
}

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <Section id={'Projects'} title={'Projects'}>
            <motion.div
                className='grid gap-4 grid-cols-1 sm:grid-cols-2 min-[94.375rem]:grid-cols-3'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <ProjectBox key={index} project={project} />
                ))}
            </motion.div>
        </Section>
    )
}

export default Projects