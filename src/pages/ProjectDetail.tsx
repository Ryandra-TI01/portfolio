import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Layers, Zap, AlertTriangle } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import ProjectRepoLinks from "../components/ProjectRepoLinks";

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold">Project Not Found</h2>
                <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                        {project.description}
                    </p>

                    <ProjectRepoLinks
                        repoUrl={project.repoUrl}
                        liveUrl={project.liveUrl}
                        showLiveUrl={project.showLiveUrl}
                        variant="button"
                    />
                </header>

                {/* Visual Showcase Placeholder - Real image would go here */}
                {/* Visual Showcase */}
                {project.image ? (
                    <div className="w-full rounded-2xl mb-12 overflow-hidden border border-border bg-muted shadow-sm group">
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto max-h-[600px] object-contain bg-secondary/20"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="aspect-video bg-secondary w-full rounded-2xl mb-12 flex items-center justify-center border border-border">
                        <span className="text-muted-foreground font-medium">No Preview Available</span>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <AlertTriangle size={24} className="mr-3 text-orange-500" />
                                The Problem
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details.problem}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <Zap size={24} className="mr-3 text-yellow-500" />
                                The Solution
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {project.details.solution}
                            </p>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="font-semibold mb-4 text-lg">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.details.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details.challenges}
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                            <h3 className="text-lg font-bold mb-4 flex items-center">
                                <Layers size={20} className="mr-2" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
