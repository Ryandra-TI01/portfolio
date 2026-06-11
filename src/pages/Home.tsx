import { motion } from "framer-motion";
import {
    ArrowRight, Database,
    LayoutTemplate,
    Github,
    Linkedin,
    FileText,
    Terminal,
    Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import ParticleBackground from "../components/ParticleBackground";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/SEO";
import TechStackCard from "../components/TechStackCard";
import { fadeInUp, containerStagger } from "@/lib/animations";

const Home = () => {
    const resumePath = "/cv.pdf";

    const techStack = [
        {
            icon: <LayoutTemplate className="text-blue-500" size={24} />,
            title: "Frontend Architecture",
            description: "Building responsive, accessible interfaces with modern state management.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            icon: <Database className="text-emerald-500" size={24} />,
            title: "Backend Engineering",
            description: "Designing scalable APIs and robust database schemas.",
            tags: ["Laravel", "PostgreSQL", "Redis", "RESTful APIs"]
        },
        {
            icon: <Terminal className="text-orange-500" size={24} />,
            title: "DevOps & Tools",
            description: "Streamlining deployment and maintaining code quality.",
            tags: ["Docker", "Git", "Postman", "Vercel", "WSL"]
        }
    ];

    return (
        <PageTransition>
        <SEO
            title="Home"
            description="Portfolio of Ryandra Athaya Saleh — Full Stack Developer specializing in Laravel and React."
        />
        <div className="pt-10 flex flex-col min-h-screen overflow-hidden bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans dark:bg-zinc-900 dark:text-zinc-100">
            <ParticleBackground />
            <div className="flex flex-col flex-1">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 md:py-32">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={containerStagger}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Status Badge */}
                        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-400 dark:ring-zinc-700/50">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Open to Work
                            </div>
                        </motion.div>

                        {/* Title with Gradient */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 dark:text-zinc-100"
                        >
                            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-500 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500">Ryandra Athaya Saleh</span>.
                        </motion.h1>

                        {/* Subtitle: Value Proposition */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8 dark:text-zinc-400"
                        >
                            A <span className="text-zinc-900 font-semibold dark:text-zinc-100">Full Stack Developer</span> blending performance with aesthetics.
                            I build scalable solutions using <span className="text-zinc-900 font-medium dark:text-zinc-100">Laravel & React</span> that drive business growth.
                        </motion.p>

                        {/* Social Proof Bar (Vital for Recruiters) */}
                        <motion.div variants={fadeInUp} className="flex gap-4 justify-center mb-10 text-zinc-500 dark:text-zinc-400">
                            <a href="https://github.com/Ryandra-TI01" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-100 rounded-full dark:hover:text-zinc-100 dark:hover:bg-zinc-800">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors p-2 hover:bg-zinc-100 rounded-full dark:hover:bg-zinc-800">
                                <Linkedin size={22} />
                            </a>
                            <a href={resumePath} target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors flex items-center gap-2 p-2 hover:bg-zinc-100 rounded-full px-4 text-sm font-medium border border-transparent hover:border-zinc-200 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:border-zinc-700">
                                <FileText size={18} />
                                <span className="hidden sm:inline">Download CV</span>
                            </a>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild size="lg" className="rounded-full px-8 h-12 text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-200/50 ring-offset-2 ring-offset-zinc-50 focus:ring-2 focus:ring-zinc-900">
                                    <Link to="/projects">
                                        View Selected Work <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-sm font-medium border-zinc-200 bg-white/80 hover:bg-zinc-50 hover:text-zinc-900 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 dark:text-zinc-300">
                                    <Link to="/contact">Let's Talk</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Technical Expertise Section */}
                <section className="py-26 relative" aria-labelledby="tech-arsenal-heading">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <Cpu size={20} className="text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                            <h2 id="tech-arsenal-heading" className="text-sm font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">Technical Arsenal</h2>
                        </motion.div>

                        <motion.div
                            variants={containerStagger}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            role="list"
                            aria-label="Technical skills overview"
                        >
                            {techStack.map((tech, index) => (
                                <div key={index} role="listitem">
                                    <TechStackCard item={tech} index={index} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
        </PageTransition>
    );
};

export default Home;