import { motion } from "framer-motion"
import { JobExperience } from "../data/experienceData"
import { Buttons } from "./Buttons"
import SkillTags from "./SkillTags"

const SKILL_TAG_COLOR = 'lightgrey'

// Individual experiences
const ExperienceItem = ({ exp }: { exp: JobExperience }) => {
  const sentences = exp.desc.split('.')
    .map(sentence => sentence.trim() + '.')
    .filter(sentence => sentence.length > 1);

  return (
    <motion.div
      className='flex flex-col space-y-2'
      initial={{ opacity: 0, transform: "translateX(calc(-30%-100vw))" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ type: "spring", stiffness: 25, duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className='text-xl sm:text-2xl text-[var(--grey)]'>{exp.date}</p>
      <h2 className='text-2xl sm:text-4xl font-bold text-[var(--white)]'>{exp.title}</h2>

      {sentences.map((sentence, index) => (
        <p key={index} className='text-[1.1rem] sm:text-[1.4rem] text-[var(--lightgrey)]'>{sentence}</p>
      ))}
      
      <div className='justify-center items-center sm:inline'>
        {exp.buttons ? (
          <Buttons buttons={exp.buttons} />
        ) : (
          <div className='h-2' />
        )}
        {exp.skills && <SkillTags skills={exp.skills} color={SKILL_TAG_COLOR} />}
      </div>
    </motion.div>
  )
}

export default ExperienceItem