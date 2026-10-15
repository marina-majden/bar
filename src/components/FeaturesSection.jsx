import { siteData } from "../data.js";
import {
    Wine,
    Sparkles,
    Layers,
    Compass,
    Award,
    ArrowUpRight,
} from "lucide-react";

export default function FeaturesSection({ onOpenQuote }) {
    const { features } = siteData;

    const featureIcons = [
        <Wine className='w-6 h-6 text-[#c8a97d]' strokeWidth={1.2} />,
        <Sparkles className='w-6 h-6 text-[#c8a97d]' strokeWidth={1.2} />,
        <Layers className='w-6 h-6 text-[#c8a97d]' strokeWidth={1.2} />,
        <Compass className='w-6 h-6 text-[#c8a97d]' strokeWidth={1.2} />,
        <Award className='w-6 h-6 text-[#c8a97d]' strokeWidth={1.2} />,
    ];

    return (
        <section
            id='features'
            className='relative py-24 md:py-32 bg-[#08080c] overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='max-w-3xl mb-16 pb-6 border-b border-white/10'>
                    <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                        Standard Izvrsnosti
                    </span>
                    <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                        {features.title}
                    </h2>
                    <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-3 leading-relaxed'>
                        {features.intro}
                    </p>
                </div>

                {/* 5 Core Feature Pillars Editorial Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {features.items.map((item, index) => (
                        <div
                            key={item.title}
                            className={`luxury-card rounded-2xl p-8 flex flex-col justify-between group transition-all duration-700 ${
                                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                            }`}>
                            <div>
                                <div className='flex items-center justify-between mb-6 pb-4 border-b border-white/5'>
                                    <span className='font-display text-3xl md:text-4xl text-[#c8a97d]/40 group-hover:text-[#c8a97d] transition-colors'>
                                        {item.number}
                                    </span>
                                    <div className='w-12 h-12 rounded-full bg-[#c8a97d]/10 border border-[#c8a97d]/20 flex items-center justify-center group-hover:bg-[#c8a97d]/20 transition-colors'>
                                        {featureIcons[index]}
                                    </div>
                                </div>

                                <h3 className='font-display text-xl sm:text-2xl text-[#f5f0e8] mb-3 leading-snug'>
                                    {item.title}
                                </h3>

                                <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans font-light leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>

                            <div className='pt-6 mt-6 border-t border-white/5 flex items-center justify-between'>
                                <span className='text-[11px] font-sans uppercase tracking-[0.2em] text-[#c8a97d]'>
                                    {item.highlight}
                                </span>
                                <span className='text-xs text-[#878074] group-hover:text-[#c8a97d] group-hover:translate-x-1 transition-all'>
                                    →
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* 6th Card: Direct Invitation / Quote Callout */}
                    <div className='rounded-2xl p-8 border border-[#c8a97d]/30 bg-gradient-to-br from-[#1c1822] to-[#0a0a0e] flex flex-col justify-between shadow-2xl'>
                        <div>
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d]'>
                                Vaša Vizija
                            </span>
                            <h3 className='font-display text-2xl text-[#f5f0e8] mt-2'>
                                Spremni za spektakl na vašem eventu?
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans mt-3 leading-relaxed'>
                                Pošaljite nam datum i lokaciju za neobvezujuću
                                ponudu skrojenu po vašim željama.
                            </p>
                        </div>

                        <button
                            onClick={onOpenQuote}
                            className='mt-8 w-full py-3.5 rounded-full bg-[#c8a97d] text-[#08080c] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b886] transition-colors flex items-center justify-center gap-2 shadow-lg'>
                            <span>Zatražite Ponudu</span>
                            <ArrowUpRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
