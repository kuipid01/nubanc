import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section id="about" className="relative mt-12 bg-linear-to-br from-primary-navy via-primary-navy/95 to-primary-navy text-white py-16 md:py-24 overflow-hidden rounded-[2rem] md:rounded-4xl mx-4 md:mx-8">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[60%]"
                >
                    <span className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4 block">
                        About nubanc
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2]">
                        nubanc helps businesses stay financially organized, compliant, and ready to grow.
                    </h2>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[40%] text-white/80 text-lg md:text-xl leading-relaxed font-medium space-y-6"
                >
                    <p>
                        nubanc is your all-in-one finance hub for entrepreneurs, startups, and
                        growing businesses. We simplify your finances with clean bookkeeping,
                        tax compliance, financial reporting, and expert advisory.
                    </p>

                    <p>
                        Our goal is simple — to structure your finances clearly, so you can make
                        better decisions and grow with confidence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
