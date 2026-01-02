import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 container mx-auto flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm text-center md:text-left"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h1>
                <p className="text-muted-foreground text-lg mb-8">
                    I'm currently looking for new opportunities as a Junior Fullstack Developer.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                    <a
                        href="mailto:ryandra.athaya1705@gmail.com"
                        className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-background rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <p className="font-medium">Email Me</p>
                                <p className="text-sm text-muted-foreground">ryandra.athaya1705@gmail.com</p>
                            </div>
                        </div>
                        <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://github.com/Ryandra-TI01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-background rounded-full">
                                    <Github size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">GitHub</p>
                                    <p className="text-sm text-muted-foreground">@Ryandra-TI01</p>
                                </div>
                            </div>
                            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-background rounded-full text-blue-600">
                                    <Linkedin size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">LinkedIn</p>
                                    <p className="text-sm text-muted-foreground">Connect with me</p>
                                </div>
                            </div>
                            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <a href="mailto:ryandra.athaya1705@gmail.com">
                            Send me an Email
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
