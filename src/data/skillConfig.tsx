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
    SiGithub,
    SiPostman,
    SiShadcnui,
    SiLinux,
    SiVercel,
    SiSupabase,
    SiN8N,
    SiDbeaver,
} from "react-icons/si";

import { DiRedis, DiMsqlServer, DiJava } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
// import { Users, Puzzle, Clock } from "lucide-react";
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
        color: "bg-black text-white dark:bg-zinc-700",
        textColor: "text-black dark:text-zinc-300",
    },

    // Backend
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
    "REST API": {
        name: "REST API",
        icon: <BsFiletypeJson size={16} />,
        color: "bg-black/50 text-white dark:bg-zinc-700/50 dark:text-zinc-300",
        textColor: "text-black/50 dark:text-zinc-400",
    },
    "Redis": {
        name: "Redis",
        icon: <DiRedis size={16} />,
        color: "bg-red-500 text-white dark:bg-red-600",
        textColor: "text-red-500 dark:text-red-400",
    },
    "Java": {
        name: "Java",
        icon: <DiJava size={16} />,
        color: "bg-red-500 text-white dark:bg-red-600",
        textColor: "text-red-500 dark:text-red-400",
    },

    // Tools
    "GitHub": {
        name: "GitHub",
        icon: <SiGithub size={16} />,
        color: "bg-[#181717] text-white dark:bg-zinc-700",
        textColor: "text-black dark:text-zinc-300",
    },
    "Docker": {
        name: "Docker",
        icon: <SiDocker size={16} />,
        color: "bg-[#2496ED] text-white dark:bg-[#1a7bb8]",
        textColor: "text-[#2496ED] dark:text-[#4db8ff]",
    },
    "Postman": {
        name: "Postman",
        icon: <SiPostman size={16} />,
        color: "bg-[#FF6C37] text-white dark:bg-[#e05a2a]",
        textColor: "text-[#FF6C37] dark:text-[#ff8a5e]",
    },
    "DBeaver": {
        name: "DBeaver",
        icon: <SiDbeaver size={16} />,
        color: "bg-[#372923] text-white dark:bg-[#4a352c]",
        textColor: "text-[#372923] dark:text-[#8a6b5e]",
    },
    "WSL": {
        name: "WSL",
        icon: <SiLinux size={16} />,
        color: "bg-[#4E4E4E] text-white dark:bg-[#666666]",
        textColor: "text-[#4E4E4E] dark:text-[#999999]",
    },
    "Vercel": {
        name: "Vercel",
        icon: <SiVercel size={16} />,
        color: "bg-black text-white dark:bg-zinc-700",
        textColor: "text-black dark:text-zinc-300",
    },
    "N8N": {
        name: "N8N",
        icon: <SiN8N size={16} />,
        color: "bg-[#EA4B71] text-white dark:bg-[#c93d5f]",
        textColor: "text-[#EA4B71] dark:text-[#ff6d92]",
    },
    "Supabase": {
        name: "Supabase",
        icon: <SiSupabase size={16} />,
        color: "bg-[#3ECF8E] text-white dark:bg-[#2eb07a]",
        textColor: "text-[#3ECF8E] dark:text-[#5edba8]",
    },

    // Databases
    "MySQL": {
        name: "MySQL",
        icon: <SiMysql size={16} />,
        color: "bg-[#4479A1] text-white dark:bg-[#35668a]",
        textColor: "text-[#4479A1] dark:text-[#6a9fc7]",
    },
    "PostgreSQL": {
        name: "PostgreSQL",
        icon: <SiPostgresql size={16} />,
        color: "bg-[#4169E1] text-white dark:bg-[#3455b8]",
        textColor: "text-[#4169E1] dark:text-[#6a8ff5]",
    },
    "SQL Server": {
        name: "SQL Server",
        icon: <DiMsqlServer size={16} />,
        color: "bg-[#CC2927] text-white dark:bg-[#a8201e]",
        textColor: "text-[#CC2927] dark:text-[#e84a48]",
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