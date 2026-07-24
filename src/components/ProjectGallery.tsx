import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const safeIndex = Math.min(Math.max(selectedIndex, 0), images.length - 1);

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) =>
                    prev <= 0 ? images.length - 1 : prev - 1
                );
            } else if (e.key === "ArrowRight") {
                setSelectedIndex((prev) =>
                    prev >= images.length - 1 ? 0 : prev + 1
                );
            }
        },
        [images.length]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Reset index when images change (e.g., navigating between projects)
    useEffect(() => {
        setSelectedIndex(0);
    }, [images]);

    // No images
    if (!images || images.length === 0) {
        return (
            <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center">
                    <span className="font-medium text-zinc-300">No Preview Available</span>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            {/* Main Preview */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-700">
                <motion.div
                    key={safeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                    <img
                        src={images[safeIndex]}
                        alt={`${title} — screenshot ${safeIndex + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div
                    className="flex gap-2 md:gap-3 mt-3 overflow-x-auto pb-1"
                    role="tablist"
                    aria-label="Project image gallery"
                >
                    {images.map((src, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            role="tab"
                            aria-label={`View screenshot ${idx + 1}`}
                            aria-selected={idx === safeIndex}
                            className={`
                                w-16 md:w-20 h-10 md:h-12 shrink-0 rounded-lg overflow-hidden border-2
                                transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400
                                ${
                                    idx === safeIndex
                                        ? "border-zinc-900 dark:border-zinc-100 opacity-100"
                                        : "border-transparent opacity-60 hover:opacity-100 hover:border-zinc-300 dark:hover:border-zinc-600"
                                }
                            `}
                        >
                            <img
                                src={src}
                                alt={`${title} thumbnail ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
