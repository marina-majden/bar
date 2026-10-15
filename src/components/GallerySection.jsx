import { useState } from "react";
import { siteData } from "../data.js";
import { Maximize2, X, Sparkles } from "lucide-react";

export default function GallerySection() {
    const { gallery } = siteData;
    const [lightboxIndex, setLightboxIndex] = useState(null);

    return (
        <section
            id='gallery'
            className='relative py-24 md:py-32 bg-[#08080c] overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10'>
                    <div>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                            Vizualni Dnevnik
                        </span>
                        <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                            Galerija Doživljaja
                        </h2>
                    </div>
                    <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                        Trenuci s naših evenata diljem Hrvatske – od intimnih
                        vjenčanja do velikih gala proslava.
                    </p>
                </div>

                {/* Editorial Asymmetrical Gallery Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {gallery.map((item, index) => (
                        <div
                            key={item.title}
                            onClick={() => setLightboxIndex(index)}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c8a97d]/50 transition-all duration-700 aspect-[4/3] bg-[#12121a] shadow-xl ${
                                index === 0
                                    ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]"
                                    : ""
                            }`}>
                            <img
                                src={item.url}
                                alt={item.title}
                                className='w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700'
                                loading='lazy'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity' />

                            {/* Caption Overlay */}
                            <div className='absolute bottom-0 inset-x-0 p-6 flex items-end justify-between'>
                                <div>
                                    <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d] block mb-1'>
                                        {item.category}
                                    </span>
                                    <h3 className='font-display text-xl text-[#f5f0e8]'>
                                        {item.title}
                                    </h3>
                                    <p className='text-xs text-[#b8b2a7] font-sans mt-1 line-clamp-1'>
                                        {item.caption}
                                    </p>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-[#08080c]/80 border border-white/20 flex items-center justify-center text-[#c8a97d] opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <Maximize2 className='w-4 h-4' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div
                    className='fixed inset-0 z-50 bg-[#08080c]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-fadeIn'
                    onClick={() => setLightboxIndex(null)}>
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className='absolute top-6 right-6 text-[#f5f0e8] hover:text-[#c8a97d] p-2 z-10'
                        aria-label='Zatvori'>
                        <X className='w-7 h-7' />
                    </button>

                    <div
                        className='relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#c8a97d]/30 shadow-2xl'
                        onClick={(e) => e.stopPropagation()}>
                        <img
                            src={gallery[lightboxIndex].url}
                            alt={gallery[lightboxIndex].title}
                            className='w-full h-auto max-h-[80vh] object-contain'
                        />
                        <div className='p-4 bg-[#08080c]/90 text-left border-t border-white/10'>
                            <span className='text-[10px] uppercase tracking-wider text-[#c8a97d]'>
                                {gallery[lightboxIndex].category}
                            </span>
                            <h4 className='font-display text-lg text-[#f5f0e8]'>
                                {gallery[lightboxIndex].title}
                            </h4>
                            <p className='text-xs text-[#b8b2a7] font-sans mt-0.5'>
                                {gallery[lightboxIndex].caption}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
