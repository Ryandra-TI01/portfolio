import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Layers, Zap, AlertCircle, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import ProjectRepoLinks from "../components/ProjectRepoLinks";
import ParticleBackground from "../components/ParticleBackground";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">Project Not Found</h2>
                <Button
                    onClick={() => navigate('/projects')}
                    variant="outline"
                    className="border-zinc-300 hover:bg-zinc-100 text-zinc-700"
                >
                    Back to Projects
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20 px-6">
                                    <ParticleBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                {/* Back Link */}
                <Link
                    to="/projects"
                    className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header Section */}
                <header className="relative mb-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 px-6 py-8 md:px-10 md:py-10">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute left-1/2 top-0 h-44 w-96 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-36 w-64 rounded-full bg-sky-200/40 blur-3xl" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl text-zinc-500 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="shrink-0">
                            <ProjectRepoLinks
                                repoUrl={project.repoUrl}
                                liveUrl={project.liveUrl}
                                showLiveUrl={project.showLiveUrl}
                                variant="button"
                            />
                        </div>
                    </div>
                </header>

                {/* Image Showcase */}
                <div className="mb-16">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-300">
                                    <span className="font-medium">No Preview Available</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Main Content (Left Column) */}
                    <div className="md:col-span-2 space-y-12">
                        {/* The Problem */}
                        <section>
                            <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <AlertCircle size={20} className="text-zinc-400" />
                                The Challenge
                            </h2>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                {project.details.problem}
                            </p>
                        </section>

                        {/* The Solution */}
                        <section>
                            <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <Zap size={20} className="text-zinc-400" />
                                The Solution
                            </h2>
                            <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                                {project.details.solution}
                            </p>

                            {/* Key Features List */}
                            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                                <h3 className="font-semibold text-zinc-900 mb-4 text-sm uppercase tracking-wider">
                                    Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {project.details.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-zinc-600 group">
                                            <CheckCircle2 size={18} className="mt-1 mr-3 text-zinc-400 group-hover:text-zinc-900 transition-colors shrink-0" />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Technical Challenges */}
                        {project.details.challenges && (
                            <section>
                                <h2 className="text-xl font-bold text-zinc-900 mb-4">Technical Hurdles</h2>
                                <p className="text-zinc-600 leading-relaxed text-lg">
                                    {project.details.challenges}
                                </p>
                            </section>
                        )}
                    </div>

                    {/* Sidebar (Right Column) */}
                    <div className="space-y-8">
                        {/* Tech Stack Card */}
                        <div className="sticky top-24">
                            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-sm">
                                <h3 className="text-sm font-bold text-zinc-900 mb-6 flex items-center uppercase tracking-wider">
                                    <Layers size={16} className="mr-2 text-zinc-400" />
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-semibold text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
