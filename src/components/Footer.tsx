import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f0b1a] text-white pt-24 pb-12 px-6 md:px-16 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col">
                        <div className='bg-white w-fit px-2 h-fit mb-20 py-1 rounded-full'>
                            <img src="/logo.png" alt="logo nubanc" className='w-52 object-contain h-auto ' />
                        </div>

                        <p className="text-white/60 max-w-xs leading-relaxed">
                            nubanc Labs Ltd. Your all-in-one finance hub for entrepreneurs, startups, and growing businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">Contact Info</h4>
                        <ul className="space-y-4 text-white/60 text-sm tracking-wide">
                            <li>📞 09032830995</li>
                            <li>📧 info@nubanclabs.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><a href="#services" className="hover:text-accent-gold transition-colors">Bookkeeping</a></li>
                            <li><a href="#services" className="hover:text-accent-gold transition-colors">Tax Compliance</a></li>
                            <li><a href="#services" className="hover:text-accent-gold transition-colors">Financial Reporting</a></li>
                            <li><a href="#services" className="hover:text-accent-gold transition-colors">Advisory</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">Follow Us</h4>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>© 2026 nubanc Labs Ltd. All rights reserved.</p>
                    <p>Registered Name: nubanc Labs Ltd</p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
