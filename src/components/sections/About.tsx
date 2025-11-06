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
        <p>Hi! I’m a computer science student at CSU Sacramento, graduating in December 2025, with experience building real-world software across large companies, startups, and non-profits</p>
        <p>I’ve contributed to open-source projects like the npm CLI and DocsGPT, developed UI mobile app features for an early startup, and am currently automating workflows at Intel.</p>
        <p>For projects, I’ve contributed to development and led teams on full-stack projects, including a chemical inventory mobile app for a school and an AI education tool for a hackathon.</p>
        <p>I’m passionate about learning, collaborating with talented people, and building impactful software that serves real users.</p>
      </motion.div>
    </Section>
  )
}

export default About