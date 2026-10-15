import { siteData } from "../data.js";
import { Sparkles, Calendar, GlassWater, ArrowUpRight } from "lucide-react";

export default function EventsSection({ onOpenQuote }) {
    const { events } = siteData;

    return (
        <section
            id='events'
            className='relative py-24 md:py-32 bg-[#0c0c12] border-t border-[#c8a97d]/15 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10'>
                    <div>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                            Prilagođeno Svakoj Prigodi
                        </span>
                        <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                            {events.title}
                        </h2>
                    </div>
                    <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                        {events.subtitle}
                    </p>
                </div>

                {/* Event Services Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {events.categories.map((cat, idx) => (
                        <div
                            key={cat.name}
                            className='luxury-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer hover:border-[#c8a97d]/50 transition-all duration-500'
                            onClick={onOpenQuote}>
                            <div>
                                <div className='flex items-center justify-between mb-4'>
                                    <span className='text-[11px] font-sans text-[#878074] uppercase tracking-widest'>
                                        0{idx + 1}
                                    </span>
                                    <div className='w-8 h-8 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] group-hover:bg-[#c8a97d] group-hover:text-[#08080c] transition-colors'>
                                        <ArrowUpRight className='w-4 h-4' />
                                    </div>
                                </div>

                                <h3 className='font-display text-xl text-[#f5f0e8] group-hover:text-[#c8a97d] transition-colors mb-2'>
                                    {cat.name}
                                </h3>

                                <p className='text-xs text-[#b8b2a7] font-sans leading-relaxed'>
                                    {cat.desc}
                                </p>
                            </div>

                            <div className='pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#c8a97d] tracking-wider uppercase'>
                                <span>Zatraži ponudu</span>
                                <span>→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional equipment banner (Najam barskih stolova & šanka) */}
                <div className='mt-12 p-6 rounded-2xl bg-[#101018] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                        <GlassWater
                            className='w-5 h-5 text-[#c8a97d]'
                            strokeWidth={1.5}
                        />
                        <span className='text-xs sm:text-sm text-[#d0c8bb] font-sans'>
                            Trebate samo opremu? Nudimo samostalni najam
                            mobilnog inox šanka i barskih stolova.
                        </span>
                    </div>
                    <button
                        onClick={onOpenQuote}
                        className='text-xs text-[#c8a97d] hover:text-[#d4b886] uppercase tracking-wider font-medium flex items-center gap-1 shrink-0'>
                        <span>Saznajte više</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
