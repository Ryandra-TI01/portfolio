import {
    SiReact,
    SiTypescript,
    SiLivewire,
    SiTailwindcss,
    SiFramer,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiGithub,
    SiPostman,
    SiShadcnui,
    SiJira,
    SiLinux
} from "react-icons/si";
import { Users, Puzzle, Clock } from "lucide-react";
import type { ReactNode } from "react";

export interface Skill {
    name: string;
    icon: ReactNode;
    color: string;
    textColor: string;
}

export interface SkillCategory {
    category: string;
    items: Skill[];
}

const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            {
                name: "React",
                icon: <SiReact size={16} />,
                color: "group bg-[#61DAFB] text-black", // React Blue
                textColor: "group text-[#61DAFB]"
            },
            {
                name: "TypeScript",
                icon: <SiTypescript size={16} />,
                color: "group bg-[#3178C6] text-white", // TS Blue
                textColor: "group text-[#3178C6]"
            },
            {
                name: "Livewire",
                icon: <SiLivewire size={16} />,
                color: "group bg-[#FB70A9] text-white", // Livewire Pink
                textColor: "group text-[#FB70A9]"
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss size={16} />,
                color: "group bg-[#06B6D4] text-white", // Tailwind Cyan
                textColor: "group text-[#06B6D4]"
            },
            {
                name: "Framer Motion",
                icon: <SiFramer size={16} />,
                color: "group bg-[#0055FF] text-white", // Framer Blue
                textColor: "group text-[#0055FF]"
            },
            {
                name: "Shadcn UI",
                icon: <SiShadcnui size={16} />,
                color: "group bg-[#000000] text-white", // Black
                textColor: "group text-black"
            },
        ]
    },
    {
        category: "Backend",
        items: [
            {
                name: "Laravel",
                icon: <SiLaravel size={16} />,
                color: "group bg-[#FF2D20] text-white", // Laravel Red
                textColor: "group text-[#FF2D20]"
            },
            {
                name: "PHP",
                icon: <SiPhp size={16} />,
                color: "group bg-[#777BB4] text-white", // PHP Purple
                textColor: "group text-[#777BB4]"
            },
            {
                name: "MySQL",
                icon: <SiMysql size={16} />,
                color: "group bg-[#4479A1] text-white", // MySQL Blue
                textColor: "group text-[#4479A1]"
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql size={16} />,
                color: "group bg-[#4169E1] text-white", // Postgres Blue
                textColor: "group text-[#4169E1]"
            },
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            {
                name: "Docker",
                icon: <SiDocker size={16} />,
                color: "group bg-[#2496ED] text-white", // Docker Blue
                textColor: "group text-[#2496ED]"
            },
            {
                name: "Git",
                icon: <SiGit size={16} />,
                color: "group bg-[#F05032] text-white", // Git Orange
                textColor: "group text-[#F05032]"
            },
            {
                name: "GitHub",
                icon: <SiGithub size={16} />,
                color: "group bg-[#181717] text-white", // GitHub Black
                textColor: "group text-black"
            },
            {
                name: "Postman",
                icon: <SiPostman size={16} />,
                color: "group bg-[#FF6C37] text-white", // Postman Orange
                textColor: "group text-[#FF6C37]"
            },
            {
                name: "Jira",
                icon: <SiJira size={16} />,
                color: "group bg-[#0052CC] text-white", // Jira Blue
                textColor: "group text-[#0052CC]"
            },
            {
                name: "WSL",
                icon: <SiLinux size={16} />,
                color: "group bg-[#4E4E4E] text-white", // Terminal Grey
                textColor: "group text-[#4E4E4E]"
            },
        ]
    },
    {
        category: "Soft Skills",
        items: [
            {
                name: "Agile/Scrum",
                icon: <Users size={16} />,
                color: "group bg-emerald-500 text-white",
                textColor: "group text-emerald-600"
            },
            {
                name: "Problem Solving",
                icon: <Puzzle size={16} />,
                color: "group bg-purple-500 text-white",
                textColor: "group text-purple-600"
            },
            {
                name: "Time Management",
                icon: <Clock size={16} />,
                color: "group bg-amber-500 text-white",
                textColor: "group text-amber-600"
            },
        ]
    }
];
export default skills;