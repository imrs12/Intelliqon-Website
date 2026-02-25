import { Card } from "@/components/ui/card";
import { CheckCircle, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "End-to-End Solutions",
        description:
            "From strategy to implementation, we handle every aspect of your digital transformation journey with comprehensive solutions.",
    },
    {
        icon: Users,
        title: "Collaborative Approach",
        description:
            "We work closely with your team to understand your unique challenges and co-create solutions that fit perfectly.",
    },
    {
        icon: HeadphonesIcon,
        title: "Ongoing Support & Training",
        description:
            "Our commitment doesn't end at deployment. We provide continuous support and training to ensure long-term success.",
    },
    {
        icon: TrendingUp,
        title: "Data-Driven Decisions",
        description:
            "Every recommendation is backed by thorough analysis and industry best practices to maximize ROI.",
    },
];

export function WhyChooseUsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
                        Discover the Difference We Deliver
                    </h2>
                    <p className="text-base sm:text-lg text-[#4b5563]">
                        Partner with a team committed to your success
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="p-6 sm:p-8 border-[#e5e7eb] hover:border-[#6C2BD9] transition-all duration-300 bg-[#ffffff]"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#f3e8ff] rounded-lg">
                                        <feature.icon className="h-6 w-6 text-[#6C2BD9]" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
