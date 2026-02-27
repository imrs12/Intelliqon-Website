import { BarChart3, Users, Target, MapPin } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const stats = [
    { icon: BarChart3, label: "40+ Projects", value: "40+" },
    { icon: Target, label: "6+ Services", value: "6+" },
    { icon: Users, label: "100% Client Focus", value: "100%" },
    { icon: MapPin, label: "India Based", value: "IN" },
];

export function AboutSection() {
    return (
        <section id="philosophy" className="py-10 sm:py-14 lg:py-20 bg-white dark:bg-background">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 order-2 md:order-1">
                        <div className="inline-block">
                            <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[#3D5A7B] dark:text-[#7FAFD1] bg-[#A8D1E8]/30 dark:bg-[#7FAFD1]/15">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 text-balance">
                            Innovative Technology, Real Business Results
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                            Intelliqon is a premier technology consulting firm based in India, dedicated to
                            empowering businesses through cutting-edge AI, ML, and automation solutions. We
                            transform complex challenges into streamlined, innovative outcomes.
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                            Our team of expert consultants brings deep industry knowledge and technical
                            excellence to deliver solutions that drive measurable business growth.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 lg:pt-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-2 sm:mb-3 bg-[#BDDDFC]/40 dark:bg-[#88BDF2]/20">
                                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#3D5A7B] dark:text-[#7FAFD1]" />
                                    </div>
                                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-slate-100">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-1 md:order-2">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uc3VsdGluZyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTk0NTk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Technology consulting team in a meeting"
                                className="w-full h-full object-cover"
                                width={600}
                                height={500}
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="hidden sm:block absolute -top-4 lg:-top-6 -right-4 lg:-right-6 w-16 lg:w-24 h-16 lg:h-24 rounded-2xl opacity-25 -z-10" style={{ background: "#7FAFD1" }} aria-hidden="true" />
                        <div className="hidden sm:block absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 w-24 lg:w-32 h-24 lg:h-32 rounded-2xl opacity-20 -z-10" style={{ background: "#3D5A7B" }} aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}
