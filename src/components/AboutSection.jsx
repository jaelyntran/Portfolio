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
                                Tech Enthusiast & Web Creator
                            </h3>
                            <p className="text-muted-foreground">
                                Born and raised in Ho Chi Minh City, Vietnam, I now call Los Angeles home.
                                After earning my associate degree in Computer Science from Orange Coast College,
                                I transferred to University of California, Irvine, where I completed my
                                bachelor degree in the same field.
                            </p>
                            <p className="text-muted-foreground">
                                My academic journey has been one of exploration and self-discovery. I’ve found
                                my passion in web design and databases, an perfect blend of creativity and
                                problem solving that drives me to build responsive, engaging full stack products.
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