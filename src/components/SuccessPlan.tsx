import React from 'react';
import { motion } from 'framer-motion';

const SuccessPlan: React.FC = () => {
    return (
        <section className="py-16 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary-navy mb-8 leading-[1.2]">
                            Strategic planning for <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-accent-gold to-yellow-600">long-term victory.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                            We support you with FP&A, budgeting, cashflow forecasting, and variance analysis to help you plan and manage your finances effectively.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Financial Modelling", desc: "Robust models to project your business growth." },
                                { title: "Budgeting & Forecasting", desc: "Stay ahead of costs and plan your cash inflows." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 bg-primary-navy text-accent-gold rounded-full flex items-center justify-center shrink-0 text-sm font-black shadow-lg shadow-primary-navy/20">
                                        ✓
                                    </div>
                                    <div>
                                        <strong className="block text-primary-navy text-xl mb-1">{item.title}</strong>
                                        <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 bg-primary-navy text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-primary-navy/90 shadow-xl shadow-primary-navy/20 flex items-center gap-3"
                            onClick={() => window.open('https://wa.me/2349032830995')}
                        >
                            <span>Chat on WhatsApp</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-gold/10 rounded-full blur-[80px] -z-10" />
                        <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,31,63,0.15)] border-[8px] border-white bg-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                src="/todo.webp"
                                alt="Financial graphs"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessPlan;
