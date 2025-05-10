export interface Project {
    title: string;
    desc: string;
    src: string;
    alt: string;
    skills: string[];
    buttons: [string, string][];
}

export const projects: Project[] = [
    // ChemTrack
    {
        title: 'ChemTrack',
        desc: 'Collaborated on a 9-month client project to design and develop ChemTrack, a mobile app deployed via Apple TestFlight, as part of a team of 8.',
        src: 'projects/ChemTrack.png',
        alt: 'Blue background with a phone and the following text: ChemTrack: A chemical inventory manager with QR code scanning built for schools. Built for Android and iOS devices.',
        skills: ['React Native', 'Expo', 'TypeScript', 'Figma', 'Go', 'Jest', 'Agile'],
        buttons: [
            ['GitHub', 'https://github.com/ekjyotshinh/ChemTrack']
        ],
    },

    // Discord Bot
    {
        title: 'Discord Standup Bot',
        desc: 'Developed a Discord bot that automates daily standup meetings. Used by a team of 8 in an Agile development environment.',
        src: 'projects/Discord.png',
        alt: 'Grey background with title: Standup Bot with a discord logo. Shows a message from standup bot prompting the user to fill out their daily standup update.',
        skills: ['JavaScript', 'Node.js', 'AWS'],
        buttons: [
            ['GitHub', 'https://github.com/rahulio96/discord-bot']
        ],
    },

    // Compass
    {
        title: 'Compass for Canvas',
        desc: 'Placed 4th at Hornet Hacks 2024 for developing an AI-powered web app that helps students find course information.',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Python'],
        alt: 'White background with title: Compass for Canvas: Chat with your college courses. Shows a laptop with the compass website.',
        buttons: [
            ['GitHub', 'https://github.com/Desarso/canvas-rag-knead-uhjahb'],
            ['Demo', 'https://www.youtube.com/watch?v=nKx--FjSrU4&t=9s']
        ],
        src: 'projects/Compass.png'

    },

    // Digit Recog
    {
        title: 'Digit Recognizer',
        desc: 'Built and deployed a web that allows users to draw digits and have a neural network predict the digit.',
        src: 'projects/Digits.png',
        alt: 'Yellow background with laptop and phone showing the digit recognizer web app. The laptop shows the number 7 and the phone shows the number 0.',
        skills: ['React', 'Flask', 'AWS'],
        buttons: [
            ['GitHub', 'https://github.com/rahulio96/Digit-Recognition-App'],
            ['View', 'https://drawdigits.netlify.app/']
        ],
    },

    // Minesweeper
    {
        title: 'Minesweeper',
        desc: 'Re-created Minesweeper using Java, LWJGL, and OpenGL with a custom game engine',
        src: 'projects/Minesweeper.png',
        alt: 'Dark grey background with orange title: Minesweeper. Shows a screenshot of the minesweeper game with a large cursor and another screenshot of the minesweeper game but all mines and treasure are exposed.',
        skills: ['Java'],
        buttons: [
            ['GitHub', 'https://github.com/rahulio96/minesweeper']
        ],
    },

    // MNIST
    {
        title: 'MNIST Neural Network',
        desc: 'Coded and trained a neural network to identify digits. Used in the Digit Recognizer project.',
        src: 'projects/MNIST.png',
        alt: 'Grey background with title: MNIST Neural Network. Shows a code snippet, handwritten digits 0,4,5,1 and several circles connected by lines.',
        skills: ['Python', 'PyTorch'],
        buttons: [
            ['GitHub', 'https://github.com/rahulio96/MNIST-Neural-Network']
        ],
    },

    // Pharma Study
    {
        title: 'Pharma Study Simulator',
        desc: 'Co-led a team of 7 for 5 months to build a pharmaceutical study web app for Vendia Inc.',
        src: 'projects/Pharma.png',
        alt: 'Blue background with title: Pharmaceutical Study Simulator. Shows the pharmaceutical study web on a laptop and phone.',
        skills: ['React', 'Firebase', 'Agile'],
        buttons: [
            ['GitHub', 'https://github.com/Angkaram/Pharmaceutical-Study-Web-App-Project'],
            ['Demo', 'https://www.youtube.com/watch?v=K2LDj28C5iA']
        ],
    }
]