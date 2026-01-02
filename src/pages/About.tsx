import { motion } from "framer-motion";
import andraAquarium from "../assets/andraAquarium.webp";

const skills = [
    { category: "Frontend", items: ["React", "TypeScript","Livewire", "Tailwind CSS","Bootstrap", "Framer Motion", "Shadcn UI", "HTML5/CSS3"] },
    { category: "Backend", items: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Python", "REST APIs"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "Vercel", "Docker", "Composer", "npm/yarn"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Agile/Scrum"] }
];

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8">About Me</h1>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            Hello! I'm Ryan, a passionate Software Engineer focused on web development.
                            My journey began with a curiosity for how things work on the internet, which quickly translated into a deep love for coding.
                        </p>
                        <p>
                            I specialize in the <strong>Laravel + React</strong> stack, combining the robustness of PHP's most popular framework with the interactivity of modern React.
                        </p>
                        <p>
                            My goal is to build applications that not only solve real-world problems but also provide an intuitive and enjoyable user experience. I'm constantly learning and keeping up with the latest trends in web development.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-secondary overflow-hidden shadow-xl border border-border">
                            {/* Placeholder for profile image */}
                            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                                <img src={andraAquarium} alt="andraAquarium" className="w-full h-full object-cover" />
                            </div>
                        </div>                       
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-card border border-border"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
