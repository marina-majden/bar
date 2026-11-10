import { siteData } from "../data.js";
import AboutSection from "../components/AboutSection";
import PartnersMarquee from "../components/PartnersMarquee";
import ContactSection from "../components/ContactSection";
import {
    Sparkles,
    Award,
    Heart,
    CheckCircle2,
    ArrowUpRight,
} from "lucide-react";

export default function AboutPage({ onOpenQuote }) {
    return (
        <div className='pt-24 animate-fadeIn'>
            {/* Page Editorial Header */}
            <section className='relative py-20 md:py-24 bg-[#08080c] border-b border-white/10 overflow-hidden'>
                <div className='absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none' />
                <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
                    <div className='max-w-3xl'>
                        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 mb-4'>
                            <Sparkles className='w-3 h-3 text-[#c8a97d]' />
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d] font-sans'>
                                Naša Priča & Filozofija
                            </span>
                        </div>
                        <h1 className='font-display text-4xl sm:text-5xl md:text-6xl text-[#f5f0e8] font-normal leading-tight'>
                            O nama
                        </h1>
                        <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-4 leading-relaxed'>
                            Upoznajte tim koji stoji iza najtraženijeg mobilnog
                            cocktail bara u Hrvatskoj. Spoj strasti prema craft
                            miksologiji, vrhunskog gostoprimstva i scenskog
                            spektakla.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core About Section Component */}
            <AboutSection onOpenQuote={onOpenQuote} />

            {/* Additional Editorial Philosophy: Tri Stupa BarMena */}
            <section className='py-20 md:py-28 bg-[#0c0c12] border-t border-white/5'>
                <div className='max-w-7xl mx-auto px-6 md:px-12'>
                    <div className='text-center max-w-2xl mx-auto mb-16'>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2'>
                            Vrijednosti
                        </span>
                        <h2 className='font-display text-3xl md:text-4xl text-[#f5f0e8]'>
                            Tri Stupa Našeg Uspjeha
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-full bg-[#c8a97d]/10 border border-[#c8a97d]/30 flex items-center justify-center text-[#c8a97d]'>
                                <Award className='w-6 h-6' strokeWidth={1.5} />
                            </div>
                            <h3 className='font-display text-xl text-[#f5f0e8]'>
                                Vrhunska Sirovine
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans leading-relaxed'>
                                Koristimo isključivo premium žestoka pića,
                                svježe cijeđene agrume, domaće sirupe i
                                botaničke infuzije bez umjetnih aroma.
                            </p>
                        </div>

                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-full bg-[#c8a97d]/10 border border-[#c8a97d]/30 flex items-center justify-center text-[#c8a97d]'>
                                <Sparkles
                                    className='w-6 h-6'
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className='font-display text-xl text-[#f5f0e8]'>
                                Show & Interakcija
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans leading-relaxed'>
                                Barmeni s dugogodišnjim iskustvom unose zaraznu
                                energiju, atraktivne trikove i toplu interakciju
                                s vašim uzvanicima.
                            </p>
                        </div>

                        <div className='luxury-card rounded-2xl p-8 flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-full bg-[#c8a97d]/10 border border-[#c8a97d]/30 flex items-center justify-center text-[#c8a97d]'>
                                <Heart className='w-6 h-6' strokeWidth={1.5} />
                            </div>
                            <h3 className='font-display text-xl text-[#f5f0e8]'>
                                Potpuna Posvećenost
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans leading-relaxed'>
                                Od prvog telefonskog poziva i probne degustacije
                                do besprijekornog čišćenja lokacije na kraju
                                večeri – mi brinemo o svemu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners marquee */}
            <PartnersMarquee />

            {/* Direct Contact CTA */}
            <ContactSection />
        </div>
    );
}
