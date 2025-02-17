
// Individual tag
const Tag = ({ text, color, isSmall = false }: { text: string, color: string, isSmall?: boolean }) => {
  return (
    <div className={`flex justify-center items-center w-fit  
      border-[var(--${color})] border-2 rounded-full text-[var(--${color})] `
      + (isSmall ? 'text-[0.8rem] min-[49.5rem]:text-[1rem] px-2 py-0.5 mb-1 mt-0' : 'text-[1rem] sm:text-[1.125rem] px-3 py-1 sm:px-5 sm:py-2 mb-2')}>
      {text}
    </div>
  )
}

// List of tags
const SkillTags = ({ skills, color, isSmall = false }: { skills: string[], color: string, isSmall?: boolean }) => {
  return (
    <div className={'flex flex-wrap space-x-1.5 lg:space-x-3 items-center'}>
      {skills.map((skill, index) => (
        <Tag key={index} text={skill} color={color} isSmall={isSmall} />
      ))}
    </div>
  )
}

export default SkillTags