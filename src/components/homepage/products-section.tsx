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
        <section id="products" className="py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-violet-900 to-violet-700">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
                        Our Products
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-purple-200">
                        Proprietary software solutions built for industries
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
                    {products.map((product) => (
                        <Card
                            key={product.title}
                            className="p-4 sm:p-6 lg:p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="mb-3 sm:mb-4 lg:mb-6">
                                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-xl">
                                    <product.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                                </div>
                            </div>

                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                                {product.title}
                            </h3>

                            <p className="text-xs sm:text-sm lg:text-base text-purple-200 mb-4 sm:mb-5 lg:mb-6 leading-relaxed flex-grow">
                                {product.description}
                            </p>

                            <Button
                                variant="outline"
                                className="w-full bg-transparent border-white/30 text-white hover:bg-white hover:text-violet-600 transition-all duration-300 mt-auto text-sm"
                            >
                                Request Access
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-6 sm:mt-8 lg:mt-12">
                    <p className="text-purple-200 text-xs sm:text-sm">
                        * Access to products requires authentication
                    </p>
                </div>
            </div>
        </section>
    );
}
