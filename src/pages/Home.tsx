import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
    return (
        <div className="relative flex flex-col min-h-screen pt-20 overflow-hidden">
            {/* <AntiGravityBackground /> */}
            <div className="relative z-10 flex flex-col flex-1">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
                            Available for new opportunities
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Hi, I'm Ryandra Athaya Saleh. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
                                Full Stack Developer
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Specializing in building exceptional digital experiences with Laravel & React.
                            I transform complex problems into elegant, scalable solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button asChild size="lg" className="rounded-full px-8 text-base">
                                <Link to="/projects">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                                <Link to="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Tech Stack Highlights */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Layout size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Frontend Mastery</h3>
                                <p className="text-muted-foreground">
                                    Crafting responsive, interactive UIs with React, Tailwind CSS, and modern JavaScript ecosystems.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Backend Robustness</h3>
                                <p className="text-muted-foreground">
                                    Building secure, scalable APIs and server-side logic using Laravel and clean architecture principles.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Code size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                                <p className="text-muted-foreground">
                                    Writing maintainable, testable, and efficient code that stands the test of time and scale.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
