"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const services = [
    "AI & ML",
    "Business Analysis",
    "Chatbot Development",
    "Cybersecurity",
    "Data Analytics",
    "RPA",
];

const products = [
    "Financial Automation",
    "Police Solutions",
    "Other Solutions",
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
            <nav
                className={[
                    "w-full max-w-6xl rounded-2xl border px-4 sm:px-6 lg:px-8 transition-all duration-500",
                    scrolled
                        ? "bg-[#0f0524]/80 backdrop-blur-xl border-[#ffffff]/10 shadow-lg shadow-[#6C2BD9]/10"
                        : "bg-[#ffffff]/5 backdrop-blur-xl border-[#ffffff]/10",
                ].join(" ")}
            >
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo — right on mobile, left on desktop */}
                    <a href="#home" className="order-2 lg:order-1 text-xl sm:text-2xl font-bold text-[#ffffff] shrink-0 tracking-tight">
                        Intelliqon
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        <a
                            href="#home"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all duration-200"
                        >
                            Home
                        </a>

                        {/* Services Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Services <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 bg-[#1a0b2e]/95 backdrop-blur-xl border-[#ffffff]/10 rounded-xl shadow-xl shadow-[#000000]/20"
                            >
                                {services.map((service) => (
                                    <DropdownMenuItem
                                        key={service}
                                        asChild
                                        className="text-[#e2d5f3] hover:text-[#ffffff] focus:text-[#ffffff] hover:bg-[#ffffff]/10 focus:bg-[#ffffff]/10 cursor-pointer rounded-lg"
                                    >
                                        <a href="#services" className="w-full">{service}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Products Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Products <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 bg-[#1a0b2e]/95 backdrop-blur-xl border-[#ffffff]/10 rounded-xl shadow-xl shadow-[#000000]/20"
                            >
                                {products.map((product) => (
                                    <DropdownMenuItem
                                        key={product}
                                        asChild
                                        className="text-[#e2d5f3] hover:text-[#ffffff] focus:text-[#ffffff] hover:bg-[#ffffff]/10 focus:bg-[#ffffff]/10 cursor-pointer rounded-lg"
                                    >
                                        <a href="#products" className="w-full">{product}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <a
                            href="#philosophy"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all duration-200"
                        >
                            Our Philosophy
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Button
                            className="bg-[#6C2BD9] hover:bg-[#5a24b8] text-[#ffffff] rounded-xl shadow-lg shadow-[#6C2BD9]/30 hover:shadow-[#6C2BD9]/50 transition-all duration-300 text-sm px-5"
                            asChild
                        >
                            <a href="/sign-up">Sign Up</a>
                        </Button>
                    </div>

                    {/* Mobile menu — left on mobile, right on desktop */}
                    <div className="order-1 lg:order-3 lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#ffffff] hover:bg-[#ffffff]/10 transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[300px] sm:w-[340px] bg-[#0f0524]/95 backdrop-blur-2xl border-l border-[#ffffff]/10 p-0"
                            >
                                <div className="p-6">
                                    <SheetTitle className="text-xl font-bold text-[#ffffff] mb-8">
                                        Intelliqon
                                    </SheetTitle>

                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="#home"
                                            className="px-3 py-2.5 rounded-xl text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Home
                                        </a>

                                        {/* Services */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
                                                Services
                                            </p>
                                            {services.map((service) => (
                                                <a
                                                    key={service}
                                                    href="#services"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-[#c4b5d8] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {service}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Products */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
                                                Products
                                            </p>
                                            {products.map((product) => (
                                                <a
                                                    key={product}
                                                    href="#products"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-[#c4b5d8] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {product}
                                                </a>
                                            ))}
                                        </div>

                                        <a
                                            href="#philosophy"
                                            className="px-3 py-2.5 rounded-xl text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all font-medium mt-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Our Philosophy
                                        </a>
                                        <a
                                            href="#contact"
                                            className="px-3 py-2.5 rounded-xl text-[#e2d5f3] hover:text-[#ffffff] hover:bg-[#ffffff]/10 transition-all font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-[#ffffff]/10">
                                        <Button
                                            className="w-full bg-[#6C2BD9] hover:bg-[#5a24b8] text-[#ffffff] rounded-xl shadow-lg shadow-[#6C2BD9]/30"
                                            onClick={() => setIsOpen(false)}
                                            asChild
                                        >
                                            <a href="/sign-up">Sign Up</a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}
