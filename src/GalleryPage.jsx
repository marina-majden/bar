import GallerySection from "../components/GallerySection";
import PartnersMarquee from "../components/PartnersMarquee";
import ContactSection from "../components/ContactSection";
import { Sparkles, Camera } from "lucide-react";

export default function GalleryPage() {
    return (
        <div className='pt-24 animate-fadeIn'>
            {/* Page Header */}
            <section className='relative py-20 md:py-24 bg-[#08080c] border-b border-white/10 overflow-hidden'>
                <div className='absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none' />
                <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
                    <div className='max-w-3xl'>
                        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 mb-4'>
                            <Camera className='w-3 h-3 text-[#c8a97d]' />
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d] font-sans'>
                                Vizualni Trenuci
                            </span>
                        </div>
                        <h1 className='font-display text-4xl sm:text-5xl md:text-6xl text-[#f5f0e8] font-normal leading-tight'>
                            Galerija
                        </h1>
                        <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-4 leading-relaxed'>
                            Pogledajte atmosferu, dekoracije, show izvedbe i
                            detalje s evenata koje smo imali čast obogatiti
                            našim koktel cateringom.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Gallery Component with Lightbox */}
            <GallerySection />

            <PartnersMarquee />
            <ContactSection />
        </div>
    );
}
