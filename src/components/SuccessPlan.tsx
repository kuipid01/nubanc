import React from 'react';

const SuccessPlan: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-navy mb-8 leading-tight">
                            Plan and Manage for Success
                        </h2>
                        <p className="text-lg md:text-xl text-text-gray mb-10 leading-relaxed">
                            We support you with FP&A; budgeting, cashflow forecasting, and variance analysis to help you plan and manage your finances effectively.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center shrink-0 text-xs font-black">
                                    ✓
                                </div>
                                <div>
                                    <strong className="block text-primary-navy text-lg mb-1">Financial Modelling</strong>
                                    <p className="text-text-gray text-base">Robust models to project your business growth.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center shrink-0 text-xs font-black">
                                    ✓
                                </div>
                                <div>
                                    <strong className="block text-primary-navy text-lg mb-1">Budgeting & Forecasting</strong>
                                    <p className="text-text-gray text-base">Stay ahead of costs and plan your cash inflows.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-12 bg-accent-gold text-primary-navy px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent-gold-hover hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                            onClick={() => window.open('https://wa.me/2349032830995')}
                        >
                            WhatsApp Chat
                        </button>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                            <img
                                src="/src/assets/Financial-Planning-Smart-Image.webp"
                                alt="Financial graphs"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessPlan;
