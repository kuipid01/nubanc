import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
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
        title: 'nubanc FinanceOS',
        icon: '🚀',
        desc: 'Coming Soon: Our innovative financial operations platform providing credit management, financial automation, and business insights.',
        tag: 'COMING SOON'
    }
];

const Services: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="py-24 px-6 md:px-16 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />


            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='max-w-3xl mb-20 text-center mx-auto'
                >
                    <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
                    <h2 className='text-4xl md:text-5xl font-bold text-primary-navy mb-6'>Structure your finances.<br />Grow with confidence.</h2>
                    <p className='text-slate-600 text-lg'>We provide the financial infrastructure that high-growth companies rely on.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
                >
                    {/* First Large Card which spans 2 columns on large screens */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-accent-gold/10" />

                        <div className="relative z-10 flex flex-col h-full justify-between items-start">
                            <div className="w-16 h-16 bg-blue-50 text-primary-navy rounded-2xl flex items-center justify-center text-3xl mb-6">
                                {services[0].icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary-navy mb-3">{services[0].title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-lg">{services[0].desc}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Standard Cards */}
                    {services.slice(1).map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`} // Make the 3rd one span on medium
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent-gold/5 transition-colors" />

                            {service.tag && (
                                <span className="absolute top-6 right-6 bg-primary-navy text-accent-gold text-[10px] font-bold px-3 py-1 rounded-full tracking-wider shadow-lg">
                                    {service.tag}
                                </span>
                            )}

                            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-accent-gold group-hover:text-primary-navy">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-gold-dark transition-colors">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
