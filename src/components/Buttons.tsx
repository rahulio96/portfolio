
// Individual button
const ExternalLink = ({ text, link, color, isSmall = false }: { text: string, link: string, color: string, isSmall?: boolean }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 border-[var(--${color})] cursor-pointer
                font-medium text-[var(--${color})] hover:bg-[var(--${color})]
                hover:text-[var(--black)] transition duration-400 ease-in-out ` +
                (isSmall ?
                    'text-[0.9rem] min-[49.5rem]:text-[1.2rem] hover:text-[var(--white)] px-3 py-1 mb-1 min-[49.5rem]:px-5 min-[49.5rem]:py-2 min-[49.5rem]:mb-3' :
                    'sm:text-xl px-5 py-2 mb-3')
            }
        >
            {text}
        </a>
    )
}

// List of buttons
const Buttons = ({ buttons, color, isSmall = false }: { buttons: string[][], color?: string, isSmall?: boolean }) => {
    return (
        <div className={'flex flex-wrap space-x-2 sm:space-x-5 items-center my-1 sm:my-2 ' + (isSmall && 'items-center')}>
            {buttons.map(([title, link], index) => (
                <ExternalLink
                    key={index}
                    text={title}
                    link={link}
                    isSmall={isSmall}
                    color={color ? color :
                        (title.toString().startsWith('PR') ? 'red' : 'white')
                    }
                />
            ))}
        </div>
    )
}

export default Buttons