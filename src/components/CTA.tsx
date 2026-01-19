import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-28 px-6 md:px-16 bg-linear-to-br from-primary-navy to-[#003366] text-white text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white leading-[1.1]">
                    Ready to Scale Your Business?
                </h2>
                <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Book a consultation today and let's structure your finances for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary-navy px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-100 shadow-xl"
                        onClick={() => window.open('https://wa.me/2349032830995')}
                    >
                        Book a Consultation
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-accent-gold text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent-gold hover:text-primary-navy"
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
