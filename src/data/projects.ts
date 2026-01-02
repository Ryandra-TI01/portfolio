import taskFlow from "../assets/taskFlow.webp";
import bookStore from "../assets/bookStore.webp";
import hris from "../assets/hris.webp";
import healthTrack from "../assets/healthTrack.webp";

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
        title: "HealthTrack – Chronic Health Monitoring App",
        description: "Fullstack health monitoring web application for tracking chronic health conditions.",
        techStack: ["Laravel", "Livewire", "Tailwind CSS", "PostgreSQL"],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/HealthTrack",
        image: healthTrack,
        details: {
            problem: "Needed a way to monitor chronic health conditions with clear UI and secure data handling.",
            solution: "Developed a fullstack health monitoring app using Laravel, Livewire, and PostgreSQL.",
            features: [
                "Rule-based access control",
                "Dynamic filtering and search",
                "Data visualization and management"
            ],
            challenges: "Ensuring scalability and secure handling of sensitive health data."
        }
    },
    {
        id: "2",
        title: "HRIS – Human Resource Information System",
        description: "Frontend and backend applications for managing HR processes.",
        techStack: ["React", "Laravel", "MySQL", "Docker", "Tailwind CSS", "Shadcn UI"],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: [
            { label: "Frontend", url: "https://github.com/Ryandra-TI01/HRIS-frontend" },
            { label: "Backend", url: "https://github.com/Ryandra-TI01/HRIS-backend" }
        ],
        image: hris,
        details: {
            problem: "Companies needed a centralized HR system to manage employees and payroll.",
            solution: "Built HRIS with separate frontend (React) and backend (Laravel) repositories.",
            features: [
                "Employee management dashboard",
                "Payroll and attendance tracking",
                "Role-based authentication"
            ],
            challenges: "Synchronizing frontend and backend APIs with Dockerized environments."
        }
    },
        {
        id: "3",
        title: "TaskFlow – Task Management App",
        description: "Frontend and backend applications for collaborative task management.",
        techStack: ["React", "Laravel", "PostgreSQL", "Docker", "Tailwind CSS", "TanStack Query"],
        liveUrl: "https://taskflow-demo.vercel.app",
        showLiveUrl: true,
        repoUrl: [
            { label: "Frontend", url: "https://github.com/Ryandra-TI01/taskflow-frontend" },
            { label: "Backend", url: "https://github.com/Ryandra-TI01/taskflow-backend" }
        ],
        image: taskFlow,
        details: {
            problem: "Teams needed a way to manage tasks and workflows efficiently.",
            solution: "Developed TaskFlow with React frontend and Laravel backend.",
            features: [
                "Kanban board for task tracking",
                "User authentication and role management",
                "Real-time updates with WebSockets"
            ],
            challenges: "Handling synchronization between frontend and backend in Dockerized setup."
        }
    },
    {
        id: "4",
        title: "Bookstore – Online Bookstore Platform",
        description: "Web application for browsing, purchasing, and managing books.",
        techStack: ["Laravel", "MySQL", "Tailwind CSS"],
        liveUrl: "",
        showLiveUrl: false,
        repoUrl: "https://github.com/Ryandra-TI01/bookstore",
        image: bookStore,
        details: {
            problem: "Needed a simple online bookstore system for catalog and transactions.",
            solution: "Developed a Laravel-based bookstore with CRUD features.",
            features: [
                "Book catalog with search and filter",
                "Shopping cart and checkout system",
                "Admin panel for inventory management"
            ],
            challenges: "Implementing secure transaction flow and maintaining clean UI."
        }
    },

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