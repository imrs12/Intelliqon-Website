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
        <section id="services" className="py-10 sm:py-14 lg:py-20 bg-secondary/30 dark:bg-background">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 text-balance">
                        What We Offer
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-400">
                        Comprehensive technology solutions tailored to drive your business forward
                    </p>
                </div>

                {/* Services Carousel */}
                <div className="relative px-0 sm:px-8 lg:px-10">
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-3 sm:-ml-4">
                            {services.map((service) => (
                                <CarouselItem
                                    key={service.title}
                                    className="pl-3 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                                >
                                    <Card className="p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-card border-border group cursor-pointer flex flex-col h-full">
                                        <div className="mb-3 sm:mb-4 lg:mb-6">
                                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl transition-colors duration-300 bg-[#A8D1E8]/40 dark:bg-[#7FAFD1]/20">
                                                <service.icon
                                                    className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#6A89A7] dark:text-[#88BDF2]"
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2 sm:mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed flex-grow">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="inline-flex items-center font-semibold text-sm lg:text-base transition-all duration-300 mt-auto"
                                            style={{ color: "#6A89A7" }}
                                        >
                                            Learn More
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-10 lg:-left-12 h-9 w-9 lg:h-10 lg:w-10" />
                        <CarouselNext className="hidden sm:flex -right-10 lg:-right-12 h-9 w-9 lg:h-10 lg:w-10" />
                    </Carousel>
                </div>

                {/* Mobile swipe hint */}
                <p className="sm:hidden text-center text-xs text-gray-400 dark:text-slate-500 mt-4 flex items-center justify-center gap-1">
                    <span>👆</span> Swipe for more
                </p>
            </div>
        </section>
    );
}
