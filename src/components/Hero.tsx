import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen lg:min-h-[130vh] flex items-center pt-20 overflow-hidden bg-white">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start">
                {/* LEFT CONTENT */}
                <div className="text-left max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-[88px] text-primary-navy mb-8 font-semibold leading-[1.1]">
                        Take control of your finances. Grow with confidence.
                    </h1>

                    <p className="text-lg md:text-xl text-primary-navy/80 max-w-xl mb-10 poppins-regular leading-relaxed">
                        Nubanc helps entrepreneurs and growing businesses stay on top of their numbers with
                        expert bookkeeping, tax, and financial advisory.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
                        <button
                            className="bg-primary-navy text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg"
                        >
                            Get Started →
                        </button>

                        <button
                            className="border border-primary-navy text-primary-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-navy hover:text-white transition flex items-center justify-center"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
