
// Individual button
const ExternalLink = ({text, link, color}: {text:string, link:string, color:string}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 border-2 border-[var(--${color})] cursor-pointer
                font-medium sm:text-xl text-[var(--${color})] hover:bg-[var(--${color})]
                hover:text-[var(--black)] transition duration-400 ease-in-out mb-3`}>
            {text}
        </a>
    )
}

// List of buttons
const Buttons = ({buttons}: {buttons:string[][]}) => {
  return (
    <div className='flex flex-wrap space-x-2 sm:space-x-5 items-center my-2'>
        {buttons.map(([title, link], index) => (
            <ExternalLink key={index} text={title} link={link} color={title.toString().startsWith('PR') ? 'red' : 'white'} />
        ))}
    </div>
  )
}

export default Buttons