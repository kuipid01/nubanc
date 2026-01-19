import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 overflow-hidden bg-mesh text-white">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-gold/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-navy/40 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* LEFT CONTENT */}
                <div className="text-left max-w-2xl flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-sm font-bold tracking-wide mb-6 backdrop-blur-md">
                            PREMIUM FINANCIAL SERVICES
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                            Master your finances. <br />
                            <span className="text-gradient-gold">Grow with power.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white/80 max-w-xl mb-10 poppins-regular leading-relaxed"
                    >
                        nubanc delivers the financial clarity you need. Expert bookkeeping, tax compliance, and strategic advisory for ambitious businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
                    >
                        <button
                            onClick={() => window.open('https://wa.me/2349032830995')}
                            className="bg-accent-gold text-primary-navy px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-primary-navy transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        >
                            Book a Consultation
                        </button>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 text-white border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            Explore Services
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT VISUAL - CSS Glass Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 w-full max-w-[500px] perspective-1000"
                >
                    <div className="relative glass-panel rounded-2xl p-6 md:p-8 transform transition-transform hover:scale-[1.02] duration-500">
                        {/* Fake Dashboard Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">NB</div>
                                <div>
                                    <div className="h-2 w-24 bg-white/20 rounded mb-1"></div>
                                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                                </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                                +24.5% Growth
                            </div>
                        </div>

                        {/* Fake Graphs and Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                                <p className="text-sm text-white/50 mb-1">Total Revenue</p>
                                <p className="text-2xl font-bold text-white mb-2">$124,500</p>
                                <div className="flex items-end gap-1 h-8">
                                    <div className="w-1/4 bg-accent-gold/40 h-[40%] rounded-sm"></div>
                                    <div className="w-1/4 bg-accent-gold/60 h-[70%] rounded-sm"></div>
                                    <div className="w-1/4 bg-accent-gold/80 h-[50%] rounded-sm"></div>
                                    <div className="w-1/4 bg-accent-gold h-[90%] rounded-sm"></div>
                                </div>
                            </div>
                            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                                <p className="text-sm text-white/50 mb-1">Tax Savings</p>
                                <p className="text-2xl font-bold text-white mb-2">$12,350</p>
                                <div className="h-1 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-green-400 w-[75%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-3">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                    <div className="w-5 h-5 rounded-full border-2 border-accent-gold/50 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-accent-gold"></div>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-[-20px] right-[-20px] w-24 h-24 bg-accent-gold rounded-full blur-[40px] opacity-40"></div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
