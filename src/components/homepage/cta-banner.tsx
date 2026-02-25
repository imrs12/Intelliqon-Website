import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-violet-900 to-violet-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 px-2 sm:px-0">
                        {"Let\u2019s build something powerful together"}
                    </p>

                    <div className="pt-1 sm:pt-2 lg:pt-4">
                        <Button
                            size="lg"
                            className="bg-white text-violet-600 hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-5 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
