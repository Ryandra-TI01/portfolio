import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import timelineData, { type CompanyIdentity } from "@/data/CareerTimeLineData";

const CompanyLogoBadge = ({ company, companyIdentity }: { company: string; companyIdentity: CompanyIdentity }) => {
    const [imageFailed, setImageFailed] = useState(false);
    const shouldShowImage = Boolean(companyIdentity.logoSrc) && !imageFailed;

    return (
        <div
            className={
                shouldShowImage
                    ? "mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-white p-1 shadow-sm ring-1 ring-zinc-200 flex items-center justify-center"
                    : `mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-linear-to-br ${companyIdentity.gradientClass} shadow-sm ring-1 ring-white/70 flex items-center justify-center`
            }
        >
            {shouldShowImage ? (
                <img
                    src={companyIdentity.logoSrc}
                    alt={`${company} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                    onError={() => setImageFailed(true)}
                />
            ) : (
                <span className="text-[10px] font-bold tracking-wider text-white">
                    {companyIdentity.label}
                </span>
            )}
        </div>
    );
};

const CareerTimeline = () => {
    // State to track which item is currently expanded
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const openedIndex = hoveredIndex ?? expandedIndex;

    const toggleItem = (index: number) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="max-w-5xl">
            <h2 className="text-xl font-bold mb-8 text-zinc-900 tracking-tight dark:text-zinc-100">Experience</h2>

            <div className="relative border-l border-zinc-200 ml-3 space-y-4 py-2 dark:border-zinc-700">
                {timelineData.map((item, index) => {
                    const isOpen = openedIndex === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative pl-8"
                        >
                            {/* Connector Dot */}
                            <div 
                                className={`absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full border-2 border-zinc-50 ring-4 ring-zinc-50 transition-colors duration-300 
                                ${isOpen ? "bg-zinc-900 scale-110" : "bg-zinc-300"} dark:border-zinc-900 dark:ring-zinc-900 dark:bg-zinc-600`} 
                            />

                            {/* Clickable Card Area */}
                            <motion.div 
                                layout
                                onClick={() => toggleItem(index)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
                                className={`p-4 rounded-xl cursor-pointer transition-colors duration-300 border border-transparent
                                ${isOpen ? "bg-zinc-50 border-zinc-200 shadow-sm dark:bg-zinc-800 dark:border-zinc-700" : "hover:bg-zinc-50/50 hover:border-zinc-100 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-700"}`}
                            >
                                {/* Header Row */}
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex items-start gap-3">
                                        <CompanyLogoBadge company={item.company} companyIdentity={item.companyIdentity} />
                                        <div>
                                            <h3 className={`text-base font-semibold transition-colors ${isOpen ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-700 dark:text-zinc-300"}`}>
                                                {item.role}
                                            </h3>
                                            <div className="text-sm text-zinc-500 mt-0.5 dark:text-zinc-400">
                                                {item.company}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side: Date & Chevron */}
                                    <div className="text-right flex flex-col items-end gap-1">
                                        <span className="text-xs font-medium text-zinc-400 font-mono dark:text-zinc-500">
                                            {item.period}
                                        </span>
                                        <motion.div 
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-zinc-400 mt-1 dark:text-zinc-500"
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {/* Tag Row */}
                                <div className="mt-3">
                                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded transition-colors
                                        ${isOpen ? "bg-zinc-200 text-zinc-700 dark:bg-zinc-600 dark:text-zinc-200" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                                        {item.type}
                                    </span>
                                </div>

                                {/* Expandable Description */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="list-disc pl-4 space-y-2 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-4 dark:text-zinc-400 dark:border-zinc-700">
                                                {item.description.map((desc, i) => (
                                                    <li key={i} className="pl-1 marker:text-zinc-300">
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default CareerTimeline;
