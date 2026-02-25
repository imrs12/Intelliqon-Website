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
import { ModeToggle } from "@/components/ui/mode-toggle";

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
        <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 w-full">
            <nav
                className={[
                    "w-full rounded-xl sm:rounded-2xl border px-3 sm:px-5 lg:px-8 transition-all duration-500",
                    scrolled
                        ? "bg-purple-950/80 backdrop-blur-xl border-white/10 shadow-lg shadow-violet-600/10"
                        : "bg-white/5 backdrop-blur-xl border-white/10",
                ].join(" ")}
            >
                <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
                    {/* Logo */}
                    <a href="#home" className="order-2 lg:order-1 text-lg sm:text-xl lg:text-2xl font-bold text-white shrink-0 tracking-tight">
                        Intelliqon
                    </a>

                    {/* Mobile dark mode toggle */}
                    <div className="order-3 lg:hidden">
                        <ModeToggle />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:order-2 items-center gap-1">
                        <a
                            href="#home"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Home
                        </a>

                        {/* Services Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Services <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 bg-purple-950/95 backdrop-blur-xl border-white/10 rounded-xl shadow-xl shadow-black/20"
                            >
                                {services.map((service) => (
                                    <DropdownMenuItem
                                        key={service}
                                        asChild
                                        className="text-purple-100 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-lg"
                                    >
                                        <a href="#services" className="w-full">{service}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Products Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Products <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 bg-purple-950/95 backdrop-blur-xl border-white/10 rounded-xl shadow-xl shadow-black/20"
                            >
                                {products.map((product) => (
                                    <DropdownMenuItem
                                        key={product}
                                        asChild
                                        className="text-purple-100 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-lg"
                                    >
                                        <a href="#products" className="w-full">{product}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <a
                            href="#philosophy"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Our Philosophy
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:order-3 items-center gap-2">
                        <ModeToggle />
                        <Button
                            className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all duration-300 text-sm px-5"
                            asChild
                        >
                            <a href="/sign-up">Sign Up</a>
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="order-1 lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-white hover:bg-white/10 transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[280px] sm:w-[320px] bg-purple-950/95 backdrop-blur-2xl border-l border-white/10 p-0"
                            >
                                <div className="p-5 sm:p-6">
                                    <SheetTitle className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">
                                        Intelliqon
                                    </SheetTitle>

                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="#home"
                                            className="px-3 py-2.5 rounded-xl text-purple-100 hover:text-white hover:bg-white/10 transition-all font-medium text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Home
                                        </a>

                                        {/* Services */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
                                                Services
                                            </p>
                                            {services.map((service) => (
                                                <a
                                                    key={service}
                                                    href="#services"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-purple-200 hover:text-white hover:bg-white/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {service}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Products */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
                                                Products
                                            </p>
                                            {products.map((product) => (
                                                <a
                                                    key={product}
                                                    href="#products"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-purple-200 hover:text-white hover:bg-white/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {product}
                                                </a>
                                            ))}
                                        </div>

                                        <a
                                            href="#philosophy"
                                            className="px-3 py-2.5 rounded-xl text-purple-100 hover:text-white hover:bg-white/10 transition-all font-medium mt-2 text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Our Philosophy
                                        </a>
                                        <a
                                            href="#contact"
                                            className="px-3 py-2.5 rounded-xl text-purple-100 hover:text-white hover:bg-white/10 transition-all font-medium text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                                        <div className="flex items-center justify-between px-1">
                                            <span className="text-sm text-gray-400">Theme</span>
                                            <ModeToggle />
                                        </div>
                                        <Button
                                            className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg shadow-violet-600/30"
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
