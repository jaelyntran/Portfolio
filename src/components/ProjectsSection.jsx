import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Simple Calculator",
        description: "",
        image: "/projects/SimpleCalculator.png",
        tags: "",
        demoUrl: "#",
        githubUrl: "https://github.com/jaelyntran/Simple-Calculator",
    },
    {
        id: 2,
        title: "QuickRecap Discord Bot",
        description: "",
        image: "/projects/QuickRecapDiscordBot.png",
        tags: "",
        demoUrl: "#",
        githubUrl: "https://github.com/jaelyntran/QuickRecap-Discord-Bot",
    },
    {
        id: 3,
        title: "Sleep Tracker",
        description: "",
        image: "/projects/SleepTracker.png",
        tags: "",
        demoUrl: "#",
        githubUrl: "https://github.com/jaelyntran/Sleep-Tracker",
    },
    {
        id: 4,
        title: "Spotify Browser",
        description: "",
        image: "/projects/SpotifyBrowser.jpg",
        tags: "",
        demoUrl: "#",
        githubUrl: "https://github.com/jaelyntran/Spotify-Browser",
    },
    {
        id: 5,
        title: "Movie Database Web App",
        description: "",
        image: "/projects/MovieDatabaseWebApp.png",
        tags: "",
        demoUrl: "https://www.youtube.com/watch?v=TTQ6ZGY0fJc",
        githubUrl: "#",
    },
    {
        id: 6,
        title: "Search Engine",
        description: "",
        image: "/projects/SearchEngine.jpg",
        tags: "",
        demoUrl: "#",
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
                {projects.map((project, key) => (
                    <div key={key}
                         className={cn("group bg-card rounded-lg shadow-xs overflow-hidden card-hover")}>
                             <div className="h-48 overflow-hidden">
                                 <img src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                             </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}