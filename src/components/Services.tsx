import React from 'react';

interface ServiceItem {
    title: string;
    icon: string;
    desc: string;
    tag?: string;
}

const services: ServiceItem[] = [
    {
        title: 'Accounting System Setup',
        icon: '⚙️',
        desc: 'We set up modern accounting systems tailored to your business, ensuring clean, organised, and reliable financial records.'
    },
    {
        title: 'Financial Reporting',
        icon: '📊',
        desc: 'We prepare accurate P&L statements, balance sheets, cashflow statements, and performance ratios to help you understand your financial health.'
    },
    {
        title: 'Finance Advisory',
        icon: '🧠',
        desc: 'Expert financial guidance including financial modelling, business planning, pitch decks, and strategic insights for better decisions.'
    },
    {
        title: 'Tax Computation & Compliance',
        icon: '⚖️',
        desc: 'WHT, VAT, PAYE, CIT, NSITF, ITF, and more. We handle computations and filings ensuring full compliance and peace of mind.'
    },
    {
        title: 'Nubanc FinanceOS',
        icon: '🚀',
        desc: 'Coming Soon: Our innovative financial operations platform providing credit management, financial automation, and business insights.',
        tag: 'COMING SOON'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className='max-w-4xl'>
                    <p className='mb-8 text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-navy leading-[1.1]'>Structure your finances. Grow with confidence.</p>
                    <p className='mb-16 text-text-gray text-lg md:text-xl font-medium leading-relaxed'>At Nubanc, we help entrepreneurs, startups, and growing businesses stay on top of their numbers through clean bookkeeping, tax compliance, financial reporting, and expert finance advisory—so you can make smarter decisions and scale with clarity.</p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[24px] border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative group"
                        >
                            {service.tag && (
                                <span className="absolute top-5 right-5 bg-primary-navy text-accent-gold text-[10px] font-bold px-2 py-1 rounded tracking-wider">
                                    {service.tag}
                                </span>
                            )}
                            <div className="w-14 h-14 bg-accent-gold/10 text-accent-gold rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors group-hover:bg-accent-gold group-hover:text-primary-navy">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-navy mb-4">{service.title}</h3>
                            <p className="text-text-gray leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
