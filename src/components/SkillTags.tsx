
// Individual tag
const Tag = ({ text, color }: { text: string, color: string }) => {
  return (
    <div className={`flex justify-center items-center w-fit px-3 py-1 sm:px-5 sm:py-2 mb-2 border-[var(--${color})] border-2 rounded-full text-[var(--${color})] text-[1rem] sm:text-[1.125rem]`}>
      {text}
    </div>
  )
}

// List of tags
const SkillTags = ({ skills, color }: { skills: string[], color: string }) => {
  return (
    <div className='flex flex-wrap space-x-1.5 sm:space-x-3 items-center'>
      {skills.map((skill, index) => (
        <Tag key={index} text={skill} color={color} />
      ))}
    </div>
  )
}

export default SkillTags