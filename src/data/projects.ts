import taskFlow from "../assets/projects/taskFlow.webp";
import bookStore from "../assets/projects/bookStore.webp";
import hris from "../assets/projects/hris.webp";
import healthTrack from "../assets/projects/healthTrack.webp";
import aiRecruitmentWorkflow from "../assets/projects/aiRecruitmentWorkflow.webp";
import NFATrainingCertificationAutomationSystem from "../assets/projects/NFATrainingCertificationAutomationSystem.webp";
import quizSubmission from "../assets/projects/quizSubmission.webp";

export interface RepoUrl {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    showLiveUrl?: boolean;
    repoUrl: string | RepoUrl[];
    image: string;
    images?: string[];
    details: {
        problem: string;
        solution: string;
        features: string[];
        challenges: string;
    };
}

export const projects: Project[] = [
        {
        id: crypto.randomUUID(),
        title: "AI Recruitment Workflow",
        description:
            "An AI-powered recruitment automation workflow that analyzes candidate CVs, ranks applicants using multi-criteria evaluation, and generates professional hiring reports.",
        techStack: [
            "N8N",
            "DeepSeek",
            "Google Drive",
            "Telegram",
            "PDF.co"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/AI-Recruitment-Workflow",
        image: aiRecruitmentWorkflow,
        images: [aiRecruitmentWorkflow],
        details: {
            problem:
                "Manual CV screening is time-consuming, inconsistent, and difficult to scale when processing large numbers of candidates.",
            solution:
                "Built an end-to-end recruitment workflow using n8n and DeepSeek AI to automatically extract CVs, evaluate candidates with structured scoring, rank applicants, and generate professional PDF reports with Telegram notifications.",
            features: [
                "Automated CV extraction from Google Drive",
                "AI-powered candidate analysis using DeepSeek",
                "Multi-criteria candidate scoring and ranking",
                "Professional PDF report generation",
                "Google Drive integration and Telegram notifications"
            ],
            challenges:
                "Designing reliable structured AI outputs, implementing weighted candidate evaluation, and orchestrating a scalable workflow capable of processing multiple CVs automatically."
        }
    },
    {
        id: crypto.randomUUID(),
        title: "NFA Training & Certification Automation System",
        description:
            "An end-to-end workflow automation system that streamlines employee training, assessments, certification, and HR reporting.",
        techStack: [
            "N8N",
            "Supabase",
            "PDFMonkey",
            "Email Automation"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/NFA-Training-Certification-Automation-System",
        image: NFATrainingCertificationAutomationSystem,
        images: [NFATrainingCertificationAutomationSystem, quizSubmission],
        details: {
            problem:
                "Managing mandatory employee training manually is inefficient, requiring HR teams to assign training, send reminders, evaluate quizzes, issue certificates, and prepare reports individually.",
            solution:
                "Developed an automated workflow using n8n that manages the complete employee training lifecycle, from assignment and quiz scheduling to certification generation and HR reporting.",
            features: [
                "Automatic training assignment",
                "Scheduled quiz release and reminder automation",
                "Certificate generation using PDFMonkey",
                "Training progress tracking with Supabase",
                "Automated HR reporting"
            ],
            challenges:
                "Designing a reliable multi-stage workflow that synchronizes employee progress, automates document generation, and minimizes manual intervention throughout the training lifecycle."
        }
    },
    {
        id: crypto.randomUUID(),
        title: "HealthTrack – Chronic Health Monitoring System",
        description:
            "A full-stack health monitoring system focused on secure data management, role-based access control, and long-term tracking of chronic health conditions.",
        techStack: [
            "Laravel",
            "Livewire",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/HealthTrack",
        image: healthTrack,
        images: [healthTrack],
        details: {
            problem:
                "Manual and unstructured health tracking makes it difficult to monitor long-term conditions securely and consistently.",
            solution:
                "Built a structured health monitoring platform using Laravel and PostgreSQL, emphasizing data integrity, secure access control, and a clear user interface for managing health records.",
            features: [
                "Role-based access control (RBAC)",
                "Dynamic data filtering and search",
                "Health data visualization and structured record management"
            ],
            challenges:
                "Designing a scalable data model while ensuring secure handling of sensitive health information."
        }
    },
    {
        id: crypto.randomUUID(),
        title: "HRIS – Human Resource Information System",
        description:
            "A modular Human Resource Information System built with a separated frontend-backend architecture to manage employee data, payroll, and attendance efficiently.",
        techStack: [
            "React",
            "Laravel",
            "MySQL",
            "Docker",
            "Tailwind CSS",
            "Shadcn UI"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: [
            { label: "Frontend", url: "https://github.com/Ryandra-TI01/HRIS-frontend" },
            { label: "Backend", url: "https://github.com/Ryandra-TI01/HRIS-backend" }
        ],
        image: hris,
        images: [hris],
        details: {
            problem:
                "HR operations are often handled through disconnected tools, leading to data duplication and operational inefficiencies.",
            solution:
                "Developed a full-stack HRIS with a decoupled architecture, enabling clean API communication, maintainable codebases, and containerized development workflows.",
            features: [
                "Employee data management dashboard",
                "Payroll and attendance tracking",
                "Authentication with role-based permissions"
            ],
            challenges:
                "Maintaining synchronization between frontend and backend services while developing and testing within Dockerized environments."
        }
    },

    {
        id: crypto.randomUUID(),
        title: "TaskFlow – Collaborative Task Management Platform",
        description:
            "A scalable task management platform designed to improve team productivity through real-time collaboration, structured workflows, and efficient state synchronization.",
        techStack: [
            "React",
            "Laravel",
            "PostgreSQL",
            "Docker",
            "Tailwind CSS",
            "TanStack Query"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: [
            { label: "Frontend", url: "https://github.com/Ryandra-TI01/taskflow-frontend" },
            { label: "Backend", url: "https://github.com/Ryandra-TI01/taskflow-backend" }
        ],
        image: taskFlow,
        images: [taskFlow],
        details: {
            problem:
                "Teams often struggle with fragmented tools and inconsistent task tracking, leading to poor visibility and inefficient collaboration.",
            solution:
                "Designed and implemented a decoupled frontend-backend architecture using React and Laravel, focusing on API-driven workflows, predictable state management, and performance optimization.",
            features: [
                "Kanban-based task workflow management",
                "User authentication and role-based access control",
                "Optimized data fetching and caching with TanStack Query"
            ],
            challenges:
                "Ensuring data consistency between frontend and backend services while maintaining performance in a Dockerized development environment."
        }
    },
    {
        id: crypto.randomUUID(),
        title: "Bookstore – Online Bookstore Application",
        description:
            "A Laravel-based online bookstore application demonstrating clean CRUD architecture, catalog management, and transaction workflows.",
        techStack: [
            "Laravel",
            "MySQL",
            "Tailwind CSS"
        ],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/bookstore",
        image: bookStore,
        images: [bookStore],
        details: {
            problem:
                "Small-scale businesses need a simple yet structured system to manage product catalogs and customer transactions.",
            solution:
                "Implemented a Laravel-based bookstore platform with organized CRUD operations and a straightforward checkout flow.",
            features: [
                "Book catalog with search and filtering",
                "Shopping cart and checkout functionality",
                "Admin inventory management panel"
            ],
            challenges:
                "Designing a clean and maintainable structure while keeping the user interface simple and intuitive."
        }
    },
];