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
    SiLinux,
    SiVercel,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { Users, Puzzle, Clock } from "lucide-react";
import type { ReactNode } from "react";

export interface SkillConfig {
    name: string;
    icon: ReactNode;
    color: string;
    textColor: string;
}

/**
 * Central registry of all known skills.
 * To add a new skill, just add an entry here with the icon, color, and textColor.
 * Then reference it by name in SkillsData.tsx.
 */
const skillRegistry: Record<string, SkillConfig> = {
    // Frontend
    "React": {
        name: "React",
        icon: <SiReact size={16} />,
        color: "bg-[#61DAFB] text-black",
        textColor: "text-[#61DAFB]",
    },
    "TypeScript": {
        name: "TypeScript",
        icon: <SiTypescript size={16} />,
        color: "bg-[#3178C6] text-white",
        textColor: "text-[#3178C6]",
    },
    "Livewire": {
        name: "Livewire",
        icon: <SiLivewire size={16} />,
        color: "bg-[#FB70A9] text-white",
        textColor: "text-[#FB70A9]",
    },
    "Tailwind CSS": {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={16} />,
        color: "bg-[#06B6D4] text-white",
        textColor: "text-[#06B6D4]",
    },
    "Framer Motion": {
        name: "Framer Motion",
        icon: <SiFramer size={16} />,
        color: "bg-[#0055FF] text-white",
        textColor: "text-[#0055FF]",
    },
    "Shadcn UI": {
        name: "Shadcn UI",
        icon: <SiShadcnui size={16} />,
        color: "bg-black text-white",
        textColor: "text-black",
    },

    // Backend
    "Rest Api": {
        name: "Rest Api",
        icon: <BsFiletypeJson size={16} />,
        color: "bg-black/50 text-white",
        textColor: "text-black/50",
    },
    "Laravel": {
        name: "Laravel",
        icon: <SiLaravel size={16} />,
        color: "bg-[#FF2D20] text-white",
        textColor: "text-[#FF2D20]",
    },
    "PHP": {
        name: "PHP",
        icon: <SiPhp size={16} />,
        color: "bg-[#777BB4] text-white",
        textColor: "text-[#777BB4]",
    },
    "MySQL": {
        name: "MySQL",
        icon: <SiMysql size={16} />,
        color: "bg-[#4479A1] text-white",
        textColor: "text-[#4479A1]",
    },
    "PostgreSQL": {
        name: "PostgreSQL",
        icon: <SiPostgresql size={16} />,
        color: "bg-[#4169E1] text-white",
        textColor: "text-[#4169E1]",
    },
    "Redis": {
        name: "Redis",
        icon: <DiRedis size={16} />,
        color: "bg-red-500 text-white",
        textColor: "text-red-500",
    },

    // DevOps & Tools
    "Docker": {
        name: "Docker",
        icon: <SiDocker size={16} />,
        color: "bg-[#2496ED] text-white",
        textColor: "text-[#2496ED]",
    },
    "Git": {
        name: "Git",
        icon: <SiGit size={16} />,
        color: "bg-[#F05032] text-white",
        textColor: "text-[#F05032]",
    },
    "GitHub": {
        name: "GitHub",
        icon: <SiGithub size={16} />,
        color: "bg-[#181717] text-white",
        textColor: "text-black",
    },
    "Postman": {
        name: "Postman",
        icon: <SiPostman size={16} />,
        color: "bg-[#FF6C37] text-white",
        textColor: "text-[#FF6C37]",
    },
    "Jira": {
        name: "Jira",
        icon: <SiJira size={16} />,
        color: "bg-[#0052CC] text-white",
        textColor: "text-[#0052CC]",
    },
    "WSL": {
        name: "WSL",
        icon: <SiLinux size={16} />,
        color: "bg-[#4E4E4E] text-white",
        textColor: "text-[#4E4E4E]",
    },
    "Vercel": {
        name: "Vercel",
        icon: <SiVercel size={16} />,
        color: "bg-black text-white",
        textColor: "text-black",
    },

    // Soft Skills
    "Agile/Scrum": {
        name: "Agile/Scrum",
        icon: <Users size={16} />,
        color: "bg-emerald-500 text-white",
        textColor: "text-emerald-600",
    },
    "Problem Solving": {
        name: "Problem Solving",
        icon: <Puzzle size={16} />,
        color: "bg-purple-500 text-white",
        textColor: "text-purple-600",
    },
    "Time Management": {
        name: "Time Management",
        icon: <Clock size={16} />,
        color: "bg-amber-500 text-white",
        textColor: "text-amber-600",
    },
};

/**
 * Resolve a skill name to its full SkillConfig.
 * Returns undefined if the skill is not registered.
 */
export function resolveSkill(name: string): SkillConfig | undefined {
    return skillRegistry[name];
}

/**
 * Get all registered skill names (useful for debug/listing).
 */
export function getAllSkillNames(): string[] {
    return Object.keys(skillRegistry);
}

export default skillRegistry;
