import { motion } from "framer-motion"
import Section from "../Section"

const About = () => {
  return (
    <Section id={'About'} title={'About Me'}>
      <motion.div
        className='space-y-4 sm:space-y-9 text-[var(--white)] text-xl sm:text-3xl'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <p>Hi! I’m a December 2025 computer science graduate from CSU Sacramento who enjoys building user-focused 
          software across the stack, with experience working at large companies, startups, and non-profits.
        </p>

        <p>I’ve contributed to open-source projects including npm, freeCodeCamp, and DocsGPT, developed UI mobile  
          app features for an early startup, and focused on automation and machine learning while interning at Intel.
        </p>

        <p>Outside of work, I’ve contributed to development and led teams on full-stack projects, including a 
          chemical inventory mobile app for a school and an AI education tool for students.
        </p>

        <p>I’m excited about learning new tools, collaborating with strong engineering teams, and building  
          software that makes a meaningful impact for users.
        </p>
      </motion.div>
    </Section>
  )
}

export default About