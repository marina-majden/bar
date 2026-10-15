import { siteData } from "../data.js";
import { Award, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection({ onOpenQuote }) {
    const { aboutUs, brand } = siteData;

    return (
        <section
            id='about'
            className='relative py-24 md:py-32 bg-[#08080c] overflow-hidden'>
            {/* Background luxury gradient accents */}
            <div className='absolute top-1/2 left-0 w-96 h-96 bg-[#c8a97d]/5 rounded-full blur-[120px] pointer-events-none' />

            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Editorial Section Header */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10'>
                    <div>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                            Umjetnost Miksologije & Catering
                        </span>
                        <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                            {aboutUs.title}
                        </h2>
                    </div>
                    <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                        {aboutUs.subtitle}
                    </p>
                </div>

                {/* Editorial Asymmetric Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
                    {/* Left: Overlapping Editorial Images */}
                    <div className='lg:col-span-6 relative'>
                        {/* Main High-end Editorial Image */}
                        <div className='relative rounded-2xl overflow-hidden border border-[#c8a97d]/20 shadow-2xl aspect-[4/5]'>
                            <img
                                src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop'
                                alt='BarMen Ekskluzivni Cocktail Catering'
                                className='w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-1000'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80' />

                            {/* Floating Quote Badge */}
                            <div className='absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#08080c]/85 backdrop-blur-md border border-[#c8a97d]/30'>
                                <p className='font-display italic text-[#f5f0e8] text-sm md:text-base leading-relaxed'>
                                    "Kada birate mobilni cocktail bar, želite
                                    više od pića – želite iskustvo koje će vaš
                                    event učiniti nezaboravnim."
                                </p>
                                <span className='block mt-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#c8a97d]'>
                                    — {brand.founder}, Glavni Miksolog
                                </span>
                            </div>
                        </div>

                        {/* Secondary Overlapping Accent Image */}
                        <div className='hidden sm:block absolute -top-8 -right-8 w-48 h-56 rounded-xl overflow-hidden border border-[#c8a97d]/40 shadow-2xl bg-[#0a0a0e] z-10'>
                            <img
                                src='https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop'
                                alt='Flavour Blaster Mirisni Mjehurić'
                                className='w-full h-full object-cover filter brightness-95'
                            />
                            <div className='absolute inset-0 bg-[#08080c]/20' />
                        </div>
                    </div>

                    {/* Right: Narrative & Stats */}
                    <div className='lg:col-span-6 flex flex-col gap-8'>
                        <div className='space-y-4 text-[#b8b2a7] font-sans font-light leading-relaxed text-sm sm:text-base'>
                            <p className='text-lg font-serif italic text-[#f5f0e8] leading-relaxed'>
                                Mi smo tvrtka koja donosi vrhunsku koktel
                                avanturu izravno na vašu lokaciju!
                            </p>
                            <p>{aboutUs.description}</p>
                        </div>

                        {/* Value Pillars List */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
                            <div className='flex items-start gap-3 p-4 rounded-xl bg-[#12121a]/60 border border-white/5'>
                                <Sparkles
                                    className='w-5 h-5 text-[#c8a97d] shrink-0 mt-0.5'
                                    strokeWidth={1.5}
                                />
                                <div>
                                    <h4 className='font-serif text-[#f5f0e8] text-sm'>
                                        Show & Miksologija
                                    </h4>
                                    <p className='text-xs text-[#878074] mt-0.5'>
                                        Atraktivni trikovi i interakcija s
                                        gostima
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3 p-4 rounded-xl bg-[#12121a]/60 border border-white/5'>
                                <Compass
                                    className='w-5 h-5 text-[#c8a97d] shrink-0 mt-0.5'
                                    strokeWidth={1.5}
                                />
                                <div>
                                    <h4 className='font-serif text-[#f5f0e8] text-sm'>
                                        Dolazimo Bilo Gdje
                                    </h4>
                                    <p className='text-xs text-[#878074] mt-0.5'>
                                        Zagreb, obala, otoci i kontinentalna
                                        Hrvatska
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Numerical Stats Bar */}
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10'>
                            {aboutUs.stats.map((stat) => (
                                <div key={stat.label} className='flex flex-col'>
                                    <span className='font-display text-3xl sm:text-4xl text-[#c8a97d] font-normal leading-none'>
                                        {stat.value}
                                    </span>
                                    <span className='text-[10px] tracking-wider uppercase text-[#878074] font-sans mt-2'>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className='pt-2'>
                            <button
                                onClick={onOpenQuote}
                                className='px-8 py-3.5 rounded-full border border-[#c8a97d]/50 text-[#f5f0e8] text-xs uppercase tracking-[0.2em] hover:bg-[#c8a97d] hover:text-[#08080c] transition-all duration-300 shadow-md'>
                                Dogovorite Degustaciju
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
