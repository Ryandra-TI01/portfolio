import { resolveSkill } from "./skillConfig";
import type { SkillConfig } from "./skillConfig";

export interface SkillCategory {
    category: string;
    items: string[];
}

/**
 * Skills are now defined as simple string arrays.
 * To add a new skill:
 *   1. Register its icon/color in skillConfig.ts (one-time setup).
 *   2. Add the name string below.
 * No need to touch JSX or imports in this file.
 */
const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            "React",
            "TypeScript",
            "Livewire",
            "Tailwind CSS",
            "Framer Motion",
            "Shadcn UI",
        ],
    },
    {
        category: "Backend",
        items: [
            "Rest Api",
            "Laravel",
            "PHP",
            "MySQL",
            "PostgreSQL",
            "Redis",
        ],
    },
    {
        category: "DevOps & Tools",
        items: [
            "Docker",
            "Git",
            "GitHub",
            "Postman",
            "Jira",
            "WSL",
            "Vercel",
        ],
    },
    {
        category: "Soft Skills",
        items: [
            "Agile/Scrum",
            "Problem Solving",
            "Time Management",
        ],
    },
];

/**
 * Resolve a skill name to its full SkillConfig (icon, color, textColor).
 * Falls back to a generic config if the skill isn't registered.
 */
export function getSkillConfig(name: string): SkillConfig {
    return resolveSkill(name) ?? {
        name,
        icon: <span className="text-xs font-bold">?</span>,
        color: "bg-zinc-400 text-white",
        textColor: "text-zinc-500",
    };
}

export default skills;