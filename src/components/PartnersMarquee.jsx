import { siteData } from "../data.js";

export default function PartnersMarquee() {
    // Duplicate partners array for a continuous seamless marquee loop
    const marqueeItems = [
        ...siteData.partners,
        ...siteData.partners,
        ...siteData.partners,
    ];

    return (
        <section className='relative py-8 bg-[#0a0a0e] border-y border-[#c8a97d]/15 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between'>
                <span className='text-[10px] uppercase tracking-[0.3em] text-[#878074]'>
                    Pouzdan Partner Vodećih Ugostiteljskih Brenda & Event
                    Agencija
                </span>
                <span className='hidden md:inline-block text-[10px] uppercase tracking-[0.25em] text-[#c8a97d]'>
                    Hrvatska • Istra • Dalmacija
                </span>
            </div>

            {/* Seamless Infinite Marquee */}
            <div className='flex overflow-hidden select-none'>
                <div className='animate-marquee flex items-center gap-12 sm:gap-16 py-2'>
                    {marqueeItems.map((partner, index) => (
                        <div
                            key={`${partner}-${index}`}
                            className='flex items-center gap-12 sm:gap-16'>
                            <span className='font-display text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-[#b8b2a7]/70 hover:text-[#c8a97d] transition-colors uppercase whitespace-nowrap cursor-default'>
                                {partner}
                            </span>
                            <span className='w-1.5 h-1.5 rounded-full bg-[#c8a97d]/40' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
