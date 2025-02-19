
// Individual button
interface ExternalLinkProps {
    text: string
    link: string
    color: string
    isSmall?: boolean
    width?: string
}

export const ExternalLink = ({ text, link, color, isSmall = false, width='w-auto' }: ExternalLinkProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 cursor-pointer
                font-medium hover:text-[var(--black)] transition duration-400 ease-in-out text-center ${width} ` +
                (isSmall ?
                    'text-[0.9rem] min-[49.5rem]:text-[1.2rem] hover:text-[var(--white)] px-3 py-1 min-[865px]:px-5 min-[865px]:py-2 ' :
                    'sm:text-xl px-5 py-2 mb-3 ') +

                // Need to use hardcoded values for black and white otherwise it breaks
                (color === 'black' ? 'border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)]' 
                    : color === 'white' ? 'border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)]' 
                    : `border-[var(--${color})] text-[var(--${color})] hover:bg-[var(--${color})]`)
            }
        >
            {text}
        </a>
    )
}

// List of buttons
interface ButtonsProps {
    buttons: string[][]
    color?: string
    isSmall?: boolean
}

export const Buttons = ({ buttons, color, isSmall = false }: ButtonsProps) => {
    return (
        <div className={'flex flex-wrap space-x-2 sm:space-x-5 items-center ' + (isSmall ? 'items-center' : 'my-1 sm:my-2')}>
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