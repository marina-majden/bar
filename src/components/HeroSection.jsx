import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data.js";
import {
    Sparkles,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Layers,
    Wine,
    Droplets,
    Eye,
} from "lucide-react";

/* ─── SVG Ingredient Icons ─── */
function BottleIcon({ color = "#e8d78a" }) {
    return (
        <svg
            viewBox='0 0 60 90'
            className='w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]'>
            <defs>
                <linearGradient
                    id={`botGrad-${color.replace("#", "")}`}
                    x1='0'
                    y1='0'
                    x2='1'
                    y2='1'>
                    <stop offset='0%' stopColor={color} stopOpacity='0.9' />
                    <stop offset='100%' stopColor={color} stopOpacity='0.4' />
                </linearGradient>
            </defs>
            <rect x='22' y='2' width='16' height='10' rx='2' fill='#c8a97d' />
            <rect
                x='25'
                y='12'
                width='10'
                height='14'
                fill={`url(#botGrad-${color.replace("#", "")})`}
            />
            <path
                d='M18,26 L25,26 L25,12 L35,12 L35,26 L42,26 L44,80 Q44,86 38,86 L22,86 Q16,86 16,80 Z'
                fill={`url(#botGrad-${color.replace("#", "")})`}
                stroke='rgba(255,255,255,0.2)'
                strokeWidth='1'
            />
            <path
                d='M18,48 L42,48 L43,80 Q43,84 38,84 L22,84 Q17,84 17,80 Z'
                fill={color}
                opacity='0.75'
            />
            <rect
                x='20'
                y='32'
                width='3'
                height='28'
                rx='1.5'
                fill='white'
                opacity='0.25'
            />
        </svg>
    );
}

function IceCubeIcon() {
    return (
        <svg
            viewBox='0 0 60 60'
            className='w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]'>
            <path
                d='M10,22 L30,10 L50,22 L50,42 L30,54 L10,42 Z'
                fill='rgba(220, 240, 255, 0.35)'
                stroke='rgba(255,255,255,0.45)'
                strokeWidth='1'
            />
            <path
                d='M10,22 L30,10 L50,22 L30,32 Z'
                fill='rgba(255, 255, 255, 0.3)'
            />
            <path
                d='M50,22 L30,32 L30,54 L50,42 Z'
                fill='rgba(180, 220, 245, 0.25)'
            />
            <line
                x1='24'
                y1='25'
                x2='36'
                y2='37'
                stroke='white'
                strokeWidth='0.8'
                opacity='0.4'
            />
        </svg>
    );
}

function CitrusIcon({ color = "#e8d78a" }) {
    return (
        <svg
            viewBox='0 0 60 60'
            className='w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]'>
            <circle
                cx='30'
                cy='30'
                r='24'
                fill={color}
                stroke='rgba(255,255,255,0.3)'
                strokeWidth='1.5'
            />
            <circle
                cx='30'
                cy='30'
                r='19'
                fill='none'
                stroke='white'
                strokeWidth='1'
                opacity='0.5'
            />
            <circle cx='30' cy='30' r='4' fill='white' opacity='0.7' />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                    key={angle}
                    x1='30'
                    y1='30'
                    x2={30 + 17 * Math.cos((angle * Math.PI) / 180)}
                    y2={30 + 17 * Math.sin((angle * Math.PI) / 180)}
                    stroke='white'
                    strokeWidth='1'
                    opacity='0.4'
                />
            ))}
        </svg>
    );
}

function BotanicalIcon() {
    return (
        <svg
            viewBox='0 0 60 60'
            className='w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]'>
            <path
                d='M30,55 Q28,35 32,15'
                fill='none'
                stroke='#c8a97d'
                strokeWidth='1.5'
            />
            <ellipse
                cx='22'
                cy='25'
                rx='10'
                ry='6'
                fill='#a88d64'
                transform='rotate(-25 22 25)'
                opacity='0.85'
            />
            <ellipse
                cx='38'
                cy='20'
                rx='9'
                ry='5'
                fill='#c8a97d'
                transform='rotate(25 38 20)'
                opacity='0.9'
            />
            <circle cx='30' cy='12' r='4' fill='#d4a373' />
        </svg>
    );
}

function IngredientIcon({ name, color }) {
    const n = name.toLowerCase();
    if (n.includes("led") || n.includes("kock")) return <IceCubeIcon />;
    if (
        n.includes("limet") ||
        n.includes("naranč") ||
        n.includes("citrus") ||
        n.includes("passion") ||
        n.includes("ginger")
    ) {
        return <CitrusIcon color={color} />;
    }
    if (n.includes("ruž") || n.includes("slamk") || n.includes("botan")) {
        return <BotanicalIcon />;
    }
    return <BottleIcon color={color} />;
}

/* ─── Animated Glass Component ─── */
function AnimatedGlass({ color, fillLevel, cocktailName }) {
    const liquidY = 180 - fillLevel * 110;

    return (
        <div className='relative w-[150px] h-[260px] md:w-[180px] md:h-[300px] flex items-center justify-center'>
            {/* Glow beneath glass */}
            <div
                className='absolute inset-0 rounded-full blur-2xl transition-all duration-1000 opacity-40'
                style={{ backgroundColor: color }}
            />

            <svg
                viewBox='0 0 120 240'
                className='w-full h-full relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]'>
                <defs>
                    <linearGradient
                        id='glassReflection'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='0'>
                        <stop offset='0%' stopColor='rgba(255,255,255,0.22)' />
                        <stop offset='40%' stopColor='rgba(255,255,255,0.03)' />
                        <stop offset='70%' stopColor='rgba(255,255,255,0.02)' />
                        <stop
                            offset='100%'
                            stopColor='rgba(255,255,255,0.18)'
                        />
                    </linearGradient>

                    <linearGradient
                        id='liquidShade'
                        x1='0'
                        y1='0'
                        x2='0'
                        y2='1'>
                        <stop
                            offset='0%'
                            stopColor={color}
                            stopOpacity='0.85'
                        />
                        <stop
                            offset='100%'
                            stopColor={color}
                            stopOpacity='0.98'
                        />
                    </linearGradient>

                    <clipPath id='glassInterior'>
                        <path d='M25,35 L20,185 Q20,202 42,202 L78,202 Q100,202 100,185 L95,35 Z' />
                    </clipPath>
                </defs>

                {/* Glass outline & body */}
                <path
                    d='M25,35 L20,185 Q20,202 42,202 L78,202 Q100,202 100,185 L95,35 Z'
                    fill='url(#glassReflection)'
                    stroke='rgba(255,255,255,0.3)'
                    strokeWidth='1.5'
                />

                {/* Animated Liquid */}
                <g clipPath='url(#glassInterior)'>
                    <rect
                        x='18'
                        y={liquidY}
                        width='84'
                        height={202 - liquidY}
                        fill='url(#liquidShade)'
                        style={{
                            transition:
                                "y 1.4s cubic-bezier(0.16, 1, 0.3, 1), height 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    />

                    {/* Wave surface */}
                    <ellipse
                        cx='60'
                        cy={liquidY}
                        rx='38'
                        ry='5'
                        fill={color}
                        opacity='0.6'
                        style={{
                            transition: "cy 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    />

                    {/* Rising effervescence */}
                    {fillLevel > 0.3 && (
                        <>
                            <circle
                                cx='45'
                                cy={liquidY + 40}
                                r='2'
                                fill='white'
                                opacity='0.4'
                                className='animate-ping'
                            />
                            <circle
                                cx='70'
                                cy={liquidY + 65}
                                r='1.5'
                                fill='white'
                                opacity='0.5'
                            />
                            <circle
                                cx='55'
                                cy={liquidY + 25}
                                r='2'
                                fill='white'
                                opacity='0.3'
                            />
                        </>
                    )}
                </g>

                {/* Rim */}
                <ellipse
                    cx='60'
                    cy='35'
                    rx='36'
                    ry='7'
                    fill='none'
                    stroke='rgba(255,255,255,0.45)'
                    strokeWidth='1.5'
                />

                {/* Highlights */}
                <path
                    d='M26,45 L22,180 Q23,184 26,184 L29,45 Z'
                    fill='white'
                    opacity='0.12'
                />
                <path
                    d='M94,45 L97,180 Q96,184 93,184 L91,45 Z'
                    fill='white'
                    opacity='0.08'
                />

                {/* Stem & Heavy Base */}
                <rect
                    x='57'
                    y='202'
                    width='6'
                    height='16'
                    fill='rgba(255,255,255,0.2)'
                />
                <ellipse
                    cx='60'
                    cy='220'
                    rx='28'
                    ry='6'
                    fill='rgba(255,255,255,0.1)'
                    stroke='rgba(255,255,255,0.3)'
                    strokeWidth='1.2'
                />
            </svg>

            {/* Cocktail garnish on rim */}
            {fillLevel > 0.5 && (
                <div className='absolute -top-3 right-6 z-20 animate-fadeIn transition-opacity duration-700'>
                    <CitrusIcon color={color} />
                </div>
            )}
        </div>
    );
}

export default function HeroSection({ onOpenQuote }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState("animated"); // "animated" | "diagram"
    const [fillLevel, setFillLevel] = useState(0.8);
    const [isPoured, setIsPoured] = useState(false);

    const cocktails = siteData.featuredCocktails;
    const current = cocktails[activeIndex];

    // Trigger ingredient flow animation on slide change
    useEffect(() => {
        setIsPoured(false);
        setFillLevel(0.2);

        const pourTimer = setTimeout(() => {
            setIsPoured(true);
            setFillLevel(0.85);
        }, 600);

        return () => clearTimeout(pourTimer);
    }, [activeIndex]);

    const nextCocktail = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % cocktails.length);
    }, [cocktails.length]);

    const prevCocktail = useCallback(() => {
        setActiveIndex(
            (prev) => (prev - 1 + cocktails.length) % cocktails.length,
        );
    }, [cocktails.length]);

    return (
        <section
            id='hero'
            className='relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#08080c]'>
            {/* Background luxury elements */}
            <div className='absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none' />
            <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none' />

            {/* Ambient dynamic glow based on current cocktail */}
            <div
                className='absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000'
                style={{ backgroundColor: current.glowColor }}
            />

            <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
                    {/* Left Column: Brand Story & Call to Action */}
                    <div className='lg:col-span-5 flex flex-col gap-6 text-left'>
                        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 self-start'>
                            <Sparkles
                                className='w-3.5 h-3.5 text-[#c8a97d]'
                                strokeWidth={1.5}
                            />
                            <span className='text-[11px] font-sans tracking-[0.25em] uppercase text-[#c8a97d]'>
                                Ekskluzivni Cocktail Bar
                            </span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-[1.08] font-normal tracking-wide'>
                                Spektakl u čaši. <br />
                                <span className='italic font-serif gold-gradient-text'>
                                    Doživljaj
                                </span>{" "}
                                na vašoj lokaciji.
                            </h1>
                            <p className='text-sm sm:text-base text-[#b8b2a7] font-sans font-light leading-relaxed mt-2 max-w-xl'>
                                Donosimo vrhunsku koktel avanturu, inox šankove
                                vrhunskog dizajna, show barmene i revolucionarnu
                                Flavour Blaster™ aromu.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap items-center gap-4 pt-2'>
                            <button
                                onClick={onOpenQuote}
                                className='px-7 py-3.5 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#d4b886] transition-all duration-300 shadow-[0_10px_25px_rgba(200,169,125,0.25)] flex items-center gap-2 group'>
                                <span>Zatražite Ponudu</span>
                                <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                            </button>

                            <Link
                                to='/offer'
                                className='px-6 py-3.5 rounded-full border border-[#c8a97d]/30 text-xs tracking-[0.2em] uppercase text-[#f5f0e8] hover:border-[#c8a97d] hover:bg-[#c8a97d]/5 transition-all duration-300'>
                                Istražite Ponudu (80+)
                            </Link>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className='pt-6 border-t border-white/10 grid grid-cols-3 gap-4'>
                            <div>
                                <span className='block font-display text-xl sm:text-2xl text-[#c8a97d] font-normal'>
                                    80+
                                </span>
                                <span className='text-[10px] tracking-wider uppercase text-[#878074]'>
                                    Recepata
                                </span>
                            </div>
                            <div>
                                <span className='block font-display text-xl sm:text-2xl text-[#c8a97d] font-normal'>
                                    100%
                                </span>
                                <span className='text-[10px] tracking-wider uppercase text-[#878074]'>
                                    Mobilni Šank
                                </span>
                            </div>
                            <div>
                                <span className='block font-display text-xl sm:text-2xl text-[#c8a97d] font-normal'>
                                    HR
                                </span>
                                <span className='text-[10px] tracking-wider uppercase text-[#878074]'>
                                    Cijela Regija
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Cocktail Stage & Formula Blueprint */}
                    <div className='lg:col-span-7 flex flex-col items-center'>
                        {/* Control Header: Cocktail Selector & View Switcher */}
                        <div className='w-full flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10'>
                            {/* Cocktail Switcher Tabs */}
                            <div className='flex items-center gap-1.5 overflow-x-auto py-1 max-w-full'>
                                {cocktails.map((c, idx) => (
                                    <button
                                        key={c.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-sans transition-all duration-300 whitespace-nowrap ${
                                            idx === activeIndex
                                                ? "bg-[#c8a97d] text-[#08080c] font-medium shadow-md"
                                                : "text-[#b8b2a7] hover:text-[#f5f0e8] hover:bg-white/5"
                                        }`}>
                                        {c.name}
                                    </button>
                                ))}
                            </div>

                            {/* View Mode Toggle: Animation vs Official Diagram Poster */}
                            <div className='flex items-center p-1 rounded-full bg-[#12121a] border border-white/10 text-xs'>
                                <button
                                    onClick={() => setViewMode("animated")}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors ${
                                        viewMode === "animated"
                                            ? "bg-[#c8a97d]/20 text-[#c8a97d] font-medium"
                                            : "text-[#878074] hover:text-white"
                                    }`}>
                                    <Droplets className='w-3 h-3' />
                                    <span>Animacija</span>
                                </button>
                                <button
                                    onClick={() => setViewMode("diagram")}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors ${
                                        viewMode === "diagram"
                                            ? "bg-[#c8a97d]/20 text-[#c8a97d] font-medium"
                                            : "text-[#878074] hover:text-white"
                                    }`}>
                                    <Layers className='w-3 h-3' />
                                    <span>Receptura</span>
                                </button>
                            </div>
                        </div>

                        {/* Interactive Stage Box */}
                        <div className='relative w-full min-h-[460px] md:min-h-[500px] rounded-2xl border border-[#c8a97d]/20 bg-gradient-to-b from-[#12121a]/90 via-[#0c0c12]/90 to-[#08080c] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]'>
                            {/* Cocktail Title & Tasting Profile Banner */}
                            <div className='flex items-start justify-between z-20'>
                                <div>
                                    <span className='text-[10px] uppercase tracking-[0.25em] text-[#c8a97d]'>
                                        BarMen Signature Series
                                    </span>
                                    <h2 className='font-display text-2xl md:text-3xl text-[#f5f0e8]'>
                                        {current.name}
                                    </h2>
                                    <p className='text-xs text-[#b8b2a7] font-sans mt-0.5'>
                                        {current.subtitle}
                                    </p>
                                </div>
                                <div className='hidden sm:flex flex-col items-end text-right'>
                                    <span className='text-[10px] uppercase tracking-wider text-[#878074]'>
                                        Profil okusa
                                    </span>
                                    <span className='text-xs text-[#c8a97d] font-serif italic'>
                                        {current.tasteProfile}
                                    </span>
                                    <span className='text-[10px] text-[#878074] mt-0.5'>
                                        {current.glassware}
                                    </span>
                                </div>
                            </div>

                            {/* View Mode 1: Pure SVG Animated Crafting Experience */}
                            {viewMode === "animated" ? (
                                <div className='relative flex-1 flex items-center justify-center my-4'>
                                    {/* Central Animated Glass */}
                                    <div className='relative z-10'>
                                        <AnimatedGlass
                                            color={current.color}
                                            fillLevel={fillLevel}
                                            cocktailName={current.name}
                                        />
                                    </div>

                                    {/* Orbiting Ingredient Satellites with directional cues */}
                                    <div className='absolute inset-0 pointer-events-none'>
                                        {current.ingredients
                                            .slice(0, 4)
                                            .map((ing, i) => {
                                                const positions = [
                                                    "top-4 left-4 md:left-8",
                                                    "top-4 right-4 md:right-8",
                                                    "bottom-4 right-4 md:right-8",
                                                    "bottom-4 left-4 md:left-8",
                                                ];
                                                return (
                                                    <div
                                                        key={ing.name}
                                                        className={`absolute ${positions[i]} flex flex-col items-center gap-1.5 transition-all duration-700 ${
                                                            isPoured
                                                                ? "scale-95 opacity-90"
                                                                : "scale-105 translate-y-1"
                                                        }`}>
                                                        <div className='p-2 rounded-xl bg-[#161622]/80 border border-white/10 backdrop-blur-md shadow-lg pointer-events-auto hover:border-[#c8a97d]/50 transition-colors'>
                                                            <IngredientIcon
                                                                name={ing.name}
                                                                color={
                                                                    current.color
                                                                }
                                                            />
                                                        </div>
                                                        <span className='text-[10px] md:text-xs font-serif text-[#f5f0e8] tracking-wider text-center max-w-[90px] leading-tight'>
                                                            {ing.name}
                                                        </span>
                                                        <span className='text-[9px] text-[#878074] tracking-wide text-center max-w-[90px]'>
                                                            {ing.role}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ) : (
                                /* View Mode 2: Authentic High-Resolution Recipe Diagram Poster */
                                <div className='relative flex-1 flex items-center justify-center my-4'>
                                    <div className='relative max-w-xs md:max-w-sm rounded-xl overflow-hidden border border-[#c8a97d]/30 shadow-2xl group'>
                                        <img
                                            src={current.diagramImg}
                                            alt={`${current.name} - Sastojci i priprema`}
                                            className='w-full h-auto object-cover max-h-[340px] transform group-hover:scale-105 transition-transform duration-700'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-60' />
                                        <div className='absolute bottom-3 left-3 right-3 p-2 rounded bg-[#08080c]/80 backdrop-blur-sm border border-white/10 text-[11px] text-[#b8b2a7]'>
                                            Ivan Kurak autorska specifikacija
                                            omjera & dekoracije
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Bottom Note & Interactive Navigation Arrows */}
                            <div className='flex items-center justify-between pt-3 border-t border-white/10 z-20'>
                                <p className='text-[11px] text-[#878074] font-sans max-w-sm leading-tight'>
                                    {current.notes}
                                </p>

                                <div className='flex items-center gap-2'>
                                    <button
                                        onClick={prevCocktail}
                                        aria-label='Prethodni koktel'
                                        className='w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:border-[#c8a97d] hover:text-[#c8a97d] flex items-center justify-center transition-colors'>
                                        <ChevronLeft className='w-4 h-4' />
                                    </button>
                                    <button
                                        onClick={nextCocktail}
                                        aria-label='Sljedeći koktel'
                                        className='w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:border-[#c8a97d] hover:text-[#c8a97d] flex items-center justify-center transition-colors'>
                                        <ChevronRight className='w-4 h-4' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
