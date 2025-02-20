import { motion } from 'framer-motion'
import { Buttons } from '../Buttons'
import Section from '../Section'
import SkillTags from '../SkillTags'
import {experiences, JobExperience} from '../../data/experienceData'

const SKILL_TAG_COLOR = 'lightgrey'

// Individual experiences
const ExpSection = ({ exp }: { exp: JobExperience }) => {
  return (
    <motion.div
      className='flex flex-col space-y-2'
      initial={{ opacity: 0, transform: "translateX(calc(-50%-100vw))" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ type: "spring", stiffness: 25, duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className='text-xl sm:text-2xl text-[var(--grey)]'>{exp.date}</p>
      <h2 className='text-2xl sm:text-4xl font-bold text-[var(--white)]'>{exp.title}</h2>
      <p className='text-[1.1rem] sm:text-[1.4rem] text-[var(--lightgrey)]'>{exp.desc}</p>
      <div className='justify-center items-center sm:inline'>
        {exp.buttons ? (
          <Buttons buttons={exp.buttons} />
        ) : (
          <div className='h-2' />
        )}
        <SkillTags skills={exp.skills} color={SKILL_TAG_COLOR} />
      </div>
    </motion.div>
  )
}

// Full experience section
const Experience = () => {
  return (
    <Section id={'Experience'} title={'Experience'}>
      <div className='space-y-10'>
        {experiences.map((exp, index) =>(
          <ExpSection key={index} exp={exp} />
        ))}
      </div>
    </Section>
  )
}

export default Experience