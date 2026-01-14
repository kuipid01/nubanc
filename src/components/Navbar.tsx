import React, { useState, useEffect } from 'react';

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
        <header className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-16 z-1000 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="flex items-center gap-2.5 text-2xl font-extrabold text-primary-navy tracking-tighter">
                <div className="w-3 h-3 bg-accent-gold rounded-[2px] rotate-45" />
                Nubanc
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <a href="#about" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">About</a>
                <a href="#services" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">Services</a>
                <a href="#contact" className="font-semibold text-primary-navy hover:text-accent-gold transition-colors">Contact</a>
                <button
                    className="bg-accent-gold text-primary-navy px-7 py-3 rounded-full font-bold text-base transition-all duration-300 hover:bg-accent-gold-hover hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]"
                    onClick={() => window.open('https://wa.me/2349032830995')}
                >
                    Book a Consultation
                </button>
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
            <div className={`fixed inset-0 bg-white h-screen z-999 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    <a href="#about" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#services" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#contact" className="text-3xl font-bold text-primary-navy" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <button
                        className="w-full bg-accent-gold text-primary-navy px-7 py-5 rounded-xl font-bold text-xl mt-4"
                        onClick={() => {
                            window.open('https://wa.me/2349032830995');
                            setIsMenuOpen(false);
                        }}
                    >
                        Book a Consultation
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
