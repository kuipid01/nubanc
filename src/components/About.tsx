import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <span className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4 block">
                        About nubanc
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-6 md:mb-8 leading-tight">
                        Powering your <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary-navy to-blue-600">financial growth engine.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            nubanc is the all-in-one finance hub for the modern entrepreneur. We strip away the complexity of financial management, replacing chaos with clarity.
                        </p>
                        <p>
                            From precision bookkeeping to strategic tax compliance, we build the infrastructure your business needs to scale without friction.
                        </p>
                    </div>

                    <div className="mt-10 flex gap-8">
                        <div>
                            <p className="text-4xl font-bold text-primary-navy">500+</p>
                            <p className="text-gray-500 text-sm mt-1">Clients Served</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-navy">98%</p>
                            <p className="text-gray-500 text-sm mt-1">Compliance Rate</p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="/about-visual.png"
                            alt="Financial Hub Command Center"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary-navy/50 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce shadow-primary-navy/10">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-primary-navy font-bold text-sm">Verified Partner</p>
                            <p className="text-xs text-gray-500">Trusted by top firms</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
