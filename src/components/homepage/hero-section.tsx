import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-svh flex items-center pt-16 sm:pt-16"
            style={{ background: "linear-gradient(135deg, #384959 0%, #6A89A7 60%, #88BDF2 100%)" }}
        >
            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-20 lg:py-28">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <Badge className="bg-white/15 text-white border-white/25 hover:bg-white/25 px-4 py-2 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                        Welcome to Intelliqon
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white text-balance mb-5 sm:mb-6">
                        {"Empowering Growth through "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #BDDDFC, #ffffff)" }}
                        >
                            Expert Consulting
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-2xl lg:max-w-3xl leading-relaxed mb-8 sm:mb-10"
                        style={{ color: "rgba(189,221,252,0.85)" }}
                    >
                        Unlock your potential with AI, ML, Cybersecurity, and intelligent
                        automation solutions tailored for your business
                    </p>

                    {/* Buttons — stacked on mobile, row on sm+ */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none mb-10 sm:mb-14">
                        <Button
                            size="lg"
                            className="text-white rounded-full sm:rounded-xl px-8 text-sm sm:text-base shadow-md transition-all duration-200 hover:opacity-90"
                            style={{ background: "#6A89A7" }}
                            asChild
                        >
                            <a href="#services">
                                Explore Solutions
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-white/15 border border-white/40 text-white hover:bg-white/25 rounded-full sm:rounded-xl px-8 text-sm sm:text-base shadow-md transition-all duration-200"
                            asChild
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
                        {[
                            { value: "40+", label: "Projects" },
                            { value: "6+", label: "Services" },
                            { value: "100%", label: "Client Focus" },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 sm:p-4 lg:p-6 text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs sm:text-sm mt-1" style={{ color: "rgba(189,221,252,0.75)" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
