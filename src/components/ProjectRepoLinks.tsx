import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { RepoUrl } from "../data/projects";

interface ProjectRepoLinksProps {
  repoUrl: string | RepoUrl[];
  liveUrl?: string;
  showLiveUrl?: boolean;
  variant?: "overlay" | "button";
}

const ProjectRepoLinks = ({
  repoUrl,
  liveUrl,
  showLiveUrl,
  variant = "overlay",
}: ProjectRepoLinksProps) => {
  const isMultiple = Array.isArray(repoUrl);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  /* ================= Positioning ================= */

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  };

  /* ================= Lifecycle ================= */

  useEffect(() => {
    if (!open) return;

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    const close = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  /* ================= Dropdown ================= */

  const dropdown = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.96 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed z-[100] w-44 bg-card border border-border rounded-lg shadow-xl overflow-hidden text-left"
          style={{
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -100%)",
          }}
        >
          {(repoUrl as RepoUrl[]).map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border last:border-0"
            >
              {repo.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* ================= Trigger ================= */

  const githubTrigger = isMultiple ? (
    <button
      ref={triggerRef}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => !v);
      }}
      className="px-2.5 py-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center gap-1"
      aria-expanded={open}
    >
      <Github size={20} />
      <ChevronDown
        size={12}
        className={`transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  ) : (
    <a
      href={repoUrl as string}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Github size={20} />
    </a>
  );

  /* ================= Render ================= */

  return (
    <>
      <div className="flex items-center gap-4">
        {showLiveUrl && liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {githubTrigger}
      </div>

      {isMultiple && createPortal(dropdown, document.body)}
    </>
  );
};

export default ProjectRepoLinks;
