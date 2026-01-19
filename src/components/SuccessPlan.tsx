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
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-navy mb-8 leading-tight">
                            Plan and Manage for Success
                        </h2>
                        <p className="text-lg md:text-xl text-text-gray mb-8 leading-relaxed">
                            We support you with FP&A; budgeting, cashflow forecasting, and variance analysis to help you plan and manage your finances effectively.
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
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center shrink-0 text-xs font-black">
                                        ✓
                                    </div>
                                    <div>
                                        <strong className="block text-primary-navy text-lg mb-1">{item.title}</strong>
                                        <p className="text-text-gray text-base">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 bg-accent-gold text-primary-navy px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent-gold-hover shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                            onClick={() => window.open('https://wa.me/2349032830995')}
                        >
                            WhatsApp Chat
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full"
                    >
                        <div className="rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
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
