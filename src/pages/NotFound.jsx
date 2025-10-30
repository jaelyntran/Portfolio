import { Frown, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return <div className="bg-stone-500 text-stone-900 relative min-h-screen flex flex-col items-center justify-center px-10 gap-2">
                <Frown className="h-28 w-28 md:h-40 md:w-40 mb-5 opacity-0 animate-fade-in"/>
                <span className="text-4xl md:text-6xl font-bold text-center opacity-0 animate-fade-in-delay-1">404</span>
                <span className="text-base md:text-lg font-semibold text-center mb-5 opacity-0 animate-fade-in-delay-2">Page Not Found</span>
                <Link to="/"
                      className="cosmic-button flex flex-wrap justify-center items-center opacity-0 animate-fade-in-delay-4 gap-3">
                          <MoveLeft /> Go to Home Page
                </Link>
           </div>;
};