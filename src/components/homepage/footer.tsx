import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const services = [
    "AI & ML",
    "Business Analysis",
    "Chatbot Development",
    "Cybersecurity",
    "Data Analytics",
    "RPA",
];

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
];

export function Footer() {
    return (
        <footer id="contact" className="bg-[#111827] text-[#d1d5db]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Logo & Tagline — always full width */}
                <div className="flex flex-col gap-4 mb-8 sm:hidden">
                    <a href="#home" className="text-2xl font-bold text-[#ffffff]">
                        Intelliqon
                    </a>
                    <p className="text-[#9ca3af] italic text-sm">
                        {'"Empowering Business with Innovative Solutions"'}
                    </p>
                    <div className="flex gap-3 pt-2">
                        <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="Twitter">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
                    {/* Logo & Tagline — hidden on mobile, shown sm+ */}
                    <div className="hidden sm:flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold text-[#ffffff]">
                            Intelliqon
                        </a>
                        <p className="text-[#9ca3af] italic text-sm sm:text-base">
                            {'"Empowering Business with Innovative Solutions"'}
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center hover:bg-[#6C2BD9] transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#ffffff] font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm sm:text-base hover:text-[#6C2BD9] transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[#ffffff] font-semibold mb-4 text-sm sm:text-base">Services</h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#services" className="text-sm sm:text-base hover:text-[#6C2BD9] transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-[#ffffff] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-[#6C2BD9] mt-0.5 shrink-0" />
                                <a href="mailto:support@intelliqon.com" className="text-sm sm:text-base hover:text-[#6C2BD9] transition-colors break-all">
                                    support@intelliqon.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-[#6C2BD9] mt-0.5 shrink-0" />
                                <a href="tel:+919167088519" className="text-sm sm:text-base hover:text-[#6C2BD9] transition-colors">
                                    +91-91670-88519
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1f2937] text-center text-xs sm:text-sm text-[#9ca3af]">
                    <p>{"© 2025 Intelliqon. All rights reserved."}</p>
                </div>
            </div>
        </footer>
    );
}
