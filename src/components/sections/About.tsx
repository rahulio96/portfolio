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
        <p>I’m a computer science student and ACM club treasurer at CSU Sacramento graduating in May 2025.</p>
        <p>I have experience as a frontend developer at an early-stage startup where I designed and developed a mobile app.</p>
        <p>I’ve also been a software engineer intern and made several open source contributions to a project with over 17 million users.</p>
        <p>I’m always looking forward to learning, working with talented people, and making impactful contributions to widely-used software.</p>

      </motion.div>
    </Section>
  )
}

export default About