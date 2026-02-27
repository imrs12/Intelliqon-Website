"use client";

import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        position: "CTO, TechVentures India",
        content:
            "Intelliqon transformed our legacy systems into a modern, AI-powered platform. Their expertise in ML and automation is unmatched.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        position: "CEO, FinanceFlow Solutions",
        content:
            "The financial automation product has saved us countless hours. The ROI was evident within the first quarter of implementation.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        position: "Director of Operations, SecureNet",
        content:
            "Their cybersecurity solutions gave us peace of mind. Professional, thorough, and highly responsive team.",
        rating: 5,
    },
    {
        name: "Sunita Rao",
        position: "VP Engineering, DataBridge Corp",
        content:
            "Switching to Intelliqon's cloud infrastructure cut our operational costs by 40%. Their team was with us every step of the way.",
        rating: 4,
    },
    {
        name: "Vikram Mehta",
        position: "Founder, GrowthStack",
        content:
            "The ERP integration they built for us was seamless. What usually takes months was delivered in weeks with exceptional quality.",
        rating: 4,
    },
    {
        name: "Ananya Iyer",
        position: "Head of Product, RetailEdge",
        content:
            "Their AI-driven analytics dashboard has completely changed how we make decisions. Highly recommend for any data-heavy business.",
        rating: 5,
    },
    {
        name: "Karan Malhotra",
        position: "COO, LogiTrack Systems",
        content:
            "Intelliqon's logistics automation solution reduced our delivery errors by 60%. An incredible team with real domain expertise.",
        rating: 4,
    },
    {
        name: "Deepika Nair",
        position: "CIO, HealthBridge India",
        content:
            "They delivered a HIPAA-compliant patient management system ahead of schedule. The attention to security detail was outstanding.",
        rating: 5,
    },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="mx-2 sm:mx-3 w-[240px] sm:w-[280px] lg:w-[320px] flex-shrink-0 rounded-xl sm:rounded-2xl border border-border bg-white dark:bg-card p-4 sm:p-5 lg:p-6 shadow-sm relative flex flex-col gap-2 sm:gap-3">
            <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 h-5 w-5 sm:h-6 sm:w-6 opacity-25" style={{ color: "#7FAFD1" }} aria-hidden="true" />
            <div className="flex gap-0.5 sm:gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed italic flex-grow">
                {`"${testimonial.content}"`}
            </p>
            <div className="pt-2 sm:pt-3 border-t border-gray-100 dark:border-slate-700 mt-auto">
                <div className="font-bold text-gray-900 dark:text-slate-100 text-xs sm:text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-500 dark:text-slate-500">{testimonial.position}</div>
            </div>
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-10 sm:py-14 lg:py-20 bg-secondary/30 dark:bg-background overflow-hidden">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto px-4 mb-8 sm:mb-10 lg:mb-14">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 text-balance">
                    Trusted by Businesses
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-400">
                    See what our clients say about working with us
                </p>
            </div>

            <Marquee speed={35} pauseOnHover gradient={false}>
                {testimonials.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                ))}
            </Marquee>
        </section>
    );
}
