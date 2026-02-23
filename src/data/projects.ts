import taskFlow from "../assets/projects/taskFlow.webp";
import bookStore from "../assets/projects/bookStore.webp";
import hris from "../assets/projects/hris.webp";
import healthTrack from "../assets/projects/healthTrack.webp";

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
    details: {
        problem: string;
        solution: string;
        features: string[];
        challenges: string;
    };
}

export const projects: Project[] = [
    {
        id: "1",
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
        id: "2",
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
        id: "3",
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
        id: "4",
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
    }
    // {
    //     id: "5",
    //     title: "AnakSehat – Health Education Web App",
    //     description: "Health education web application developed using Laravel.",
    //     techStack: ["Laravel", "MySQL"],
    //     liveUrl: "",
    //     showLiveUrl: false,
    //     repoUrl: "https://github.com/Ryandra-TI01/AnakSehat",
    //     image: "",
    //     details: {
    //         problem: "Needed a platform to educate children and parents about health.",
    //         solution: "Developed a Laravel-based health education app.",
    //         features: [
    //             "Role-based user management",
    //             "Educational content modules",
    //             "Interactive quizzes"
    //         ],
    //         challenges: "Designing engaging UI for children while keeping backend robust."
    //     }
    // },
    // {
    //     id: "6",
    //     title: "College Major Recommendation System",
    //     description: "Web app to recommend suitable college majors based on user preferences.",
    //     techStack: ["Laravel", "Python", "Machine Learning"],
    //     liveUrl: "",
    //     showLiveUrl: false,
    //     repoUrl: "https://github.com/Ryandra-TI01/college-major-recommendations",
    //     image: "",
    //     details: {
    //         problem: "Students struggle to choose suitable majors based on interests and skills.",
    //         solution: "Built a recommendation system using Laravel and ML models.",
    //         features: [
    //             "Survey-based input system",
    //             "Recommendation engine with ML",
    //             "Result visualization"
    //         ],
    //         challenges: "Integrating ML models with Laravel backend smoothly."
    //     }
    // }
];