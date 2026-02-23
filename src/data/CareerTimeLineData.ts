import PNM from "../assets/company/PNM.webp";
import jarvis from "../assets/company/jarvis.webp";
import NFAcademy from "../assets/company/NFAcademy.webp";
import pocaGroupIndonesia from "../assets/company/pocaGroupIndonesia.webp";
import adiraFinance from "../assets/company/adiraFinance.webp";

export type CompanyIdentity = {
    label: string;
    gradientClass: string;
    logoSrc?: string;
};

export type CareerTimelineItem = {
    id: number;
    company: string;
    role: string;
    type: string;
    period: string;
    description: string[];
    companyIdentity: CompanyIdentity;
};

const timelineData: CareerTimelineItem[] = [
    {
        id: 1,
        company: "PT Poca Jaringan Solusi",
        role: "Document Control",
        type: "Internship",
        period: "Oct 2022 - Mar 2023",
        companyIdentity: {
            label: "PJS",
            gradientClass: "from-amber-500 to-orange-500",
            logoSrc: pocaGroupIndonesia,
        },
        description: [
            "Managed and organized company documents ensuring they were structured and easily accessible.",
            "Conducted quality control (QC) checks on RRU and antenna installations in the field.",
            "Ensured installation processes complied with technical standards and company procedures."
        ]
    },
    {
        id: 2,
        company: "PT. Jarvis Integrasi Solusi",
        role: "Jarvis Bootcamp Batch 5",
        type: "Bootcamp",
        period: "May 2024 - July 2024",
        companyIdentity: {
            label: "JIS",
            gradientClass: "from-indigo-500 to-blue-500",
            logoSrc: jarvis,
        },
        description: [
            "Learned the basics of backend web development using Laravel (routing, controllers, models).",
            "Integrated applications with Midtrans for payment gateway processing.",
            "Developed soft skills such as teamwork, communication, and project planning."
        ]
    }, 
    {
        id: 3,
        company: "PT Jarvis Integrasi Solusi",
        role: "Fullstack & Mobile App",
        type: "Internship",
        period: "Mar 2025 - May 2025",
        companyIdentity: {
            label: "JIS",
            gradientClass: "from-indigo-500 to-blue-500",
            logoSrc: jarvis,
        },
        description: [
            "Maintained and extended Laravel-based web applications by fixing bugs and adding new features.",
            "Contributed to the early development of a mobile attendance application using Expo (React Native).",
            "Worked closely with the team to manage tasks, timelines, and project communication."
        ]
    },
    {
        id: 4,
        company: "Permodalan Nasional Madani",
        role: "Data Center Operations",
        type: "Internship",
        period: "Aug 2025 - Jan 2026",
        companyIdentity: {
            label: "PNM",
            gradientClass: "from-emerald-500 to-green-500",
            logoSrc: PNM,
        },
        description: [
            "Assisted in data center operational monitoring and technical documentation.",
            "Observed server, network, and infrastructure management practices in enterprise environments.",
            "Gained exposure to IT operational workflows and standards."
        ]
    },
    {
        id: 5,
        company: "NF Academy",
        role: "Fullstack Web Developer",
        type: "Independent Study",
        period: "Sep 2025 - Dec 2025",
        companyIdentity: {
            label: "NFA",
            gradientClass: "from-blue-500 to-cyan-500",
            logoSrc: NFAcademy,
        },
        description: [
            "Developed fullstack web applications using Laravel and React in a project-based environment.",
            "Implemented RESTful APIs, authentication, CRUD operations, and database-driven features.",
            "Designed and managed relational databases using MySQL/PostgreSQL."
        ]
    },
    {
        id: 6,
        company: "Adira Finance",
        role: "Information Technology Developer",
        type: "Internship",
        period: "Jan 2026 - June 2026",
        companyIdentity: {
            label: "AF",
            gradientClass: "from-rose-500 to-pink-500",
            logoSrc: adiraFinance,
        },
        description: [
            "Supported the development and maintenance of internal IT systems.",
            "Collaborated with team members to troubleshoot and resolve technical issues.",
            "Gained experience in software development lifecycle and IT best practices."
        ]
    }
];
export default timelineData;
