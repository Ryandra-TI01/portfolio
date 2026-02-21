import { useEffect, useRef } from "react";

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

// Palet biru terang yang mendekati visual antigravity.google
const COLORS = [
    "37, 99, 235",   // Vibrant Blue (Biru terang)
    "147, 51, 234",  // Deep Purple (Ungu pekat)
    "6, 182, 212",   // Bright Cyan (Biru muda cerah)
    "236, 72, 153",  // Pink Magenta (Merah muda tegas)
];

function createParticle(width: number, height: number): Particle {
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
        opacity: Math.random() * 0.35 + 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
                createParticle(canvas.width, canvas.height)
            );
        };

        resize();
        window.addEventListener("resize", resize);

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

            for (const p of particlesRef.current) {
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

            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 100;

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.16;
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
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default ParticleBackground;
