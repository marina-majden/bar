import MobileBarSection from "../components/MobileBarSection";
import PartnersMarquee from "../components/PartnersMarquee";
import ContactSection from "../components/ContactSection";
import { Sparkles, Layers, ShieldCheck, Zap, Clock, Ruler } from "lucide-react";

export default function MobileBarPage({ onOpenQuote }) {
    return (
        <div className='pt-24 animate-fadeIn'>
            {/* Page Header */}
            <section className='relative py-20 md:py-24 bg-[#08080c] border-b border-white/10 overflow-hidden'>
                <div className='absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none' />
                <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
                    <div className='max-w-3xl'>
                        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 mb-4'>
                            <Layers className='w-3 h-3 text-[#c8a97d]' />
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d] font-sans'>
                                Inox Mobilni Sustavi
                            </span>
                        </div>
                        <h1 className='font-display text-4xl sm:text-5xl md:text-6xl text-[#f5f0e8] font-normal leading-tight'>
                            Mobilni Šankovi
                        </h1>
                        <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-4 leading-relaxed'>
                            Profesionalni barmenski šankovi od nehrđajućeg inox
                            čelika na kotačima, s ugrađenom rasvjetom,
                            magnetskim panelima za brendiranje i potpunom
                            autonomijom na lokaciji.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Mobile Bar Showcase */}
            <MobileBarSection onOpenQuote={onOpenQuote} />

            {/* Technical Logistics & Setup FAQ */}
            <section className='py-20 md:py-28 bg-[#0c0c12] border-t border-white/5'>
                <div className='max-w-7xl mx-auto px-6 md:px-12'>
                    <div className='max-w-3xl mb-16'>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2'>
                            Logistika & Uvjeti
                        </span>
                        <h2 className='font-display text-3xl md:text-4xl text-[#f5f0e8]'>
                            Kako Funkcionira Postavljanje na Lokaciji?
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-3'>
                            <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] mb-2'>
                                <Clock className='w-5 h-5' strokeWidth={1.5} />
                            </div>
                            <h3 className='font-serif text-lg text-[#f5f0e8]'>
                                60 Minuta Montaže
                            </h3>
                            <p className='text-xs text-[#b8b2a7] leading-relaxed'>
                                Na lokaciju stižemo minimalno 2 sata prije
                                početka eventa. Šank je operativan i spreman za
                                rad u roku od samo sat vremena.
                            </p>
                        </div>

                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-3'>
                            <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] mb-2'>
                                <Zap className='w-5 h-5' strokeWidth={1.5} />
                            </div>
                            <h3 className='font-serif text-lg text-[#f5f0e8]'>
                                Standardni Priključak
                            </h3>
                            <p className='text-xs text-[#b8b2a7] leading-relaxed'>
                                Potrebna nam je samo standardna električna
                                utičnica (220V) za hlađenje leda i rasvjetu. Sve
                                ostale sustave nosimo sa sobom.
                            </p>
                        </div>

                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-3'>
                            <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] mb-2'>
                                <Ruler className='w-5 h-5' strokeWidth={1.5} />
                            </div>
                            <h3 className='font-serif text-lg text-[#f5f0e8]'>
                                Unutarnji & Vanjski Prostori
                            </h3>
                            <p className='text-xs text-[#b8b2a7] leading-relaxed'>
                                Zahvaljujući kvalitetnim gumenim kotačima, šank
                                bez tragova ulazi kroz standardna vrata dvorana,
                                hotela ili se postavlja na travnjake i terase.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <PartnersMarquee />
            <ContactSection />
        </div>
    );
}
