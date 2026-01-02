import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import ProjectRepoLinks from "../components/ProjectRepoLinks";

const Projects = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-4xl mx-auto mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
                    <p className="text-muted-foreground text-lg">
                        A selection of my best work, spanning frontend applications to full-stack systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-secondary w-full relative overflow-hidden">
                                {project.image ? (
                                    <div className="w-full h-full relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground/50">
                                        <span className="font-medium text-sm">No Preview</span>
                                    </div>
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <ProjectRepoLinks
                                        repoUrl={project.repoUrl}
                                        liveUrl={project.liveUrl}
                                        showLiveUrl={project.showLiveUrl}
                                        variant="overlay"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                                </h3>
                                <p className="text-muted-foreground text-sm flex-1 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground font-medium">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <Button asChild variant="outline" className="w-full text-xs justify-between group/btn">
                                        <Link to={`/projects/${project.id}`}>
                                            View Case Study
                                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
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
