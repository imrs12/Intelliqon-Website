import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#6C2BD9] to-[#8B44E5] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] text-balance">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-[#e9d5ff]">
                        {"Let\u2019s build something powerful together"}
                    </p>

                    <div className="pt-2 sm:pt-4">
                        <Button
                            size="lg"
                            className="bg-[#ffffff] text-[#6C2BD9] hover:bg-[#f3f4f6] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            asChild
                        >
                            <a href="#contact">
                                Get In Touch
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
