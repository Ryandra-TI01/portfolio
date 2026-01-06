import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, FileText, Download } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "ryandra.athaya1705@gmail.com";
    
    const resumePath = "/cv.pdf"; 

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20 px-6 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm text-center md:text-left"
            >
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
                        Let's Connect
                    </h1>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        I'm currently looking for new opportunities as a Junior Fullstack Developer.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="space-y-4">
                    
                    {/* Primary Contact: Email */}
                    <div className="group relative flex items-center justify-between p-5 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300">
                        <a href={`mailto:${email}`} className="absolute inset-0 z-0" aria-label="Send email" />
                        
                        <div className="flex items-center space-x-4 z-10">
                            <div className="p-3 bg-white border border-zinc-200 rounded-lg text-red-500 group-hover:border-zinc-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-zinc-900">Email Me</p>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors">
                                    {email}
                                </p>
                            </div>
                        </div>

                        <div className="z-10 flex items-center gap-2">
                            <button 
                                onClick={handleCopyEmail}
                                className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors relative"
                                title="Copy Email"
                            >
                                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                            </button>
                            <div className="text-zinc-300 group-hover:text-zinc-900 transition-colors">
                                <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Secondary Contacts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://github.com/Ryandra-TI01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white border border-zinc-200 rounded-lg text-zinc-900 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                                    <Github size={22} />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-zinc-900">GitHub</p>
                                    <p className="text-xs text-zinc-500">@Ryandra-TI01</p>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white border border-zinc-200 rounded-lg text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white group-hover:border-[#0077b5] transition-all duration-300">
                                    <Linkedin size={22} />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-zinc-900">LinkedIn</p>
                                    <p className="text-xs text-zinc-500">Connect with me</p>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </a>
                    </div>
                </div>

                {/* Footer / CTA Buttons */}
                <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row gap-4 justify-center">
                    {/* Send Message Button */}
                    <a 
                        href={`mailto:${email}`}
                        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10"
                    >
                        <Mail size={18} className="mr-2" />
                        Send Message
                    </a>

                    {/* Download CV Button */}
                    <a 
                        href={resumePath}
                        download="Ryandra_Athaya_Saleh_CV.pdf"
                        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 hover:text-zinc-900 transition-all hover:scale-105 active:scale-95"
                    >
                        <FileText size={18} className="mr-2" />
                        Download CV
                        <Download size={16} className="ml-2 opacity-50" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;