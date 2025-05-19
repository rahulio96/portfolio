import Section from '../Section'
import {experiences} from '../../data/involvementData'
import ExperienceItem from '../ExperienceItem'

// Full involvement section
const Involvement = () => {
  return (
    <Section id={'Involvement'} title={'Involvement'}>
      <div className='space-y-10'>
        {experiences.map((exp, index) =>(
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </Section>
  )
}

export default Involvement