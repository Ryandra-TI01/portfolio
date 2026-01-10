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

const Home = () => {
    const resumePath = "/cv.pdf"; 

    // Animation Variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

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
        <div className="pt-10 relative flex flex-col min-h-screen overflow-hidden bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
            
            {/* Background: Subtle Spotlight Effect */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size[14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col flex-1">
                
                {/* Hero Section */}
                <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 md:py-32">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Status Badge */}
                        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-200/50">
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
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
                        >
                            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-500">Ryandra Athaya Saleh</span>.
                        </motion.h1>

                        {/* Subtitle: Value Proposition */}
                        <motion.p 
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8"
                        >
                            A <span className="text-zinc-900 font-semibold">Full Stack Developer</span> blending performance with aesthetics. 
                            I build scalable solutions using <span className="text-zinc-900 font-medium">Laravel & React</span> that drive business growth.
                        </motion.p>

                        {/* Social Proof Bar (Vital for Recruiters) */}
                        <motion.div variants={fadeInUp} className="flex gap-4 justify-center mb-10 text-zinc-500">
                            <a href="https://github.com/Ryandra-TI01" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-100 rounded-full">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors p-2 hover:bg-zinc-100 rounded-full">
                                <Linkedin size={22} />
                            </a>
                            <a href={resumePath} target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors flex items-center gap-2 p-2 hover:bg-zinc-100 rounded-full px-4 text-sm font-medium border border-transparent hover:border-zinc-200">
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
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-sm font-medium border-zinc-200 bg-white/80 hover:bg-zinc-50 hover:text-zinc-900 backdrop-blur-sm">
                                    <Link to="/contact">Let's Talk</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Technical Expertise Section */}
                <section className="py-26 relative">
                    <div className="absolute inset-0backdrop-blur-3xl -z-10" />
                    <div className="container mx-auto px-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <Cpu size={20} className="text-zinc-400" />
                            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Technical Arsenal</h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div 
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="group h-full"
                                >
                                    <div className="h-full p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 relative overflow-hidden">
                                        {/* Subtle top gradient accent on hover */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-grlinearadient-to-r from-transparent via-zinc-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="h-12 w-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                                            {tech.icon}
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-zinc-900 mb-2">{tech.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                                            {tech.description}
                                        </p>

                                        {/* Keyword Tags for Recruiters */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {tech.tags.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-zinc-50 group-hover:border-zinc-900 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;