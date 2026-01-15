import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen lg:min-h-[130vh] flex items-center pt-20 overflow-hidden bg-white">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start">
                {/* LEFT CONTENT */}
                <div className="text-left max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-[88px] text-primary-navy mb-8 font-semibold leading-[1.1]"
                    >
                        Take control of your finances. Grow with confidence.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-primary-navy/80 max-w-xl mb-10 poppins-regular leading-relaxed"
                    >
                        nubanc helps entrepreneurs and growing businesses stay on top of their numbers with
                        expert bookkeeping, tax, and financial advisory.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
                    >
                        <button
                            onClick={() => window.open('https://wa.me/2349032830995')}
                            className="bg-white border border-primary-navy text-primary-navy px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Book a Consultation
                        </button>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
