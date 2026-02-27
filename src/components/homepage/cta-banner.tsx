import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
    return (
        <section
            className="py-12 sm:py-16 lg:py-24"
            style={{ background: "linear-gradient(135deg, #3D5A7B 0%, #1F3A4E 100%)" }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-0" style={{ color: "rgba(189,221,252,0.8)" }}>
                        {"Let\u2019s build something powerful together"}
                    </p>

                    <div className="pt-1 sm:pt-2 lg:pt-4">
                        <Button
                            size="lg"
                            className="bg-white font-semibold text-sm sm:text-base lg:text-lg px-5 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-100"
                            style={{ color: "#1F3A4E" }}
                            asChild
                        >
                            <a href="#contact">
                                Get In Touch
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
