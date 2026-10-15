import { useState } from "react";
import { siteData } from "../data.js";
import {
    Wine,
    Sparkles,
    Filter,
    ChevronRight,
    X,
    ArrowUpRight,
} from "lucide-react";

export default function CocktailMenuSection({ onOpenQuote }) {
    const [activeFilter, setActiveFilter] = useState("Sve");
    const [selectedDrink, setSelectedDrink] = useState(null);

    const categories = [
        "Sve",
        "Classic",
        "Signature",
        "Refreshing",
        "Spritz",
        "Luxury",
    ];

    const filteredCocktails =
        activeFilter === "Sve"
            ? siteData.cocktailMenu
            : siteData.cocktailMenu.filter(
                  (item) => item.category === activeFilter,
              );

    return (
        <section
            id='cocktails'
            className='relative py-24 md:py-32 bg-[#0c0c12] border-t border-[#c8a97d]/15 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10'>
                    <div>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                            Kolekcija & Karta Pića
                        </span>
                        <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                            Ponuda od 80+ Koktela
                        </h2>
                    </div>
                    <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                        Od bezvremenskih klasika s potpisom do modernih
                        signature kreacija kreiranih točno prema temi vašeg
                        eventa.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className='flex items-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none'>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                                activeFilter === cat
                                    ? "bg-[#c8a97d] text-[#08080c] font-medium shadow-md"
                                    : "bg-[#12121a] text-[#b8b2a7] border border-white/10 hover:border-[#c8a97d]/40 hover:text-white"
                            }`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cocktails Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {filteredCocktails.map((cocktail) => (
                        <div
                            key={cocktail.name}
                            onClick={() => setSelectedDrink(cocktail)}
                            className='group cursor-pointer rounded-2xl overflow-hidden bg-[#101018] border border-white/10 hover:border-[#c8a97d]/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:-translate-y-1.5'>
                            {/* Cocktail Photo Container */}
                            <div className='relative aspect-[4/3] overflow-hidden bg-[#08080c]'>
                                <img
                                    src={cocktail.image}
                                    alt={cocktail.name}
                                    className='w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700'
                                    loading='lazy'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-transparent opacity-90' />

                                {/* Category Tag */}
                                <span className='absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08080c]/80 backdrop-blur-md border border-[#c8a97d]/30 text-[10px] uppercase tracking-wider text-[#c8a97d]'>
                                    {cocktail.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className='p-6 flex flex-col justify-between flex-1 gap-4'>
                                <div>
                                    <h3 className='font-display text-xl text-[#f5f0e8] group-hover:text-[#c8a97d] transition-colors'>
                                        {cocktail.name}
                                    </h3>
                                    <p className='text-xs text-[#878074] font-sans mt-0.5 tracking-wide'>
                                        Baza: {cocktail.alcohol}
                                    </p>
                                    <p className='text-xs text-[#b8b2a7] font-sans mt-2.5 line-clamp-2 leading-relaxed'>
                                        {cocktail.flavor}
                                    </p>
                                </div>

                                <div className='pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#c8a97d] tracking-wider uppercase'>
                                    <span>Pogledaj detalje</span>
                                    <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Menu Tailoring Notice */}
                <div className='mt-16 p-8 rounded-2xl border border-[#c8a97d]/20 bg-gradient-to-b from-[#161622]/80 to-[#0e0e16] text-center max-w-3xl mx-auto'>
                    <Sparkles
                        className='w-6 h-6 text-[#c8a97d] mx-auto mb-3'
                        strokeWidth={1.5}
                    />
                    <h3 className='font-display text-2xl text-[#f5f0e8]'>
                        Želite kreirati vlastiti Signature Cocktail za vaš
                        event?
                    </h3>
                    <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans mt-2 max-w-xl mx-auto leading-relaxed'>
                        Zajedno s vama osmišljavamo unikatno piće s posebnim
                        nazivom, dekoracijom i personaliziranom kartom pića.
                    </p>
                    <button
                        onClick={onOpenQuote}
                        className='mt-6 px-7 py-3 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#d4b886] transition-colors inline-flex items-center gap-2 shadow-lg'>
                        <span>Personalizirajte Jelovnik</span>
                        <ArrowUpRight className='w-3.5 h-3.5' />
                    </button>
                </div>
            </div>

            {/* Cocktail Details Modal */}
            {selectedDrink && (
                <div className='fixed inset-0 z-50 bg-[#08080c]/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn'>
                    <div className='relative w-full max-w-lg rounded-2xl bg-[#12121a] border border-[#c8a97d]/40 p-6 md:p-8 shadow-2xl'>
                        <button
                            onClick={() => setSelectedDrink(null)}
                            className='absolute top-4 right-4 text-[#b8b2a7] hover:text-[#f5f0e8] p-1'
                            aria-label='Zatvori'>
                            <X className='w-5 h-5' />
                        </button>

                        <div className='flex flex-col gap-4'>
                            <div className='relative rounded-xl overflow-hidden aspect-[16/10]'>
                                <img
                                    src={selectedDrink.image}
                                    alt={selectedDrink.name}
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent' />
                                <span className='absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#08080c]/80 text-[11px] text-[#c8a97d] uppercase tracking-wider'>
                                    {selectedDrink.category}
                                </span>
                            </div>

                            <div>
                                <h3 className='font-display text-2xl text-[#f5f0e8]'>
                                    {selectedDrink.name}
                                </h3>
                                <p className='text-xs text-[#c8a97d] mt-1 font-serif italic'>
                                    Baza: {selectedDrink.alcohol}
                                </p>
                            </div>

                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans leading-relaxed'>
                                {selectedDrink.flavor}
                            </p>

                            <div className='pt-4 border-t border-white/10 flex items-center justify-between'>
                                <span className='text-[11px] text-[#878074] uppercase tracking-wider'>
                                    Uključeno u barmensku kartu
                                </span>
                                <button
                                    onClick={() => {
                                        setSelectedDrink(null);
                                        onOpenQuote();
                                    }}
                                    className='px-4 py-2 rounded-full bg-[#c8a97d] text-[#08080c] text-xs uppercase tracking-wider font-medium hover:bg-[#d4b886] transition-colors'>
                                    Zatraži ovaj koktel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
