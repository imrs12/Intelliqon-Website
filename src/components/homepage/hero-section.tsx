import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#6C2BD9] pt-16"
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
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
                    {/* Badge */}
                    <Badge className="bg-[#ffffff]/10 text-[#ffffff] border-[#ffffff]/20 hover:bg-[#ffffff]/20 px-4 py-2">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Welcome to Intelliqon
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#ffffff] text-balance">
                        {"Empowering Growth through "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#f9a8d4]">
                            Expert Consulting
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base sm:text-lg md:text-xl text-[#d1d5db] max-w-3xl text-pretty">
                        Unlock your potential with AI, ML, Cybersecurity, and intelligent
                        automation solutions tailored for your business
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="bg-[#6C2BD9] hover:bg-[#5a24b8] text-[#ffffff] px-8 w-full sm:w-auto"
                            asChild
                        >
                            <a href="#services">
                                Explore Solutions
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#6C2BD9] px-8 w-full sm:w-auto"
                            asChild
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="pt-8 sm:pt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto w-full">
                        <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#ffffff]/10 rounded-lg p-4 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#ffffff]">40+</div>
                            <div className="text-xs sm:text-sm text-[#d1d5db] mt-1">Projects</div>
                        </div>
                        <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#ffffff]/10 rounded-lg p-4 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#ffffff]">6+</div>
                            <div className="text-xs sm:text-sm text-[#d1d5db] mt-1">Services</div>
                        </div>
                        <div className="bg-[#ffffff]/5 backdrop-blur-sm border border-[#ffffff]/10 rounded-lg p-4 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#ffffff]">100%</div>
                            <div className="text-xs sm:text-sm text-[#d1d5db] mt-1">Client Focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
