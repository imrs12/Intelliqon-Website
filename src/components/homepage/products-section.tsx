import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Shield, Package } from "lucide-react";

const products = [
    {
        icon: DollarSign,
        title: "Financial Automation",
        description:
            "Streamline your financial operations with intelligent automation for accounting, invoicing, and reporting.",
    },
    {
        icon: Shield,
        title: "Police Solutions",
        description:
            "Advanced law enforcement management systems designed for modern policing needs and public safety.",
    },
    {
        icon: Package,
        title: "Other Solutions",
        description:
            "Custom software products tailored to specific industry needs and business requirements.",
    },
];

export function ProductsSection() {
    return (
        <section id="products" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#6C2BD9] to-[#8B44E5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 text-balance">
                        Our Products
                    </h2>
                    <p className="text-base sm:text-lg text-[#e9d5ff]">
                        Proprietary software solutions built for industries
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product) => (
                        <Card
                            key={product.title}
                            className="p-6 sm:p-8 bg-[#ffffff]/10 backdrop-blur-sm border-[#ffffff]/20 hover:bg-[#ffffff]/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="mb-4 sm:mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#ffffff]/20 backdrop-blur-sm rounded-xl">
                                    <product.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#ffffff]" />
                                </div>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-[#ffffff] mb-2 sm:mb-3">
                                {product.title}
                            </h3>

                            <p className="text-sm sm:text-base text-[#e9d5ff] mb-4 sm:mb-6 leading-relaxed flex-grow">
                                {product.description}
                            </p>

                            <Button
                                variant="outline"
                                className="w-full bg-transparent border-[#ffffff]/30 text-[#ffffff] hover:bg-[#ffffff] hover:text-[#6C2BD9] transition-all duration-300 mt-auto"
                            >
                                Request Access
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                    <p className="text-[#e9d5ff] text-xs sm:text-sm">
                        * Access to products requires authentication
                    </p>
                </div>
            </div>
        </section>
    );
}
