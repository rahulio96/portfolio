import Section from '../Section'
import {experiences} from '../../data/experienceData'
import ExperienceItem from '../ExperienceItem'

// Full experience section
const Experience = () => {
  return (
    <Section id={'Experience'} title={'Experience'}>
      <div className='space-y-10'>
        {experiences.map((exp, index) =>(
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </Section>
  )
}

export default Experience