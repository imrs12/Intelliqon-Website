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
        <section id="philosophy" className="py-12 sm:py-16 lg:py-24 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-5 sm:gap-6 order-2 md:order-1">
                        <div className="inline-block">
                            <span className="text-[#6C2BD9] font-semibold text-sm uppercase tracking-wider bg-[#f3e8ff] px-4 py-2 rounded-full">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] text-balance">
                            Innovative Technology, Real Business Results
                        </h2>

                        <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                            Intelliqon is a premier technology consulting firm based in India, dedicated to
                            empowering businesses through cutting-edge AI, ML, and automation solutions. We
                            transform complex challenges into streamlined, innovative outcomes.
                        </p>

                        <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                            Our team of expert consultants brings deep industry knowledge and technical
                            excellence to deliver solutions that drive measurable business growth.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f3e8ff] rounded-lg mb-3">
                                        <stat.icon className="h-6 w-6 text-[#6C2BD9]" />
                                    </div>
                                    <div className="font-bold text-xl sm:text-2xl text-[#111827]">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-[#4b5563]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uc3VsdGluZyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTk0NTk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Technology consulting team in a meeting"
                                className="w-full h-full object-cover"
                                width={600}
                                height={500}
                            />
                        </div>

                        {/* Decorative Elements - hidden on small screens */}
                        <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-[#6C2BD9] rounded-2xl opacity-20 -z-10" aria-hidden="true" />
                        <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-[#c084fc] rounded-2xl opacity-20 -z-10" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}
