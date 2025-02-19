interface Props {
    width?: string
    height?: string
    color?: string
}

const EmailIcon = ({width="115", height="85", color="currentColor"}: Props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 115 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_29_250)">
                <path
                    d="M115.097 18.6792V69.1742C115.097 73.2565 113.413 77.1846 110.389 80.1548C107.366 83.125 103.231 84.9128 98.8315 85.1523L97.8177 85.1789H17.1822C12.7749 85.1791 8.53399 83.6194 5.32731 80.8188C2.12063 78.0182 0.190563 74.1884 -0.0680027 70.1131L-0.0968018 69.1742V18.6792L54.3034 52.2732L54.9715 52.6253C55.7589 52.9816 56.6237 53.1668 57.5 53.1668C58.3763 53.1668 59.2411 52.9816 60.0285 52.6253L60.6966 52.2732L115.097 18.6792Z"
                    fill={color} />
                <path
                    d="M97.8178 -0.179199C104.038 -0.179199 109.493 2.8617 112.534 7.43373L57.5001 41.4171L2.46631 7.43373C3.91043 5.26118 5.89455 3.44001 8.2531 2.12219C10.6117 0.804367 13.2763 0.0280955 16.0246 -0.141855L17.1823 -0.179199H97.8178Z"
                    fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_29_250">
                    <rect
                        width={width}
                        height={height}
                        fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default EmailIcon