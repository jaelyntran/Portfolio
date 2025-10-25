import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";

export const Home = () => {
    return  (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}


            {/* Nav Bar */}
            <NavBar />

            {/* Main Content */}
            <main>
                <HomeSection />
            </main>


            {/* Footer */}


        </div>
    );
};