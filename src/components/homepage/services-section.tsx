"use client";

import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Brain,
    LineChart,
    MessageSquare,
    Shield,
    Database,
    Workflow,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "AI & ML Solutions",
        description:
            "Harness the power of artificial intelligence and machine learning to automate and optimize your business processes.",
    },
    {
        icon: LineChart,
        title: "Business Analysis",
        description:
            "Data-driven insights and strategic recommendations to help you make informed business decisions.",
    },
    {
        icon: MessageSquare,
        title: "Chatbot Development",
        description:
            "Intelligent conversational AI solutions that enhance customer engagement and support.",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description:
            "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    },
    {
        icon: Database,
        title: "Data Analytics",
        description:
            "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    },
    {
        icon: Workflow,
        title: "Robotic Process Automation",
        description:
            "Streamline repetitive tasks and improve efficiency with intelligent automation solutions.",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-12 sm:py-14 lg:py-20 bg-[#f9fafb] dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] dark:text-[#f1f5f9] mb-4 text-balance">
                        What We Offer
                    </h2>
                    <p className="text-base sm:text-lg text-[#4b5563] dark:text-[#94a3b8]">
                        Comprehensive technology solutions tailored to drive your business forward
                    </p>
                </div>

                {/* Services Carousel */}
                <div className="relative">

                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {services.map((service) => (
                                <CarouselItem
                                    key={service.title}
                                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <Card className="p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#1e293b] border-[#e5e7eb] dark:border-[#334155] group cursor-pointer flex flex-col h-full">
                                        <div className="mb-4 sm:mb-6">
                                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#f3e8ff] dark:bg-[#6C2BD9]/20 rounded-xl group-hover:bg-[#6C2BD9] transition-colors duration-300">
                                                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#6C2BD9] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#f1f5f9] mb-2 sm:mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#94a3b8] mb-4 leading-relaxed flex-grow">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="inline-flex items-center text-[#6C2BD9] font-semibold text-sm sm:text-base group-hover:gap-2 transition-all duration-300 mt-auto"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-12 h-10 w-10" />
                        <CarouselNext className="hidden sm:flex -right-12 h-10 w-10" />
                    </Carousel>
                </div>
                {/* Mobile swipe hint */}
                <p className="sm:hidden text-center text-xs text-[#9ca3af] dark:text-[#64748b] mt-4 flex items-center justify-center gap-1">
                    <span>👆</span> Swipe for more
                </p>
            </div>
        </section>
    );
}
