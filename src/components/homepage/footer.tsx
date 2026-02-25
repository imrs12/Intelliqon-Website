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
        <footer id="contact" className="bg-gray-900 text-gray-300">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

                {/* Mobile: Logo + socials stacked */}
                <div className="flex flex-col gap-3 mb-8 sm:hidden">
                    <a href="#home" className="text-xl font-bold text-white">
                        Intelliqon
                    </a>
                    <p className="text-gray-400 italic text-xs sm:text-sm">
                        {'"Empowering Business with Innovative Solutions"'}
                    </p>
                    <div className="flex gap-2 pt-1">
                        <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="Twitter">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="Instagram">
                            <Instagram className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Main grid — 2 cols on mobile, 4 on lg */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
                    {/* Logo block — hidden on mobile, shown sm+ */}
                    <div className="hidden sm:flex flex-col gap-3 lg:col-span-1 col-span-2 sm:col-span-1">
                        <a href="#home" className="text-xl lg:text-2xl font-bold text-white">
                            Intelliqon
                        </a>
                        <p className="text-gray-400 italic text-sm">
                            {'"Empowering Business with Innovative Solutions"'}
                        </p>
                        <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="Twitter">
                                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors" aria-label="Instagram">
                                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-xs sm:text-sm lg:text-base hover:text-violet-400 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#services" className="text-xs sm:text-sm lg:text-base hover:text-violet-400 transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
                        <ul className="flex flex-col gap-3 sm:gap-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400 mt-0.5 shrink-0" />
                                <a href="mailto:support@intelliqon.com" className="text-xs sm:text-sm lg:text-base hover:text-violet-400 transition-colors break-all">
                                    support@intelliqon.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400 mt-0.5 shrink-0" />
                                <a href="tel:+919167088519" className="text-xs sm:text-sm lg:text-base hover:text-violet-400 transition-colors">
                                    +91-91670-88519
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
                    <p>{"© 2025 Intelliqon. All rights reserved."}</p>
                </div>
            </div>
        </footer>
    );
}
