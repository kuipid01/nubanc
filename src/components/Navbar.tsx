import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-16 z-1000 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
        >
            <img src="/logo.png" alt="logo nubanc" className='w-52 object-contain h-auto ' />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <a href="#about" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">About</a>
                <a href="#services" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">Services</a>
                <a href="#contact" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">Contact</a>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent-gold text-primary-navy px-7 py-3 rounded-full font-bold text-base transition-all duration-300 hover:bg-accent-gold-hover shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]"
                    onClick={() => window.open('https://wa.me/2349032830995')}
                >
                    Book a Consultation
                </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary-navy z-1001"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white h-screen z-999 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                href="#about" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>About</motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                href="#services" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>Services</motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="#contact" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>Contact</motion.a>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="w-full bg-accent-gold text-primary-navy px-7 py-5 rounded-xl font-bold text-xl mt-4"
                                onClick={() => {
                                    window.open('https://wa.me/2349032830995');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Book a Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
