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
    company: string;
    role: string;
    type: string;
    period: string;
    description: string[];
    companyIdentity: CompanyIdentity;
};

const timelineData: CareerTimelineItem[] = [
  {
    company: "NF Academy",
    role: "AI for Business – Independent Study",
    type: "Internship",
    period: "Feb 2026 - Jun 2026",
    companyIdentity: {
      label: "NFA",
      gradientClass: "from-violet-500 to-fuchsia-500",
      logoSrc: NFAcademy,
    },
    description: [
      "Built AI-driven workflow automation solutions using n8n across multiple business domains.",
      "Developed an AI-powered CV Screening and Analysis system using LLMs and workflow automation for the BNSP competency assessment.",
      "Designed and developed the NFA Training & Certification Automation System, integrating APIs and automated workflows for the final project.",
      "Received Best Project recognition for delivering an outstanding automation solution with strong technical implementation and business value."
    ]
  },
  {
    company: "Adira Finance",
    role: "Information Technology Developer",
    type: "Internship",
    period: "Jan 2026 - Jun 2026",
    companyIdentity: {
      label: "AF",
      gradientClass: "from-rose-500 to-pink-500",
      logoSrc: adiraFinance,
    },
    description: [
      "Performed manual testing and maintenance (MTC) for an SAP-integrated internal eProcurement application, ensuring application quality and business process reliability.",
      "Investigated and validated application defects using SQL Server (DBeaver), Swagger API testing, and functional testing techniques.",
      "Collaborated with developers to reproduce, document, verify, and resolve defects while tracking issue lifecycles in Jira."
    ]
  },
  {
    company: "NF Academy",
    role: "Fullstack Web Developer – Independent Study",
    type: "Internship",
    period: "Sep 2025 - Dec 2025",
    companyIdentity: {
      label: "NFA",
      gradientClass: "from-blue-500 to-cyan-500",
      logoSrc: NFAcademy,
    },
    description: [
      "Developed the Bookstore web application using Laravel, implementing authentication, role-based access, and CRUD functionality for bookstore inventory management.",
      "Built the frontend of a Human Resource Information System (HRIS) using React, Vite, Tailwind CSS, and Shadcn UI, delivering responsive interfaces for employee management, attendance, leave, and performance modules.",
      "Integrated frontend components with RESTful APIs, implementing authentication, routing, state management, and data visualization."
    ]
  },
  {
    company: "PT Permodalan Nasional Madani (Persero)",
    role: "Data Center Operations Intern",
    type: "Internship",
    period: "Aug 2025 - Jan 2026",
    companyIdentity: {
      label: "PNM",
      gradientClass: "from-emerald-500 to-green-500",
      logoSrc: PNM,
    },
    description: [
      "Assisted in data center operational monitoring and documentation.",
      "Observed server, network, and infrastructure management practices.",
      "Gained exposure to enterprise IT operations and workflow standards."
    ]
  },
  {
    company: "PT Jarvis Integrasi Solusi",
    role: "Fullstack Web Developer",
    type: "Internship",
    period: "Mar 2025 - May 2025",
    companyIdentity: {
      label: "JIS",
      gradientClass: "from-indigo-500 to-blue-500",
      logoSrc: jarvis,
    },
    description: [
      "Maintained and enhanced Laravel-based web applications.",
      "Assisted in mobile application development using React Native (Expo).",
      "Participated in debugging, testing, and deployment of application features."
    ]
  },
  {
    company: "PT Jarvis Integrasi Solusi",
    role: "Jarvis Bootcamp Batch 5",
    type: "Internship",
    period: "May 2024 - Jul 2024",
    companyIdentity: {
      label: "JIS",
      gradientClass: "from-indigo-500 to-blue-500",
      logoSrc: jarvis,
    },
    description: [
      "Developed a hotel reservation system using Laravel, MySQL, and Midtrans payment integration.",
      "Implemented CRUD operations, authentication, and backend business logic.",
      "Collaborated using GitHub while strengthening teamwork and software development practices."
    ]
  },
  {
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
  }
];

export default timelineData;