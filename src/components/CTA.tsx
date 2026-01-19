import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-16 md:py-32 px-6 md:px-16 bg-mesh text-white text-center overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-[1.1] tracking-tight">
                    Every success story starts <br /> with clear numbers.
                </h2>
                <p className="text-lg md:text-2xl mb-8 md:mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Book a consultation today and let's structure your finances for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-gold text-primary-navy px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                        onClick={() => window.open('https://wa.me/2349032830995')}
                    >
                        Book a Consultation
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/10"
                        onClick={() => window.open('mailto:info@nubanclabs.com')}
                    >
                        Email Us
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
