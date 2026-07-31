import { cn } from "@/lib/utils";
import { Users, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary"> Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Technology, Analytics & Digital Experiences
                            </h3>
                            <p className="text-muted-foreground">
                                Born and raised in Ho Chi Minh City, Vietnam, I now call Los Angeles home.
                                I earned my Bachelor of Science in Computer Science from the University of California,
                                Irvine, where I built a strong foundation in software development, databases,
                                algorithms, and computer systems.
                            </p>
                            <p className="text-muted-foreground">
                                Throughout my academic and professional experiences, I've enjoyed exploring the
                                intersection of technology, analytics, and digital experiences. Whether it's developing
                                application, analyzing data, or supporting digital marketing initiatives, I enjoy
                                solving problems and creating practical solutions that improve processes and user experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">Get In Touch</a>
                                <a href="/projects/JaelynTranResume-103025.pdf"
                                   target="_blank"
                                   className="cosmic-button">Download Resume</a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">ThreadBeast Social Media Coordinator</h4>
                                        <p className="text-muted-foreground">
                                            Managed community engagement, monitored customer feedback, and built
                                            promotional landing pages in Webflow to support marketing campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Personable Software Engineer Intern</h4>
                                        <p className="text-muted-foreground">
                                            Trained an AI scanner to read and convert bank statements, checks, payrolls,
                                            and other transactional records into Excel, allowing data entry automation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">NASA Community College Aerospace Scholars</h4>
                                        <p className="text-muted-foreground">
                                            Collaborated with NASA engineers and educators on hands-on workshops to explore
                                            future space missions, including designing rovers to navigate terrain and collect samples.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
}