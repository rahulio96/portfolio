import { useState, useEffect } from "react";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";

const ToggleTheme = () => {
    // Get theme from local storage or set to dark by default
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")

    useEffect(() => {
        const root = document.documentElement

        // update variables based on theme
        if (theme === "dark") {
            root.style.setProperty("--black", "#0A0A0A")
            root.style.setProperty("--white", "#E5E5E3")
            root.style.setProperty("--darkgrey", "#2E2E2E")
            root.style.setProperty("--lightgrey", "#D3D3D3")
        } else {
            root.style.setProperty("--black", "#E5E5E3")
            root.style.setProperty("--white", "#0A0A0A")
            root.style.setProperty("--darkgrey", "#2E2E2E")
            root.style.setProperty("--darkgrey", "#D3D3D3")
        }

        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return (
        <button
            className='border-[var(--green)] border-2 px-5 py-2 text-[var(--green)] 
                cursor-pointer hover:bg-[var(--green)] hover:text-[var(--black)] 
                transition duration-400 ease-in-out'
            onClick={toggleTheme}
        >

            {theme === "dark" ? <Sun width="24" height="24" /> : <Moon width="24" height="24" />}

        </button>
    )
}

export default ToggleTheme