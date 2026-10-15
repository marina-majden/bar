import { siteData } from "../data.js";
import { Sparkles, Wine, Users, Gift, Flame, ArrowUpRight } from "lucide-react";

export default function FlavourBlasterSection({ onOpenQuote }) {
    const { cateringTaste } = siteData;

    return (
        <section
            id='flavour-blaster'
            className='relative py-24 md:py-32 bg-[#0c0c12] border-t border-[#c8a97d]/15 overflow-hidden'>
            {/* Ambient sensory bubble & smoke lighting */}
            <div className='absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c8a97d]/10 rounded-full blur-[150px] pointer-events-none' />
            <div className='absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#e05a2b]/10 rounded-full blur-[140px] pointer-events-none' />

            <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
                {/* Section Header */}
                <div className='max-w-3xl mb-16'>
                    <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 mb-3'>
                        <Flame
                            className='w-3.5 h-3.5 text-[#c8a97d]'
                            strokeWidth={1.5}
                        />
                        <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d] font-sans'>
                            Revolucija Okusa & Arome
                        </span>
                    </div>
                    <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                        {cateringTaste.title}
                    </h2>
                    <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-3 leading-relaxed'>
                        {cateringTaste.description}
                    </p>
                </div>

                {/* Grid: Feature Spotlight + 4 Sensory Benefit Cards */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>
                    {/* Visual Spotlight: Flavour Blaster in action */}
                    <div className='lg:col-span-5 rounded-2xl overflow-hidden border border-[#c8a97d]/30 bg-[#12121a] relative flex flex-col justify-end p-8 min-h-[420px] shadow-2xl group'>
                        <img
                            src='https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop'
                            alt='Flavour Blaster Aroma Bubble Cocktail'
                            className='absolute inset-0 w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-1000'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/40 to-transparent' />

                        <div className='relative z-10 flex flex-col gap-3'>
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d]'>
                                Ekskluzivna Inovacija
                            </span>
                            <h3 className='font-display text-2xl text-[#f5f0e8]'>
                                Flavour Blaster™ Mirisni Mjehurići
                            </h3>
                            <p className='text-xs text-[#d0c8bb] font-sans leading-relaxed'>
                                Dodaje multisenzorni spektakl svakom gutljaju.
                                Mjehurić ispunjen aromatičnom parom puca točno u
                                trenutku kad gost prinese čašu usnama.
                            </p>
                        </div>
                    </div>

                    {/* 4 Interactive Perks Grid */}
                    <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {cateringTaste.perks.map((perk, idx) => {
                            const icons = [
                                <Flame
                                    className='w-5 h-5 text-[#c8a97d]'
                                    strokeWidth={1.5}
                                />,
                                <Wine
                                    className='w-5 h-5 text-[#c8a97d]'
                                    strokeWidth={1.5}
                                />,
                                <Gift
                                    className='w-5 h-5 text-[#c8a97d]'
                                    strokeWidth={1.5}
                                />,
                                <Users
                                    className='w-5 h-5 text-[#c8a97d]'
                                    strokeWidth={1.5}
                                />,
                            ];
                            return (
                                <div
                                    key={perk.title}
                                    className='luxury-card rounded-2xl p-6 flex flex-col justify-between group'>
                                    <div>
                                        <div className='w-10 h-10 rounded-xl bg-[#c8a97d]/10 border border-[#c8a97d]/30 flex items-center justify-center mb-4 group-hover:bg-[#c8a97d]/20 transition-colors'>
                                            {icons[idx]}
                                        </div>
                                        <h4 className='font-serif text-lg text-[#f5f0e8] mb-2'>
                                            {perk.title}
                                        </h4>
                                        <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans font-light leading-relaxed'>
                                            {perk.desc}
                                        </p>
                                    </div>
                                    <div className='pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#c8a97d] tracking-wider uppercase'>
                                        <span>Uključeno u ponudu</span>
                                        <span className='font-sans'>✓</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Callout: Free Shooters & Tasting */}
                <div className='mt-12 p-6 md:p-8 rounded-2xl border border-[#c8a97d]/25 bg-gradient-to-r from-[#181824] via-[#12121a] to-[#0a0a0e] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-full border border-[#c8a97d]/50 bg-[#c8a97d]/10 flex items-center justify-center shrink-0'>
                            <Gift
                                className='w-6 h-6 text-[#c8a97d]'
                                strokeWidth={1.5}
                            />
                        </div>
                        <div>
                            <h4 className='font-display text-lg md:text-xl text-[#f5f0e8]'>
                                Besplatna degustacija & gratis runda shootera
                            </h4>
                            <p className='text-xs text-[#b8b2a7] font-sans mt-0.5'>
                                Za svaki dogovoreni event organiziramo probno
                                kušanje i darujemo završnu shooter rundu.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onOpenQuote}
                        className='px-6 py-3 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-[0.18em] hover:bg-[#d4b886] transition-colors whitespace-nowrap shrink-0 shadow-lg flex items-center gap-1.5'>
                        <span>Rezervirajte Degustaciju</span>
                        <ArrowUpRight className='w-3.5 h-3.5' />
                    </button>
                </div>
            </div>
        </section>
    );
}
