import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-svh flex items-center bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-violet-600 pt-14 sm:pt-16"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==")`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Badge */}
                    <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                        Welcome to Intelliqon
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                        {"Empowering Growth through "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                            Expert Consulting
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl text-pretty px-2 sm:px-0">
                        Unlock your potential with AI, ML, Cybersecurity, and intelligent
                        automation solutions tailored for your business
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center pt-1 sm:pt-2 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="bg-violet-600 hover:bg-violet-700 text-white px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                            asChild
                        >
                            <a href="#services">
                                Explore Solutions
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-violet-600 px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                            asChild
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="pt-6 sm:pt-8 lg:pt-12 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">40+</div>
                            <div className="text-xs sm:text-sm text-gray-300 mt-1">Projects</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">6+</div>
                            <div className="text-xs sm:text-sm text-gray-300 mt-1">Services</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 lg:p-6 text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</div>
                            <div className="text-xs sm:text-sm text-gray-300 mt-1">Client Focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
