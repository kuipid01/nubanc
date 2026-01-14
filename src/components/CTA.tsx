import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-16 bg-linear-to-br from-primary-navy to-[#003366] text-white text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white leading-[1.1]">
                    Ready to Scale Your Business?
                </h2>
                <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Book a consultation today and let's structure your finances for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
                    <button
                        className="bg-white text-primary-navy px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 shadow-xl"
                        onClick={() => window.open('https://wa.me/2349032830995')}
                    >
                        Book a Consultation
                    </button>
                    <button
                        className="border-2 border-accent-gold text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent-gold hover:text-primary-navy"
                        onClick={() => window.open('mailto:info@nubanclabs.com')}
                    >
                        Email Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
