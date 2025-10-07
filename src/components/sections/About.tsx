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
        <p>I’m a computer science student at CSU Sacramento, graduating in December 2025, with hands-on experience building real-world software across startups, non-profits, and open-source communities.</p>
        <p>As a Software Engineer Intern at Intel, I'm renewing automation efforts and debugging platform issues. Previously, I built key mobile app features as a Frontend Developer at an early-stage startup.</p>
        <p>I’ve contributed to open-source tools like npm (used by 17M+ developers), and led teams in delivering full-stack apps, including a chemical inventory manager mobile app for a client and an AI-powered education tool built during a hackathon.</p>
        <p>I’m passionate about learning, collaborating with talented people, and building impactful software that serves real users.</p>
      </motion.div>
    </Section>
  )
}

export default About