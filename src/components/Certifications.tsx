import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "Fullstack Web Developer",
        issuer: "NF Academy (Independent Study)",
        date: "Sep 2025",
        credentialLink: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1L5p5aRy5cN7G_hP7Bff1ES1uJVPOfi5A%2Fview%3Fusp%3Dsharing&urlhash=_oS9&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPXUW5QCCTWGt0LAspL%2BerA%3D%3D",
        tags: ["React", "Laravel"],
        image: "https://media.licdn.com/dms/image/v2/D562DAQH5IYbzBvv-Jg/profile-treasury-document-cover-images_480/B56ZtKG0IlLEBM-/0/1766474862691?e=1768294800&v=beta&t=EXMPBarWyu_SXLxCwRHAZiQP5MMtokWqbk4xhMU-H3s"
    },
    {
        id: 2,
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Nov 2023",
        credentialLink: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Ffreecodecamp.org%2Fcertification%2FRyandra_Athaya%2Fresponsive-web-design&urlhash=lDLC&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BbDB06dhzQ064P0hXehDKHw%3D%3D",
        tags: ["HTML/CSS", "Frontend"],
        image: "https://media.licdn.com/dms/image/v2/D562DAQFBI1rOYzAa8A/profile-treasury-document-images_1920/B56ZtKJq1DGwAs-/1/1766475608872?e=1768435200&v=beta&t=BrhaPVbM807Y1qDXca17Aj0qnXSGE9ceu0LS_SHNwk4"
    },
    {
        id: 3,
        title: "MTCNA (Certified Network Associate)",
        issuer: "MikroTik",
        date: "May 2023",
        credentialLink: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fmikrotik.com%2Ftraining%2Fcertificates%2Fb264713c51e043d81cea&urlhash=HXS0&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPXUW5QCCTWGt0LAspL%2BerA%3D%3D",
        tags: ["Networking", "RouterOS"],
        image: "https://media.licdn.com/dms/image/v2/D562DAQHJFAV_9zrfRg/profile-treasury-document-cover-images_1920/B56ZtKJV18HsBQ-/0/1766475523223?e=1768294800&v=beta&t=R2Otdt29H4nzD07eWcVShTjQyBiuLl4vSJrq5XlZyYs"
    },
    {
        id: 4,
        title: "Microsoft Office Specialist",
        issuer: "Certiport",
        date: "May 2023",
        credentialLink: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fsinufia.nfacademy.id%2Fcertificate-verification%2F12e13526-3b2f-483a-8124-6f05f076f68e&urlhash=y5V8&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPXUW5QCCTWGt0LAspL%2BerA%3D%3D",
        tags: ["Productivity", "Office"],
        image: "https://media.licdn.com/dms/image/v2/D562DAQHqOlMS5zr9Tw/profile-treasury-document-cover-images_1280/B56ZtKJhevJEAw-/0/1766475570899?e=1768294800&v=beta&t=JhMUbzu9olxFIGL9DE9ZmYvDpksH14DSBGw1fHwv8j4"
    }
];

const Certifications = () => {
    return (
        <div className="max-w-5xl mt-20">
            <h2 className="text-xl font-bold mb-8 text-zinc-900 tracking-tight flex items-center gap-2">
                Certifications
                <span className="text-zinc-300 text-sm font-normal">({certifications.length})</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                    <motion.a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col p-5 bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
                    >
                        {/* ========================================== */}
                        {/* HOVER IMAGE LAYER                          */}
                        {/* ========================================== */}
                        
                        {/* 1. The Image (Absolute, Full Cover, Hidden by default) */}
                        <div 
                            className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        >
                            <img 
                                src={cert.image} 
                                alt={`${cert.title} preview`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* 2. Dark Overlay (To make text readable on top of image) */}
                        <div 
                            className="absolute inset-0 z-0 bg-linear-to-t from-black/90 via-black/60 to-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                        />

                        {/* ========================================== */}
                        {/* CONTENT LAYER (Relative + Z-Index)         */}
                        {/* ========================================== */}
                        <div className="relative z-10 flex flex-col h-full">
                            
                            {/* Top Row: Icon Box & External Link */}
                            <div className="flex justify-between items-start mb-4">
                                {/* Icon Box */}
                                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 
                                    transition-colors duration-300 
                                    group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 backdrop-blur-sm">
                                    <Award size={20} />
                                </div>

                                {/* External Link Icon */}
                                <div className="text-zinc-300 transition-colors duration-300 group-hover:text-white">
                                    <ExternalLink size={16} />
                                </div>
                            </div>

                            {/* Main Text Content */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-zinc-900 mb-1 line-clamp-1 pr-6 transition-colors duration-300 group-hover:text-white">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-zinc-500 mb-4 transition-colors duration-300 group-hover:text-zinc-300">
                                    {cert.issuer}
                                </p>
                            </div>

                            {/* Footer: Date & Tags */}
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 transition-colors duration-300 group-hover:border-white/20">
                                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                                    <Calendar size={12} />
                                    {cert.date}
                                </div>
                                
                                {cert.tags && (
                                    <div className="flex gap-1">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded transition-colors duration-300 
                                            text-zinc-500 bg-zinc-100 
                                            group-hover:text-white group-hover:bg-white/20 group-hover:backdrop-blur-md">
                                            {cert.tags[0]}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Certifications;