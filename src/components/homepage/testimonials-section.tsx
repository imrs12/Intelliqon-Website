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
        <div className="mx-3 w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl border border-[#e5e7eb] dark:border-[#334155] bg-white dark:bg-[#1e293b] p-6 shadow-sm relative flex flex-col gap-3">
            <Quote className="absolute top-4 right-4 h-6 w-6 text-[#e9d5ff] dark:text-[#6C2BD9]/30" aria-hidden="true" />
            <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#facc15] text-[#facc15]" />
                ))}
            </div>
            <p className="text-sm text-[#374151] dark:text-[#cbd5e1] leading-relaxed italic flex-grow">
                {`"${testimonial.content}"`}
            </p>
            <div className="pt-3 border-t border-[#f3f4f6] dark:border-[#334155] mt-auto">
                <div className="font-bold text-[#111827] dark:text-[#f1f5f9] text-sm">{testimonial.name}</div>
                <div className="text-xs text-[#6b7280] dark:text-[#64748b]">{testimonial.position}</div>
            </div>
        </div>
    );
}



export function TestimonialsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-[#f9fafb] dark:bg-[#0f172a] overflow-hidden">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto px-4 mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] dark:text-[#f1f5f9] mb-4 text-balance">
                    Trusted by Businesses
                </h2>
                <p className="text-base sm:text-lg text-[#4b5563] dark:text-[#94a3b8]">
                    See what our clients say about working with us
                </p>
            </div>

            <Marquee speed={40} pauseOnHover gradient={false}>
                {testimonials.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                ))}
            </Marquee>
        </section>
    );
}
