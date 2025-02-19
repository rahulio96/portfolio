interface SocialButtonProps {
    link: string
    children: React.ReactNode
}

const SocialButton = ({link, children}: SocialButtonProps) => {

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border-4 border-[var(--red)] flex cursor-pointer justify-center items-center
                bg-[var(--black)] hover:bg-[var(--red)] text-[var(--red)] hover:text-[var(--black)]
                w-[9rem] h-[9rem] transition duration-400 ease-in-out
                min-[29.063rem]:w-[159px] min-[29.063rem]:h-[159px]`}
        >
            {children}
        </a>
    )
}

export default SocialButton