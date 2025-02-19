import { motion } from 'framer-motion'
import { Buttons } from '../Buttons'
import Section from '../Section'
import SkillTags from '../SkillTags'

const SKILL_TAG_COLOR = 'lightgrey'

class JobExperience {
  date: string
  title: string
  desc: string
  skills: string[]
  buttons?: string[][]

  constructor(date: string, title: string, desc: string, skills: string[], buttons?: string[][]) {
    this.date = date
    this.title = title
    this.desc = desc
    this.skills = skills
    this.buttons = buttons
  }
}

const eunity = new JobExperience(
  'APR 2024 - NOV 2024',
  'Frontend Software Engineer @ eUnity',
  'Developed and designed the user interface and screens of eUnity, a dating industry startup mobile app.',
  ['Flutter', 'Figma']
)

const codedayIntern = new JobExperience(
  'JUN 2023 - AUG 2023',
  'Software Engineer Intern @ CodeDay',
  'Merged several pull requests to the npm CLI, the open source command line interface and package manager that’s relied on by 17M+ developers worldwide.',
  ['JavaScript', 'Node.js', 'Node Tap', 'Scrum'],
  [
    ['GitHub', 'https://github.com/npm/cli'],
    ['Blog Post', 'https://www.linkedin.com/posts/rahulgupta96_internship2023-npm-opensource-activity-7097715272370843649-YmD8?utm_source=share&utm_medium=member_desktop'],
    ['PR #1', 'https://github.com/npm/cli/pull/6642'],
    ['PR #2', 'https://github.com/npm/cli/pull/6643'],
    ['PR #3', 'https://github.com/npm/cli/pull/6685'],
    ['PR #4', 'https://github.com/npm/npm-packlist/pull/173'],
  ]
)

const codedayMicroIntern = new JobExperience(
  'JAN 2023 - FEB 2023',
  'Software Engineer Micro-Intern @ CodeDay',
  'Resolved an account linking issue in freeCodeCamp\'s Classroom Mode, an open source tool for teachers to track student progress in courses with 1M+ users.',
  ['JavaScript', 'Auth0', 'PostgreSQL', 'Prisma Studio'],
  [
    ['GitHub', 'https://github.com/freeCodeCamp/classroom'],
    ['PR #1', 'https://github.com/freeCodeCamp/classroom/pull/248'],
  ]
)

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
        <ExpSection exp={eunity} />
        <ExpSection exp={codedayIntern} />
        <ExpSection exp={codedayMicroIntern} />
      </div>
    </Section>
  )
}

export default Experience