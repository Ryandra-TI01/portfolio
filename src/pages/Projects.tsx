import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="min-h-screen bg-zinc-50 pt-20 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto" // Keeps your requested consistency
            >
                {/* Header Section */}
                <div className="mb-12 md:mb-16 space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                        Featured Projects
                    </h1>
                    <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        A selection of my best work, spanning frontend applications to full-stack systems.
                        Each project represents a unique challenge and solution.
                    </p>
                </div>

                {/* Grid Section - CHANGED: Max 2 columns instead of 3 for better spacing at 5xl */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group flex flex-col h-full bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300"
                        >
                            {/* Image Area */}
                            <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 border-b border-zinc-100">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-zinc-300">
                                        <FolderGit2 size={48} />
                                    </div>
                                )}

                                <Link
                                    to={`/projects/${project.id}`}
                                    className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"
                                    aria-label={`View case study for ${project.title}`}
                                />
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight group-hover:text-black transition-colors">
                                        <Link to={`/projects/${project.id}`}>
                                            {project.title}
                                        </Link>
                                    </h3>

                                    <div className="flex gap-3 shrink-0 pt-1">
                                        {project.repoUrl && (
                                            <a
                                                href={Array.isArray(project.repoUrl) ? project.repoUrl[0].url : project.repoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-zinc-400 hover:text-zinc-900 transition-colors"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={Array.isArray(project.liveUrl) ? project.liveUrl[0].url : project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-zinc-400 hover:text-zinc-900 transition-colors"
                                                title="View Live Site"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-zinc-500 text-base leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Footer */}
                                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs text-zinc-400 py-1 pl-1 font-medium">
                                                +{project.techStack.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="text-sm font-semibold text-zinc-900 flex items-center gap-1 group/link pl-4"
                                    >
                                        Details
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;