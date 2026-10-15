import { useState } from "react";
import { siteData } from "../data.js";
import {
    Check,
    ShieldCheck,
    Zap,
    Maximize2,
    Palette,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export default function MobileBarSection({ onOpenQuote }) {
    const { mobileBar } = siteData;
    const [selectedSize, setSelectedSize] = useState("grand"); // "compact" | "grand"

    return (
        <section
            id='mobile-bar'
            className='relative py-24 md:py-32 bg-[#08080c] overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10'>
                    <div>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                            Oprema & Tehnički Standardi
                        </span>
                        <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                            {mobileBar.title}
                        </h2>
                    </div>
                    <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                        {mobileBar.subtitle}
                    </p>
                </div>

                {/* Main Showcase Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
                    {/* Left: Bar Visual & Interactive Size Selector */}
                    <div className='lg:col-span-7 flex flex-col gap-6'>
                        <div className='relative rounded-2xl overflow-hidden border border-[#c8a97d]/30 bg-[#12121a] aspect-[16/10] shadow-2xl group'>
                            <img
                                src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop'
                                alt='Inox Mobilni Cocktail Bar'
                                className='w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80' />

                            {/* Floating Size Pill Indicator */}
                            <div className='absolute top-4 left-4 p-2.5 rounded-full bg-[#08080c]/80 backdrop-blur-md border border-white/10 flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-[#c8a97d] animate-pulse' />
                                <span className='text-[11px] font-sans uppercase tracking-wider text-[#f5f0e8]'>
                                    {selectedSize === "grand"
                                        ? "Grand Šank (3m) • do 300 gostiju"
                                        : "Kompaktni Šank (1.5m) • do 80 gostiju"}
                                </span>
                            </div>

                            {/* Interactive Size Switcher Overlay */}
                            <div className='absolute bottom-4 right-4 flex items-center gap-2 bg-[#08080c]/90 backdrop-blur-md p-1.5 rounded-full border border-white/10'>
                                <button
                                    onClick={() => setSelectedSize("compact")}
                                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                                        selectedSize === "compact"
                                            ? "bg-[#c8a97d] text-[#08080c] font-medium"
                                            : "text-[#b8b2a7] hover:text-white"
                                    }`}>
                                    Kompakt (1.5m)
                                </button>
                                <button
                                    onClick={() => setSelectedSize("grand")}
                                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                                        selectedSize === "grand"
                                            ? "bg-[#c8a97d] text-[#08080c] font-medium"
                                            : "text-[#b8b2a7] hover:text-white"
                                    }`}>
                                    Grand (3.0m)
                                </button>
                            </div>
                        </div>

                        {/* 4 Feature Points from original data */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            {mobileBar.points.map((point) => (
                                <div
                                    key={point}
                                    className='flex items-start gap-3 p-3.5 rounded-xl bg-[#101018] border border-white/5'>
                                    <div className='w-5 h-5 rounded-full bg-[#c8a97d]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c8a97d] text-xs'>
                                        ✓
                                    </div>
                                    <span className='text-xs text-[#d0c8bb] font-sans leading-relaxed'>
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technical Specifications & Branding Capabilities */}
                    <div className='lg:col-span-5 flex flex-col gap-6'>
                        <div className='space-y-3'>
                            <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d]'>
                                Modularnost Bez Kompromisa
                            </span>
                            <h3 className='font-display text-2xl md:text-3xl text-[#f5f0e8]'>
                                Vrhunska estetika, maksimalna higijena.
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans font-light leading-relaxed'>
                                {mobileBar.description}
                            </p>
                        </div>

                        {/* Specs List */}
                        <div className='space-y-3'>
                            {mobileBar.specs.map((spec) => (
                                <div
                                    key={spec.title}
                                    className='p-4 rounded-xl bg-[#12121a]/80 border border-[#c8a97d]/15 hover:border-[#c8a97d]/40 transition-colors'>
                                    <h4 className='font-serif text-sm text-[#c8a97d] font-medium'>
                                        {spec.title}
                                    </h4>
                                    <p className='text-xs text-[#b8b2a7] font-sans mt-1 leading-relaxed'>
                                        {spec.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Custom Branding Notice */}
                        <div className='p-4 rounded-xl bg-gradient-to-r from-[#c8a97d]/15 to-transparent border border-[#c8a97d]/30 flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <Palette
                                    className='w-5 h-5 text-[#c8a97d]'
                                    strokeWidth={1.5}
                                />
                                <span className='text-xs text-[#f5f0e8] font-sans'>
                                    Želite brendirani šank s logom vašeg brenda
                                    ili vjenčanja?
                                </span>
                            </div>
                            <button
                                onClick={onOpenQuote}
                                className='text-xs text-[#c8a97d] hover:underline font-medium uppercase tracking-wider flex items-center gap-1 shrink-0'>
                                <span>Upit</span>
                                <ArrowRight className='w-3 h-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
