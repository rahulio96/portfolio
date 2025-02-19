interface Props {
    width?: string
    height?: string
    color?: string
}

const HandshakeIcon = ({width='77', height='107', color='currentColor'}: Props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 77 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M56.7806 0L49.6826 40.7939L28.8223 58.0112L38.91 0H18.7106L0 107H20.2194L25.3946 77.3979L46.3226 60.0479L38.082 107H58.3014L77 0H56.7806Z"
                fill={color}
            />
        </svg>

    )
}

export default HandshakeIcon