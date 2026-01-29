import { cn } from "@/lib/utils";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CakeDay Discord Bot",
        description: "A Discord bot that tracks and celebrates birthdays in your server.",
        image: "/projects/CakeDayDiscordBot.png",
        tags: ["JavaScript", "MongoDB", "discord.js"],
        demoUrl: "",
        githubUrl: "https://github.com/jaelyntran/CakeDay-DiscordBot/",
    },
    {
        id: 2,
        title: "Simple Calculator",
        description: "A lightweight desktop calculator featuring accurate arithmetic and percentage operations.",
        image: "/projects/SimpleCalculator.png",
        tags: ["Python", "Tkinter"],
        demoUrl: "",
        githubUrl: "https://github.com/jaelyntran/Simple-Calculator",
    },
    {
        id: 3,
        title: "QuickRecap Discord Bot",
        description: "A Discord bot that summarizes recent chats and automates periodic summaries",
        image: "/projects/QuickRecapDiscordBot.png",
        tags: ["JavaScript", "Node.js", "discord.js"],
        demoUrl: "",
        githubUrl: "https://github.com/jaelyntran/QuickRecap-Discord-Bot",
    },
    {
        id: 4,
        title: "Sleep Tracker",
        description: "A cross-platform mobile app that helps users record and track their sleep patterns.",
        image: "/projects/SleepTracker.png",
        tags: ["TypeScript", "Ionic", "Angular"],
        demoUrl: "",
        githubUrl: "https://github.com/jaelyntran/Sleep-Tracker",
    },
    {
        id: 5,
        title: "Spotify Browser",
        description: "A Spotify browser that allows users to search, browse, and view Spotify by artists, albums, and tracks.",
        image: "/projects/SpotifyBrowser.png",
        tags: ["TypeScript", "Angular", "Node.js"],
        demoUrl: "",
        githubUrl: "https://github.com/jaelyntran/Spotify-Browser",
    },
    {
        id: 6,
        title: "Movie Database Web App",
        description: "A full-stack movie website with secure login, autocomplete search, and a session-based shopping cart system.",
        image: "/projects/MovieDatabaseWebApp.png",
        tags: ["Java", "MySQL", "AWS EC2"],
        demoUrl: "https://www.youtube.com/watch?v=TTQ6ZGY0fJc",
        githubUrl: "",
    },
    {
        id: 7,
        title: "Search Engine",
        description: "A search engine implementing an inverted index and TF-IDF ranking algorithm for efficient text retrieval.",
        image: "/projects/SearchEngine.png",
        tags: ["Python", "Beautiful Soup"],
        demoUrl: "",
        githubUrl: "https://github.com/a-gaede/cs121-assignment3",
    }
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-primary ">Projects</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id}
                         className={cn("group bg-card rounded-lg shadow-xs overflow-hidden card-hover")}>
                             <div className="h-48 overflow-hidden">
                                 <img src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                             </div>

                             <div className="p-6">
                                 <div className="flex flex-wrap gap-2 mb-4">
                                     {project.tags.map((tag, i) => (
                                         <span key={`${project.id}-${tag}-${i}`}
                                               className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                                             {tag}
                                         </span>))}
                                 </div>

                                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                 <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                 <div className="flex justify-between items-center">
                                     <div className="flex space-x-3">
                                         {project.githubUrl
                                            ? <a href={project.githubUrl}
                                                 target="_blank"
                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                     <Github size={20}/>
                                              </a>
                                            : <a href={project.demoUrl}
                                                 target="_blank"
                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                     <ExternalLink size={20}/>
                                              </a>}
                                     </div>
                                 </div>
                             </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/jaelyntran"
                   target="_blank"
                   className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    View My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}