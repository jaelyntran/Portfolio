import { Frown } from "lucide-react";

export const NotFound = () => {
    return <div className="relative min-h-screen flex flex-col items-center justify-center px-10">
                <Frown className="h-40 w-40 text-muted-foreground mb-5 opacity-0 animate-fade-in"/>
                <span className="text-4xl md:text-6xl font-bold text-center opacity-0 animate-fade-in-delay-1">404</span>
                <span className="text-base md:text-lg font-semibold text-center opacity-0 animate-fade-in-delay-2">Page Not Found</span>
           </div>;
};