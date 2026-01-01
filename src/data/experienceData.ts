export interface JobExperience {
    date: string;
    title: string;
    desc: string;
    skills?: string[];
    buttons?: [string, string][];
}

export const experiences: JobExperience[] = [
    // Intel SWE Internship
    {
        date: "JUN 2025 - JAN 2026",
        title: "Debug Software Engineer Intern @ Intel",
        desc: "As part of the Customer Engineering team at Intel, I built a multi-stage machine learning pipeline to forecast platform needs, and automated and optimized customer validation tooling."
            + "I also supported debugging efforts for current and next-generation Intel platforms for Intel's major OEM customers.",
        skills: ["Python", "PowerShell", "Windows"],
    },

    // eUnity Frontend SWE
    {
        date: "APR 2024 - NOV 2024",
        title: "Frontend Software Engineer @ eUnity",
        desc: "Developed and designed the user interface and screens of eUnity, a dating industry startup mobile app. "
            + "Implemented several pages, modals, and reusable UI components for key features of the app including initial user setup, premium purchase, and user profile settings.",
        skills: ["Flutter", "Figma"],
    },

    // CodeDay SWE Internship
    {
        date: "JUN 2023 - AUG 2023",
        title: "Software Engineer Intern @ CodeDay",
        desc: "After my initial micro-internship with CodeDay, I was offered to return for their full-length \"Labs\" internship. "
            + "Merged several pull requests to the npm CLI, the open source command line interface and package manager that’s relied on by 17M+ developers worldwide.",
        skills: ["JavaScript", "Node.js", "Node Tap", "Scrum"],
        buttons: [
            ["GitHub", "https://github.com/npm/cli"],
            ["Blog Post", "https://www.linkedin.com/posts/rahulgupta96_internship2023-npm-opensource-activity-7097715272370843649-YmD8?utm_source=share&utm_medium=member_desktop"],
            ["PR #1", "https://github.com/npm/cli/pull/6642"],
            ["PR #2", "https://github.com/npm/cli/pull/6643"],
            ["PR #3", "https://github.com/npm/cli/pull/6685"],
            ["PR #4", "https://github.com/npm/npm-packlist/pull/173"],
        ],
    },

    // CodeDay SWE Micro-Internship
    {
        date: "JAN 2023 - FEB 2023",
        title: "Software Engineer Intern @ CodeDay",
        desc: "Resolved an account linking issue in freeCodeCamp's Classroom Mode, an open source tool for teachers to track student progress in courses with 1M+ users.",
        skills: ["JavaScript", "Auth0", "PostgreSQL", "Prisma Studio"],
        buttons: [
            ["GitHub", "https://github.com/freeCodeCamp/classroom"],
            ["PR #1", "https://github.com/freeCodeCamp/classroom/pull/248"],
        ],
    },
]  