import { motion } from "framer-motion";
import andraAquarium from "../assets/andraAquarium.webp";
import CareerTimeline from "../components/CareerTimeline";
import skills, { type Skill, type SkillCategory } from "@/data/SkillsData";
import { Download } from "lucide-react";
import Certifications from "@/components/Certifications";
import ParticleBackground from "../components/ParticleBackground";
const About = () => {
    const resumePath = "/cv.pdf";
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white pt-32 pb-20">
            <ParticleBackground />
            <div className="container mx-auto max-w-5xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col-reverse md:flex-row gap-12 items-start  py-10 md:py-12"
                >
                    <div className="flex-1 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                            About Me
                        </h1>
                        <div className="space-y-4 text-zinc-600 leading-relaxed text-base md:text-lg">
                            <p>
                                I am a Software Engineer based in Indonesia, specializing in building robust web applications using <strong>Laravel</strong> and <strong>React</strong>.
                            </p>
                            <p>
                                My approach to development is grounded in structure and scalability. Whether architecting a backend API or refining a frontend interaction, I prioritize clean code and maintainable systems over temporary fixes.
                            </p>
                            <p>
                                Currently open for new opportunities where I can contribute to complex problems and drive business value through technology.
                            </p>
                        </div>

                        <div className="pt-2">
                            <a
                                href={resumePath}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        {/* Right: Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-zinc-900 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-10"></div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl bg-white">
                                <img
                                    src={andraAquarium}
                                    alt="Ryandra Athaya"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Proficiency Grid */}
                <div className="mb-20">
                    <h2 className="text-xl font-bold mb-8 text-zinc-900 tracking-tight">Technical Proficiency</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {skills.map((group: SkillCategory, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5 border-b border-zinc-100 pb-2">
                                    {group.category}
                                </h3>
                                <ul className="space-y-3">
                                    {group.items.map((skill: Skill) => (
                                        <li
                                            key={skill.name}
                                            className={`
                                                    flex items-center gap-3 text-zinc-600 group cursor-pointer
                                                    transition-all duration-300
                                                    hover:scale-105 
                                                    rounded-lg px-2 py-2
                                                `}
                                        >
                                            {/* Icon container */}
                                            <span
                                                className={`
                                                    shrink-0 w-8 h-8 flex items-center justify-center rounded-md
                                                    transition-all duration-300
                                                    group-hover:shadow-md group-hover:rotate-3
                                                    ${skill.color}
                                                    `}
                                            >
                                                {skill.icon}
                                            </span>

                                            {/* Text Name */}
                                            <span
                                                className={`
                                                    text-sm font-medium transition-colors
                                                    ${skill.textColor}
                                                    `}
                                            >
                                                {skill.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <CareerTimeline />
                {/* Certification section */}
                <Certifications />
            </div>
        </div>
    );
};

export default About;
