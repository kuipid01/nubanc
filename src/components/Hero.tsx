import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {

    return (
        <section className="relative min-h-[90vh] md:min-h-screen pb-10 flex items-center pt-24 overflow-hidden bg-slate-50">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* LEFT CONTENT */}
                <div className="text-left max-w-2xl flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-primary-navy/10 bg-primary-navy/5 text-primary-navy text-sm font-bold tracking-wide mb-6 backdrop-blur-md">
                            PREMIUM FINANCIAL SERVICES
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight text-primary-navy">
                            Master your finances. <br />
                            <span className="text-gradient-gold">Grow with power.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 poppins-regular leading-relaxed"
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
                            className="bg-accent-gold text-primary-navy px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-primary-navy hover:shadow-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        >
                            Book a Consultation
                        </button>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 text-primary-navy border border-primary-navy/20 hover:bg-primary-navy/5 transition-all duration-300 backdrop-blur-sm"
                        >
                            Explore Services
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT VISUAL - Floating Elements */}
                <div className="flex-1 w-full  h-full relative min-h-[500px] hidden lg:block">
                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-[10%] left-[40%] z-20 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center text-center gap-2 max-w-[200px]"
                    >
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
                        </div>
                        <p className="font-bold text-primary-navy text-base">AI-powered analytics</p>
                        <p className="text-xs text-slate-500">AI-Powered Budgeting for Smarter Financial Spending.</p>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-[0%] right-[0%] z-20 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-[280px]"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-500 text-sm">Total deposit</span>
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">$$</div>
                        </div>
                        <div className="text-3xl font-extrabold text-primary-navy mb-4">$240.80K</div>
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                            <div className="bg-green-500 h-2 rounded-full w-[70%]"></div>
                        </div>
                        <div className="text-xs text-green-600 font-bold">+2.6% <span className="text-slate-400 font-medium ml-1">Less Than last week</span></div>
                    </motion.div>

                    {/* Middle Graph Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-[40%] left-[10%] right-[10%] z-10 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-xl"
                    >
                        <div className="flex justify-between mb-6">
                            <h3 className="font-bold text-primary-navy">Analysis 1</h3>
                            <div className="flex gap-4 text-xs font-bold">
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-600"></span> Income</div>
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-100"></span> Outcome</div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between h-32 gap-2">
                            {[40, 70, 50, 80, 60, 90].map((h, i) => (
                                <div key={i} className="flex gap-1 w-full h-full items-end justify-center">
                                    <div style={{ height: `${h}%` }} className="w-3 bg-green-600 rounded-t-sm"></div>
                                    <div style={{ height: `${h * 0.6}%` }} className="w-3 bg-green-100 rounded-t-sm"></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                            <span>10k</span><span>50k</span><span>100k</span><span>250k</span>
                        </div>
                    </motion.div>

                    {/* Bg Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-200/20 rounded-full blur-[100px] -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
