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
                        ? "backdrop-blur-2xl border-white/20 shadow-xl"
                        : "backdrop-blur-xl border-white/10",
                ].join(" ")}
                style={{
                    background: scrolled
                        ? "linear-gradient(135deg, rgba(56,73,89,0.45) 0%, rgba(106,137,167,0.30) 100%)"
                        : "linear-gradient(135deg, rgba(56,73,89,0.18) 0%, rgba(106,137,167,0.10) 100%)",
                    boxShadow: scrolled
                        ? "0 8px 32px rgba(26,43,56,0.25), inset 0 1px 0 rgba(255,255,255,0.12)"
                        : "0 4px 16px rgba(26,43,56,0.10), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
            >
                <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
                    {/* Logo */}
                    <a href="#home" className="order-2 lg:order-1 text-lg sm:text-xl lg:text-2xl font-bold text-white shrink-0 tracking-tight lg:mr-auto pl-2 sm:pl-0">
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
                            className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Home
                        </a>

                        {/* Services Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Services <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 rounded-xl shadow-xl border border-white/20 bg-linear-to-br from-slate-800 to-slate-900"
                            >
                                {services.map((service) => (
                                    <DropdownMenuItem
                                        key={service}
                                        asChild
                                        className="cursor-pointer px-2 py-1"
                                    >
                                        <a href="#services" className="w-full px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-[#0891b2]/20 transition-all duration-200 rounded-lg block">{service}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Products Dropdown */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none ring-0 border-0 bg-transparent">
                                    Products <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 rounded-xl shadow-xl border border-white/20 bg-linear-to-br from-slate-800 to-slate-900"
                            >
                                {products.map((product) => (
                                    <DropdownMenuItem
                                        key={product}
                                        asChild
                                        className="cursor-pointer px-2 py-1"
                                    >
                                        <a href="#products" className="w-full px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-[#0891b2]/20 transition-all duration-200 rounded-lg block">{product}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <a
                            href="#philosophy"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Our Philosophy
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:order-3 items-center gap-2">
                        <ModeToggle />
                        <Button
                            className="text-white rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-200 text-sm px-5 hover:shadow-teal-500/50 hover:opacity-95"
                            style={{ background: "#0891b2" }}
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
                                className="w-[280px] sm:w-[320px] backdrop-blur-2xl border-r border-white/10 p-0"
                                style={{ background: "rgba(56,73,89,0.97)" }}
                            >
                                <div className="p-5 sm:p-6">
                                    <SheetTitle className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">
                                        Intelliqon
                                    </SheetTitle>

                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="#home"
                                            className="px-3 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all font-medium text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Home
                                        </a>

                                        {/* Services */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#88BDF2" }}>
                                                Services
                                            </p>
                                            {services.map((service) => (
                                                <a
                                                    key={service}
                                                    href="#services"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {service}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Products */}
                                        <div className="mt-2">
                                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#88BDF2" }}>
                                                Products
                                            </p>
                                            {products.map((product) => (
                                                <a
                                                    key={product}
                                                    href="#products"
                                                    className="block px-3 py-2 pl-6 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {product}
                                                </a>
                                            ))}
                                        </div>

                                        <a
                                            href="#philosophy"
                                            className="px-3 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all font-medium mt-2 text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Our Philosophy
                                        </a>
                                        <a
                                            href="#contact"
                                            className="px-3 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all font-medium text-sm sm:text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                                        <div className="flex items-center justify-between px-1">
                                            <span className="text-sm text-white/50">Theme</span>
                                            <ModeToggle />
                                        </div>
                                        <Button
                                            className="w-full text-white rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:opacity-95"
                                            style={{ background: "#0891b2" }}
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
