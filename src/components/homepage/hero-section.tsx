import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-svh flex items-center pt-16 sm:pt-16"
            style={{ background: "linear-gradient(135deg, #1F3A4E 0%, #3D5A7B 40%, #5B7FA8 70%, #7FAFD1 100%)" }}
        >
            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-20 lg:py-28">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <BlurFade delay={0.1}>
                    <Badge className="bg-white/15 text-white border-white/25 hover:bg-white/25 px-4 py-2 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                        Welcome to Intelliqon
                    </Badge>
                    </BlurFade>

                    {/* Heading with depth glow */}
                    <BlurFade delay={0.2}>
                    <div className="relative mb-5 sm:mb-6">
                        {/* Radial glow background */}
                        <div
                            className="absolute -inset-8 sm:-inset-12 lg:-inset-16 rounded-full opacity-0 sm:opacity-20 blur-3xl"
                            style={{
                                background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
                            }}
                        />
                        <h1 className="relative text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white text-balance">
                            {"Empowering Growth through "}
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(90deg, #BDDDFC, #ffffff)" }}
                            >
                                Expert Consulting
                            </span>
                        </h1>
                    </div>
                    </BlurFade>

                    {/* Subtitle */}
                    <BlurFade delay={0.3}>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-2xl lg:max-w-3xl leading-relaxed mb-8 sm:mb-10 font-medium"
                        style={{ color: "rgba(189,221,252,0.95)" }}
                    >
                        Unlock your potential with AI, ML, Cybersecurity, and intelligent
                        automation solutions tailored for your business
                    </p>
                    </BlurFade>

                    {/* Buttons — stacked on mobile, row on sm+ */}
                    <BlurFade delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none mb-10 sm:mb-14">
                        <Button
                            size="lg"
                            className="text-white rounded-full sm:rounded-xl px-8 text-sm sm:text-base shadow-lg shadow-teal-500/30 transition-all duration-200 hover:shadow-teal-500/50 hover:opacity-95"
                            style={{ background: "#0891b2" }}
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
                    </BlurFade>

                    {/* Stats */}
                    <BlurFade delay={0.5}>
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
                        {[
                            { value: "40+", label: "Projects" },
                            { value: "6+", label: "Services" },
                            { value: "100%", label: "Client Focus" },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 sm:p-4 lg:p-6 text-center transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
                                style={{
                                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs sm:text-sm mt-1" style={{ color: "rgba(189,221,252,0.85)" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    </BlurFade>

                </div>
            </div>
        </section>
    );
}
