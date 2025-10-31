import { cn } from "@/lib/utils";
import { Mail, Linkedin, Send } from "lucide-react";

export const ContactSection = () => {

    return <section id="contact" className="py-24 px-4 relative">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Get In <span className="text-primary"> Touch</span>
                        </h2>

                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Say hi! I’d love to hear from you. Whether you have a project in mind, a question, or just
                            want to chat, feel free to reach out.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-5">
                                <h3 className="text-2xl font-semibold mb-6">
                                    Contact Information
                                </h3>

                                <div>
                                    <div className="cosmic-button w-50 gap-2">
                                        <a href="mailto:jaelyntran2002@gmail.com"
                                           className="flex gap-4 justify-center font-semibold hover:text-primary transition-colors">
                                                <Mail /> Email
                                        </a>
                                    </div>
                                </div>
                                 <div>
                                    <div className="cosmic-button w-50 gap-2">
                                        <a href="https://www.linkedin.com/in/jaelyntran2002/" target="_blank"
                                           className="flex font-semibold gap-4 justify-center hover:text-primary transition-colors">
                                            <Linkedin /> LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>

                             <div className="bg-card p-8 rounded-lg shadow-xs">
                                 <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                                     <form className="space-y-6">
                                         <div>
                                             <label htmlFor="name"
                                                    className="block text-sm font-medium mb-2">Your Name</label>
                                             <input type="text"
                                                    id="name"
                                                    name="name"
                                                    required={true}
                                                    className={cn("w-full px-4 py-3 rounded-md border border-input bg-background",
                                                                  "focus:outline-hidden")}
                                                    placeholder="First and Last Name"/>
                                         </div>

                                         <div>
                                             <label htmlFor="email"
                                                    className="block text-sm font-medium mb-2">Your Email</label>
                                             <input type="email"
                                                    id="email"
                                                    name="email"
                                                    required={true}
                                                    className={cn("w-full px-4 py-3 rounded-md border border-input bg-background",
                                                                  "focus:outline-hidden")}
                                                    placeholder="example@gmail.com"/>
                                         </div>

                                         <div>
                                             <label htmlFor="message"
                                                    className="block text-sm font-medium mb-2">Your Message</label>
                                             <textarea
                                                    id="message"
                                                    name="message"
                                                    required={true}
                                                    className={cn("w-full px-4 py-3 rounded-md border border-input bg-background resize-none",
                                                                  "focus:outline-hidden")}
                                                    placeholder="Hello, I'd like to talk about..."/>
                                         </div>

                                         <button type="submit"
                                                 className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                                                               )}>
                                            Send Message <Send size={16} />
                                         </button>
                                     </form>
                             </div>
                        </div>
                    </div>
           </section>
}