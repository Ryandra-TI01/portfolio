import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll for glass effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setIsOpen(false), [location]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled || isOpen
                    ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold tracking-tight text-zinc-900 z-50">
                    ryandra.dev
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                        >
                            {/* "Magic" Active State Background */}
                            {location.pathname === link.path && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-zinc-100 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                    
                    {/* Recruiter Action: Resume or Github */}
                    <div className="ml-4 pl-4 border-l border-zinc-200">
                        <a
                            href="https://github.com/Ryandra-TI01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                        >
                            <Github size={16} className="mr-2" />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-zinc-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-0 right-0 min-h-screen bg-white pt-24 px-6 md:hidden border-b border-zinc-100"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-2xl font-medium tracking-tight ${
                                        location.pathname === link.path ? "text-zinc-900" : "text-zinc-400"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            <hr className="border-zinc-100 my-4" />
                            
                            <a
                                href="https://github.com/Ryandra-TI01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-lg font-medium text-zinc-900"
                            >
                                <Github size={20} />
                                GitHub Profile
                            </a>
                             <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-lg font-medium text-zinc-900"
                            >
                                <FileText size={20} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;