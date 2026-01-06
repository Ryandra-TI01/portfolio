import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import timelineData from "@/data/CareerTimeLineData";

const CareerTimeline = () => {
    // State to track which item is currently expanded
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="max-w-5xl">
            <h2 className="text-xl font-bold mb-8 text-zinc-900 tracking-tight">Experience</h2>

            <div className="relative border-l border-zinc-200 ml-3 space-y-4 py-2">
                {timelineData.map((item, index) => {
                    const isOpen = expandedId === item.id;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative pl-8"
                        >
                            {/* Connector Dot */}
                            <div 
                                className={`absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full border-2 border-zinc-50 ring-4 ring-zinc-50 transition-colors duration-300 
                                ${isOpen ? "bg-zinc-900 scale-110" : "bg-zinc-300"}`} 
                            />

                            {/* Clickable Card Area */}
                            <motion.div 
                                layout
                                onClick={() => toggleItem(item.id)}
                                className={`p-4 rounded-xl cursor-pointer transition-colors duration-300 border border-transparent
                                ${isOpen ? "bg-zinc-50 border-zinc-200 shadow-sm" : "hover:bg-zinc-50/50 hover:border-zinc-100"}`}
                            >
                                {/* Header Row */}
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className={`text-base font-semibold transition-colors ${isOpen ? "text-zinc-900" : "text-zinc-700"}`}>
                                            {item.role}
                                        </h3>
                                        <div className="text-sm text-zinc-500 mt-0.5">
                                            {item.company}
                                        </div>
                                    </div>

                                    {/* Right side: Date & Chevron */}
                                    <div className="text-right flex flex-col items-end gap-1">
                                        <span className="text-xs font-medium text-zinc-400 font-mono">
                                            {item.period}
                                        </span>
                                        <motion.div 
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-zinc-400 mt-1"
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {/* Tag Row */}
                                <div className="mt-3">
                                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded transition-colors
                                        ${isOpen ? "bg-zinc-200 text-zinc-700" : "bg-zinc-100 text-zinc-500"}`}>
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
                                            <ul className="list-disc pl-4 space-y-2 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-4">
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