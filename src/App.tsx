import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
// const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-[60vh]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900" />
    </div>
);

function AppContent() {
    const location = useLocation();

    return (
        <>
            {/* Skip to main content - for keyboard users */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
            >
                Skip to main content
            </a>

            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
                <Navbar />
                <main id="main-content" className="flex-1 w-full" role="main">
                    <AnimatePresence mode="wait">
                        <Suspense fallback={<LoadingFallback />}>
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/projects/:id" element={<ProjectDetail />} />
                                <Route path="/contact" element={<Contact />} />
                                {/* <Route path="/blog" element={<Blog />} /> */}
                                <Route path="/blog/:slug" element={<BlogPost />} />
                            </Routes>
                        </Suspense>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
        </>
    );
}

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <Router>
                    <AppContent />
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
