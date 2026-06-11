import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
    size: number;
    opacity: number;
    color: string;
}

const PARTICLE_COUNT = 120;
const MOUSE_RADIUS = 200;
const MOUSE_STRENGTH = 0.5;

/** Brighter colors for light backgrounds */
const COLORS_LIGHT = [
    "37, 99, 235",
    "147, 51, 234",
    "6, 182, 212",
    "236, 72, 153",
];

/** Lighter, more vibrant colors for dark backgrounds */
const COLORS_DARK = [
    "96, 165, 250",
    "196, 167, 255",
    "103, 232, 249",
    "251, 146, 183",
];

function pickColor(theme: "light" | "dark"): string {
    const palette = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;
    return palette[Math.floor(Math.random() * palette.length)];
}

function createParticle(width: number, height: number, theme: "light" | "dark"): Particle {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const baseVx = (Math.random() - 0.5) * 0.8;
    const baseVy = (Math.random() - 0.5) * 0.8;

    return {
        x,
        y,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 1.6 + 0.8,
        opacity: theme === "dark" ? Math.random() * 0.45 + 0.3 : Math.random() * 0.35 + 0.25,
        color: pickColor(theme),
    };
}

function scaleParticle(p: Particle, fromW: number, fromH: number, toW: number, toH: number): Particle {
    const scaleX = toW / (fromW || 1);
    const scaleY = toH / (fromH || 1);
    return { ...p, x: p.x * scaleX, y: p.y * scaleY };
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);
    const prevDimsRef = useRef({ w: 0, h: 0 });
    const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles = particlesRef.current;
        let prevW = prevDimsRef.current.w;
        let prevH = prevDimsRef.current.h;

        const applyResize = (newW: number, newH: number) => {
            // Validate: skip if dimensions are clearly wrong (during transitions)
            if (newW <= 0 || newH <= 0 || newW > window.screen.width * 2 || newH > window.screen.height * 2) {
                return;
            }

            // Aspect ratio safety: if aspect ratio changed drastically, reset particles
            // (not scale) to avoid the "squished" effect
            const prevAspect = prevW > 0 && prevH > 0 ? prevW / prevH : 1;
            const newAspect = newW / newH;
            const aspectRatioDrift = Math.abs(prevAspect - newAspect) / prevAspect;

            canvas.width = newW;
            canvas.height = newH;

            if (particles.length === 0 || prevW <= 0 || prevH <= 0 || aspectRatioDrift > 0.15) {
                // First init, full reset, or aspect ratio changed too much → recreate
                particles = Array.from({ length: PARTICLE_COUNT }, () =>
                    createParticle(newW, newH, theme)
                );
                particlesRef.current = particles;
            } else {
                // Aspect ratio is stable → scale existing particles
                for (let i = 0; i < particles.length; i++) {
                    const scaled = scaleParticle(particles[i], prevW, prevH, newW, newH);
                    particles[i] = scaled;
                }
            }

            prevW = newW;
            prevH = newH;
            prevDimsRef.current = { w: prevW, h: prevH };
        };

        const debouncedResize = () => {
            // Clear previous timeout
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            // Debounce: wait 100ms for resize events to settle
            resizeTimeoutRef.current = setTimeout(() => {
                applyResize(window.innerWidth, window.innerHeight);
            }, 100);
        };

        // Defer initial setup so canvas is fully laid out after page transitions
        const initTimer = setTimeout(() => {
            applyResize(window.innerWidth, window.innerHeight);
        }, 60);

        window.addEventListener("resize", debouncedResize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouse.current = { x: -9999, y: -9999 };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const p of particles) {
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    p.vx -= (dx / dist) * force * MOUSE_STRENGTH;
                    p.vy -= (dy / dist) * force * MOUSE_STRENGTH;
                }

                p.vx += (p.baseVx - p.vx) * 0.05;
                p.vy += (p.baseVy - p.vy) * 0.05;

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = canvas.width + 20;
                else if (p.x > canvas.width + 20) p.x = -20;

                if (p.y < -20) p.y = canvas.height + 20;
                else if (p.y > canvas.height + 20) p.y = -20;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 100;

                    if (dist < maxDist) {
                        const lineAlpha = theme === "dark" ? 0.22 : 0.16;
                        const alpha = (1 - dist / maxDist) * lineAlpha;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(121, 165, 255, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            clearTimeout(initTimer);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", debouncedResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-screen h-screen pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
};

export default ParticleBackground;
