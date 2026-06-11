import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 mt-auto dark:bg-zinc-900 dark:border-zinc-800">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                    
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                            ryandra.dev
                        </h3>
                        <p className="text-zinc-500 max-w-sm leading-relaxed text-sm dark:text-zinc-400">
                            Crafting robust digital ecosystems with React and Laravel. 
                            Currently available for freelance projects and full-time roles.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-semibold text-zinc-900 text-sm dark:text-zinc-100">Navigation</h4>
                        <Link to="/about" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors dark:hover:text-zinc-100">About Me</Link>
                        <Link to="/projects" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors dark:hover:text-zinc-100">Projects</Link>
                        <Link to="/blog" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors dark:hover:text-zinc-100">Blog</Link>
                        <Link to="/contact" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors dark:hover:text-zinc-100">Contact</Link>
                    </div>

                    {/* Connect Column */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-semibold text-zinc-900 text-sm dark:text-zinc-100">Connect</h4>
                        <div className="flex gap-4" role="list" aria-label="Social media links">
                            <SocialLink 
                                href="https://github.com/Ryandra-TI01" 
                                icon={<Github size={18} />} 
                                label="GitHub"
                                hoverColor="hover:bg-black" // GitHub Black
                            />
                            <SocialLink 
                                href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293" 
                                icon={<Linkedin size={18} />} 
                                label="LinkedIn"
                                hoverColor="hover:bg-[#0077b5]" // LinkedIn Blue
                            />
                            <SocialLink 
                                href="mailto:ryandra.athaya1705@gmail.com" 
                                icon={<Mail size={18} />} 
                                label="Email"
                                hoverColor="hover:bg-[#EA4335]" // Gmail Red
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
                    <p>&copy; {currentYear} Ryandra Athaya Saleh. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with React, Tailwind & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Updated Helper Component
const SocialLink = ({ href, icon, label, hoverColor }: { href: string, icon: React.ReactNode, label: string, hoverColor: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:text-white transition-all duration-300 ${hoverColor} dark:bg-zinc-800 dark:text-zinc-400`}
        aria-label={label}
    >
        {icon}
    </a>
);

export default Footer;