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
            className={`fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-6 md:px-16 z-1000 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
        >
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? '' : 'bg-white/10 backdrop-blur-md border border-white/10'}`}>
                <img src="/logo.png" alt="logo nubanc" className='w-20 object-contain h-auto' />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {['About', 'Services', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`font-semibold text-base transition-colors duration-300 hover:text-accent-gold ${isScrolled ? 'text-primary-navy' : 'text-black/90'}`}
                    >
                        {item}
                    </a>
                ))}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-7 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-lg ${isScrolled ? 'bg-primary-navy text-white hover:bg-primary-navy/90' : 'bg-white text-primary-navy hover:bg-gray-100'}`}
                    onClick={() => window.open('https://wa.me/2349032830995')}
                >
                    Book a Consultation
                </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className={`md:hidden z-1001 ${isScrolled || isMenuOpen ? 'text-primary-navy' : 'text-white'}`}
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
