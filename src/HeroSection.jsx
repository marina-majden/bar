import { useState, useEffect, useCallback, useMemo } from "react";
import "./HeroSection.css";

/* ─── Cocktail data ─── */
const COCKTAILS = [
    {
        name: "Gin & Tonic",
        color: "#e8d78a",
        colorRgb: "232,215,138",
        ingredients: ["Gin", "Tonic", "Limeta", "Led"],
    },
    {
        name: "Aperol Spritz",
        color: "#c44e1c",
        colorRgb: "196,78,28",
        ingredients: ["Aperol", "Prosecco", "Soda", "Naranča"],
    },
    {
        name: "Pornstar Martini",
        color: "#e8b830",
        colorRgb: "232,184,48",
        ingredients: ["Vodka", "Passion fruit", "Citrus", "Prosecco"],
    },
    {
        name: "Moscow Mule",
        color: "#c5c434",
        colorRgb: "197,196,52",
        ingredients: ["Vodka", "Ginger", "Citrus", "Limeta"],
    },
    {
        name: "Negroni",
        color: "#8b1a1a",
        colorRgb: "139,26,26",
        ingredients: ["Gin", "Campari", "Vermouth", "Naranča"],
    },
];

const AUTO_PLAY_MS = 7000;

/* ─── SVG Ingredient Icons ─── */
function BottleIcon({ color = "#e8d78a" }) {
    return (
        <svg viewBox='0 0 60 90' className='hero__ingredient-icon'>
            <defs>
                <linearGradient id='bottleGrad' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stopColor={color} stopOpacity='0.9' />
                    <stop offset='100%' stopColor={color} stopOpacity='0.5' />
                </linearGradient>
            </defs>
            {/* Cork */}
            <rect x='22' y='2' width='16' height='12' rx='3' fill='#b8956a' />
            <rect
                x='24'
                y='4'
                width='12'
                height='3'
                rx='1'
                fill='#d4ad7d'
                opacity='0.6'
            />
            {/* Neck */}
            <rect
                x='24'
                y='14'
                width='12'
                height='16'
                rx='2'
                fill='url(#bottleGrad)'
            />
            {/* Body */}
            <path
                d='M18,30 L24,30 L24,14 L36,14 L36,30 L42,30 L42,82 Q42,88 36,88 L24,88 Q18,88 18,82 Z'
                fill='url(#bottleGrad)'
                stroke='rgba(255,255,255,0.15)'
                strokeWidth='1'
            />
            {/* Liquid inside */}
            <path
                d='M20,50 L40,50 L40,82 Q40,86 36,86 L24,86 Q20,86 20,82 Z'
                fill={color}
                opacity='0.7'
            />
            {/* Highlight */}
            <rect
                x='22'
                y='35'
                width='4'
                height='30'
                rx='2'
                fill='white'
                opacity='0.12'
            />
            {/* Shine line */}
            <line
                x1='34'
                y1='35'
                x2='34'
                y2='55'
                stroke='white'
                strokeWidth='1'
                opacity='0.08'
            />
        </svg>
    );
}

function IceCubeIcon() {
    return (
        <svg viewBox='0 0 60 60' className='hero__ingredient-icon'>
            <defs>
                <linearGradient id='iceGrad' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stopColor='#d0e8f0' stopOpacity='0.7' />
                    <stop offset='50%' stopColor='#a8d4e6' stopOpacity='0.4' />
                    <stop offset='100%' stopColor='#c0dce8' stopOpacity='0.6' />
                </linearGradient>
            </defs>
            {/* Main cube face */}
            <path
                d='M10,22 L30,10 L50,22 L50,42 L30,54 L10,42 Z'
                fill='url(#iceGrad)'
                stroke='rgba(255,255,255,0.3)'
                strokeWidth='1'
            />
            {/* Top face */}
            <path
                d='M10,22 L30,10 L50,22 L30,32 Z'
                fill='rgba(200,230,245,0.5)'
                stroke='rgba(255,255,255,0.2)'
                strokeWidth='0.5'
            />
            {/* Right face */}
            <path
                d='M50,22 L30,32 L30,54 L50,42 Z'
                fill='rgba(160,210,230,0.35)'
            />
            {/* Highlight */}
            <path
                d='M15,25 L28,17 L35,21 L22,29 Z'
                fill='white'
                opacity='0.2'
            />
            {/* Crack lines */}
            <line
                x1='25'
                y1='28'
                x2='35'
                y2='38'
                stroke='white'
                strokeWidth='0.5'
                opacity='0.25'
            />
            <line
                x1='20'
                y1='35'
                x2='28'
                y2='30'
                stroke='white'
                strokeWidth='0.5'
                opacity='0.15'
            />
        </svg>
    );
}

function CitrusIcon({ color = "#e8d78a" }) {
    return (
        <svg viewBox='0 0 60 60' className='hero__ingredient-icon'>
            <defs>
                <radialGradient id='citrusGrad'>
                    <stop offset='0%' stopColor='#fff8e0' />
                    <stop offset='40%' stopColor={color} stopOpacity='0.8' />
                    <stop offset='100%' stopColor={color} />
                </radialGradient>
            </defs>
            {/* Outer rind */}
            <circle
                cx='30'
                cy='30'
                r='25'
                fill={color}
                stroke='rgba(255,255,255,0.2)'
                strokeWidth='1'
            />
            {/* Inner flesh */}
            <circle cx='30' cy='30' r='20' fill='url(#citrusGrad)' />
            {/* Center */}
            <circle cx='30' cy='30' r='4' fill='white' opacity='0.4' />
            {/* Segments */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                    key={angle}
                    x1='30'
                    y1='30'
                    x2={30 + 18 * Math.cos((angle * Math.PI) / 180)}
                    y2={30 + 18 * Math.sin((angle * Math.PI) / 180)}
                    stroke='white'
                    strokeWidth='0.8'
                    opacity='0.3'
                />
            ))}
            {/* Highlight */}
            <ellipse
                cx='22'
                cy='22'
                rx='6'
                ry='4'
                fill='white'
                opacity='0.15'
                transform='rotate(-30 22 22)'
            />
        </svg>
    );
}

function HerbIcon() {
    return (
        <svg viewBox='0 0 60 70' className='hero__ingredient-icon'>
            <defs>
                <linearGradient id='leafGrad' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#7cb342' />
                    <stop offset='100%' stopColor='#4a8520' />
                </linearGradient>
            </defs>
            {/* Stem */}
            <path
                d='M30,65 Q28,45 32,30 Q34,20 30,10'
                fill='none'
                stroke='#5a9a2a'
                strokeWidth='2'
            />
            {/* Leaves */}
            <ellipse
                cx='22'
                cy='30'
                rx='12'
                ry='7'
                fill='url(#leafGrad)'
                transform='rotate(-30 22 30)'
                opacity='0.9'
            />
            <ellipse
                cx='38'
                cy='25'
                rx='11'
                ry='6'
                fill='url(#leafGrad)'
                transform='rotate(25 38 25)'
                opacity='0.85'
            />
            <ellipse
                cx='25'
                cy='18'
                rx='10'
                ry='5.5'
                fill='url(#leafGrad)'
                transform='rotate(-15 25 18)'
                opacity='0.8'
            />
            {/* Leaf veins */}
            <line
                x1='16'
                y1='30'
                x2='28'
                y2='30'
                stroke='rgba(255,255,255,0.15)'
                strokeWidth='0.5'
                transform='rotate(-30 22 30)'
            />
            <line
                x1='32'
                y1='25'
                x2='44'
                y2='25'
                stroke='rgba(255,255,255,0.15)'
                strokeWidth='0.5'
                transform='rotate(25 38 25)'
            />
        </svg>
    );
}

/* Icon chooser based on ingredient name */
function IngredientIcon({ name, cocktailColor }) {
    const n = name.toLowerCase();
    if (n.includes("led") || n.includes("ice") || n.includes("kock"))
        return <IceCubeIcon />;
    if (
        n.includes("limet") ||
        n.includes("citrus") ||
        n.includes("naranč") ||
        n.includes("passion") ||
        n.includes("ginger")
    )
        return <CitrusIcon color={cocktailColor} />;
    if (n.includes("ruž") || n.includes("herb") || n.includes("mint"))
        return <HerbIcon />;
    return <BottleIcon color={cocktailColor} />;
}

/* ─── Glass SVG ─── */
function GlassSVG({ liquidColor, fillLevel }) {
    // fillLevel: 0 = empty, 1 = full
    const liquidY = 175 - fillLevel * 100; // from bottom ~175 to top ~75

    return (
        <svg viewBox='0 0 110 220' className='hero__glass-svg'>
            <defs>
                <linearGradient id='glassGrad' x1='0' y1='0' x2='1' y2='0'>
                    <stop offset='0%' stopColor='rgba(255,255,255,0.12)' />
                    <stop offset='50%' stopColor='rgba(255,255,255,0.04)' />
                    <stop offset='100%' stopColor='rgba(255,255,255,0.08)' />
                </linearGradient>
                <linearGradient
                    id={`liquidGrad-${liquidColor.replace("#", "")}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'>
                    <stop
                        offset='0%'
                        stopColor={liquidColor}
                        stopOpacity='0.85'
                    />
                    <stop
                        offset='100%'
                        stopColor={liquidColor}
                        stopOpacity='0.95'
                    />
                </linearGradient>
                <clipPath id='glassClip'>
                    <path d='M25,40 L22,170 Q22,185 40,185 L70,185 Q88,185 88,170 L85,40 Z' />
                </clipPath>
            </defs>

            {/* Glass body */}
            <path
                className='hero__glass-body'
                d='M25,40 L22,170 Q22,185 40,185 L70,185 Q88,185 88,170 L85,40 Z'
                fill='url(#glassGrad)'
            />

            {/* Liquid */}
            <g clipPath='url(#glassClip)'>
                <rect
                    className='hero__liquid'
                    x='22'
                    y={liquidY}
                    width='66'
                    height={185 - liquidY}
                    fill={`url(#liquidGrad-${liquidColor.replace("#", "")})`}
                    style={{
                        transition:
                            "y 1.5s cubic-bezier(0.4,0,0.2,1), height 1.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                />
                {/* Wave surface */}
                <ellipse
                    className='hero__liquid-surface'
                    cx='55'
                    cy={liquidY}
                    rx='32'
                    ry='4'
                    fill={liquidColor}
                    opacity='0.4'
                    style={{ transition: "cy 1.5s cubic-bezier(0.4,0,0.2,1)" }}
                />
                {/* Bubbles in liquid */}
                {fillLevel > 0.3 && (
                    <>
                        <circle
                            className='hero__bubble hero__bubble--delay-1'
                            cx='40'
                            cy={liquidY + 30}
                            r='2'
                            fill='white'
                            opacity='0.2'
                        />
                        <circle
                            className='hero__bubble hero__bubble--delay-2'
                            cx='60'
                            cy={liquidY + 50}
                            r='1.5'
                            fill='white'
                            opacity='0.15'
                        />
                        <circle
                            className='hero__bubble hero__bubble--delay-3'
                            cx='50'
                            cy={liquidY + 20}
                            r='1'
                            fill='white'
                            opacity='0.2'
                        />
                    </>
                )}
            </g>

            {/* Glass rim */}
            <ellipse
                className='hero__glass-rim'
                cx='55'
                cy='40'
                rx='31'
                ry='6'
            />

            {/* Glass highlight (left edge reflection) */}
            <path
                className='hero__glass-highlight'
                d='M28,50 L26,165 Q27,168 29,168 L29,50 Z'
            />

            {/* Thin right-side reflection */}
            <path
                d='M82,50 L84,165 Q83,168 81,168 L81,50 Z'
                fill='white'
                opacity='0.04'
            />

            {/* Stem */}
            <line
                className='hero__glass-stem'
                x1='55'
                y1='185'
                x2='55'
                y2='200'
            />

            {/* Base */}
            <ellipse
                className='hero__glass-base'
                cx='55'
                cy='200'
                rx='22'
                ry='5'
            />

            {/* Glass bottom base highlight */}
            <ellipse
                cx='55'
                cy='199'
                rx='14'
                ry='2'
                fill='white'
                opacity='0.06'
            />
        </svg>
    );
}

/* ─── Garnish SVG (citrus wheel on rim) ─── */
function GarnishSVG({ color }) {
    return (
        <svg
            viewBox='0 0 40 40'
            width='45'
            height='45'
            style={{ transform: "translate(-5px, -95px) rotate(15deg)" }}>
            <circle cx='20' cy='20' r='16' fill={color} opacity='0.8' />
            <circle cx='20' cy='20' r='12' fill={color} opacity='0.5' />
            <circle cx='20' cy='20' r='3' fill='white' opacity='0.3' />
            {[0, 60, 120, 180, 240, 300].map((a) => (
                <line
                    key={a}
                    x1='20'
                    y1='20'
                    x2={20 + 11 * Math.cos((a * Math.PI) / 180)}
                    y2={20 + 11 * Math.sin((a * Math.PI) / 180)}
                    stroke='white'
                    strokeWidth='0.6'
                    opacity='0.25'
                />
            ))}
        </svg>
    );
}

/* ─── Particles ─── */
function Particles() {
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 4,
            dur: `${6 + Math.random() * 10}s`,
            delay: `${Math.random() * 10}s`,
            maxOpacity: 0.15 + Math.random() * 0.35,
        }));
    }, []);

    return (
        <div className='hero__particles'>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className='hero__particle'
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        "--dur": p.dur,
                        "--delay": p.delay,
                        "--max-opacity": p.maxOpacity,
                    }}
                />
            ))}
        </div>
    );
}

/* ─── Main HeroSection ─── */
export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [phase, setPhase] = useState("float"); // "float" | "pour" | "filled"
    const [fillLevel, setFillLevel] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const cocktail = COCKTAILS[activeIndex];

    /* Animate the cocktail-making sequence */
    useEffect(() => {
        setPhase("float");
        setFillLevel(0);
        setIsTransitioning(false);

        // Phase 1: Ingredients float (2s)
        const pourTimer = setTimeout(() => {
            setPhase("pour");
        }, 2500);

        // Phase 2: Liquid fills (after pour starts)
        const fillTimer = setTimeout(() => {
            setFillLevel(0.75);
        }, 3200);

        // Phase 3: Filled state
        const filledTimer = setTimeout(() => {
            setPhase("filled");
            setFillLevel(0.85);
        }, 4500);

        return () => {
            clearTimeout(pourTimer);
            clearTimeout(fillTimer);
            clearTimeout(filledTimer);
        };
    }, [activeIndex]);

    /* Auto-play slider */
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, AUTO_PLAY_MS);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % COCKTAILS.length);
        }, 300);
    }, []);

    const goToPrev = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveIndex(
                (prev) => (prev - 1 + COCKTAILS.length) % COCKTAILS.length,
            );
        }, 300);
    }, []);

    const goTo = useCallback(
        (idx) => {
            if (idx === activeIndex) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex(idx);
            }, 300);
        },
        [activeIndex],
    );

    const getIngredientClass = (idx) => {
        const base = `hero__ingredient hero__ingredient--pos-${idx}`;
        if (phase === "pour") return `${base} hero__ingredient--pour-${idx}`;
        if (phase === "float" || phase === "filled")
            return `${base} hero__ingredient--float-${idx}`;
        return base;
    };

    return (
        <section className='hero'>
            {/* Background effects */}
            <div className='hero__vignette' />
            <Particles />

            {/* Content grid */}
            <div className='hero__content'>
                {/* ─── Text side ─── */}
                <div className='hero__text'>
                    <div className='hero__brand'>
                        <svg className='hero__brand-icon' viewBox='0 0 50 50'>
                            {/* Cocktail glass icon */}
                            <path
                                d='M15,8 L35,8 L28,28 L28,38 L34,42 L34,44 L16,44 L16,42 L22,38 L22,28 Z'
                                fill='none'
                                stroke='var(--color-brand, #ffcc4c)'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            {/* Olive on stick */}
                            <line
                                x1='25'
                                y1='6'
                                x2='32'
                                y2='2'
                                stroke='var(--color-brand, #ffcc4c)'
                                strokeWidth='1.5'
                            />
                            <circle
                                cx='33'
                                cy='2'
                                r='2.5'
                                fill='var(--color-brand, #ffcc4c)'
                                opacity='0.8'
                            />
                        </svg>
                        <span className='hero__brand-name'>BarMen</span>
                    </div>

                    <p className='hero__tagline'>Cocktail Catering Hrvatska</p>

                    <h1 className='hero__subtitle'>
                        Donosimo vrhunsku koktel avanturu izravno na vašu
                        lokaciju! Vaš event zaslužuje savršene koktele.
                    </h1>

                    <button className='hero__cta' type='button'>
                        Zatražite ponudu
                        <svg
                            className='hero__cta-arrow'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'>
                            <path
                                d='M4 10H16M16 10L11 5M16 10L11 15'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>

                    {/* Slider controls */}
                    <div className='hero__nav'>
                        <button
                            className='hero__nav-btn'
                            onClick={goToPrev}
                            type='button'
                            aria-label='Prethodni koktel'>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'>
                                <path
                                    d='M11 4L6 9L11 14'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                        <div className='hero__dots'>
                            {COCKTAILS.map((c, i) => (
                                <button
                                    key={c.name}
                                    className={`hero__dot ${i === activeIndex ? "hero__dot--active" : ""}`}
                                    onClick={() => goTo(i)}
                                    type='button'
                                    aria-label={`Prikaži ${c.name}`}
                                />
                            ))}
                        </div>
                        <button
                            className='hero__nav-btn'
                            onClick={goToNext}
                            type='button'
                            aria-label='Sljedeći koktel'>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'>
                                <path
                                    d='M7 4L12 9L7 14'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ─── Illustration side ─── */}
                <div className='hero__illustration'>
                    <div className='hero__scene' key={activeIndex}>
                        {/* Cocktail name */}
                        <div className='hero__cocktail-name'>
                            {cocktail.name}
                        </div>

                        {/* Glow behind glass */}
                        <div
                            className='hero__glow'
                            style={{
                                "--glow-color": `rgba(${cocktail.colorRgb}, 0.12)`,
                            }}
                        />

                        {/* Central glass */}
                        <div className='hero__glass-container'>
                            <GlassSVG
                                liquidColor={cocktail.color}
                                fillLevel={fillLevel}
                            />
                        </div>

                        {/* Garnish */}
                        <div
                            className={`hero__garnish ${phase === "filled" ? "hero__garnish--visible" : ""}`}
                            style={{ left: "50%", top: "50%" }}>
                            <GarnishSVG color={cocktail.color} />
                        </div>

                        {/* Ingredients */}
                        {cocktail.ingredients.map((ing, i) => (
                            <div key={ing} className={getIngredientClass(i)}>
                                <IngredientIcon
                                    name={ing}
                                    cocktailColor={cocktail.color}
                                />
                                <span className='hero__ingredient-label'>
                                    {ing}
                                </span>
                            </div>
                        ))}

                        {/* Decorative arrow SVGs */}
                        {cocktail.ingredients.map((_, i) => (
                            <svg
                                key={`arrow-${i}`}
                                className={`hero__arrow ${phase === "float" ? "hero__arrow--visible" : ""}`}
                                style={{
                                    width: 60,
                                    height: 60,
                                    ...getArrowPosition(i),
                                }}
                                viewBox='0 0 60 60'>
                                <path
                                    className='hero__arrow-path'
                                    d={getArrowPath(i)}
                                />
                                <polygon
                                    className='hero__arrow-head'
                                    points={getArrowHead(i)}
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Arrow positioning helpers ─── */
function getArrowPosition(idx) {
    const positions = [
        { top: "30%", left: "28%" },
        { top: "25%", right: "25%" },
        { bottom: "32%", right: "22%" },
        { bottom: "25%", left: "25%" },
    ];
    return positions[idx] || positions[0];
}

function getArrowPath(idx) {
    const paths = [
        "M10,10 Q30,30 50,45",
        "M50,10 Q30,30 10,45",
        "M50,50 Q30,30 10,15",
        "M10,50 Q30,30 50,15",
    ];
    return paths[idx] || paths[0];
}

function getArrowHead(idx) {
    const heads = [
        "46,42 54,48 48,50",
        "6,42 14,48 8,50",
        "6,12 14,8 8,18",
        "46,12 54,8 48,18",
    ];
    return heads[idx] || heads[0];
}
