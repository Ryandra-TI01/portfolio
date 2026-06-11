import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

export interface TechStackItem {
    icon: ReactNode;
    title: string;
    description: string;
    tags: string[];
}

interface TechStackCardProps {
    item: TechStackItem;
    index: number;
}

const TechStackCard = ({ item, index }: TechStackCardProps) => {
    return (
        <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="group h-full"
        >
            <div className="h-full p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 relative overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 dark:hover:shadow-zinc-900/40">
                {/* Subtle top gradient accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                    className="h-12 w-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300 dark:bg-zinc-700 dark:border-zinc-600 dark:group-hover:bg-zinc-700"
                    aria-hidden="true"
                >
                    {item.icon}
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-2 dark:text-zinc-100">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 dark:text-zinc-400">
                    {item.description}
                </p>

                {/* Keyword Tags for Recruiters */}
                <div className="flex flex-wrap gap-2 mt-auto" role="list" aria-label={`Technologies for ${item.title}`}>
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            role="listitem"
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-zinc-50 group-hover:border-zinc-900 transition-colors duration-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 dark:group-hover:border-zinc-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TechStackCard;
