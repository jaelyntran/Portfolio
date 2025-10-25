import { cn } from "@/lib/utils";
import * as Progress from "@radix-ui/react-progress";
import { useState, useEffect } from "react";

const skills = [
    {name: "HTML/CSS", level: 75, category: "frontend"},
    {name: "JavaScript", level: 75, category: "frontend"},
    {name: "C++", level: 60, category: "frontend"},
    {name: "Java", level: 55, category: "frontend"},
    {name: "Python", level: 75, category: "frontend"},
    {name: "React", level: 60, category: "frontend"},
    {name: "Angular", level: 60, category: "frontend"},
    {name: "Ionic", level: 60, category: "frontend"},
    {name: "Tailwind CSS", level: 55, category: "frontend"},

    {name: "Node.js/Express", level: 60, category: "backend"},
    {name: "PostgreSQL", level: 75, category: "backend"},
    {name: "MySQL", level: 75, category: "backend"},

    {name: "Git/GitHub", level: 90, category: "tools"},
    {name: "Docker", level: 60, category: "tools"},
    {name: "AWS", level: 55, category: "tools"},
    {name: "Figma", level: 80, category: "tools"},
    {name: "IntelliJ", level: 90, category: "tools"},
    {name: "PyCharm", level: 90, category: "tools"},
]

export const SkillsSection = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => setProgress(1), 500);
        return () => clearTimeout(timer);
    }, []);

    return <section id="skills"
                    className="py-24 px-4 relative bg-secondary/30">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            My <span className="text-primary"> Skills</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill, key) => (
                                <div key={key}
                                     className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                    <div className="text-left mb-4">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>

                                    <Progress.Root className="w-full bg-secondary h-2 rounded-full overflow-hidden" value={skill.level}>
                                        <Progress.Indicator className ="bg-primary/85 h-2 rounded-full animate-[grow_1.5s_ease-out]"
                                                            style={{transform: `translateX(-${100 - skill.level * progress}%)`}}
                                        />
                                    </Progress.Root>

                                    <div className="text-right mt-1">
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
           </section>;
}
