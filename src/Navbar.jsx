import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../data.js";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export default function Navbar({ onOpenQuote }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper for navigation action
    const handleNavClick = (href) => {
        setMobileMenuOpen(false);
        if (href.startsWith("#")) {
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#08080c]/92 backdrop-blur-md border-b border-[#c8a97d]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    : "bg-gradient-to-b from-[#08080c]/90 via-[#08080c]/40 to-transparent py-5"
            }`}>
            <div className='max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between'>
                {/* Brand Logo - Leads to Homepage */}
                <Link
                    to='/'
                    className='group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90'>
                    <div className='w-9 h-9 rounded-full border border-[#c8a97d]/40 flex items-center justify-center bg-[#c8a97d]/10 group-hover:border-[#c8a97d] transition-colors'>
                        <svg
                            viewBox='0 0 24 24'
                            className='w-5 h-5 text-[#c8a97d]'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.5'>
                            <path
                                d='M8 21h8m-4-7v7M4 4h16l-7 8.5V14h-2v-.5L4 4z'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-display text-2xl tracking-[0.18em] text-[#f5f0e8] uppercase font-medium leading-none'>
                            Bar<span className='text-[#c8a97d]'>Men</span>
                        </span>
                        <span className='text-[10px] tracking-[0.25em] text-[#c8a97d]/80 uppercase font-sans mt-1'>
                            {siteData.brand.founder}
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation - 4 clean page links + contact */}
                <nav className='hidden lg:flex items-center gap-9'>
                    {siteData.header.navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        const isHash = item.href.startsWith("#");

                        if (isHash) {
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className='text-xs uppercase tracking-[0.22em] text-[#b8b2a7] hover:text-[#c8a97d] transition-colors duration-300 py-1 relative group font-sans'>
                                    {item.label}
                                    <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-[#c8a97d] transition-all duration-300 group-hover:w-full' />
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`text-xs uppercase tracking-[0.22em] transition-colors duration-300 py-1 relative group font-sans ${
                                    isActive
                                        ? "text-[#c8a97d] font-medium"
                                        : "text-[#b8b2a7] hover:text-[#c8a97d]"
                                }`}>
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-[1px] bg-[#c8a97d] transition-all duration-300 ${
                                        isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className='hidden md:flex items-center gap-6'>
                    <a
                        href={`tel:${siteData.footer.contact.phone.replace(/\s+/g, "")}`}
                        className='flex items-center gap-2 text-xs tracking-wider text-[#b8b2a7] hover:text-[#c8a97d] transition-colors'>
                        <Phone
                            className='w-3.5 h-3.5 text-[#c8a97d]'
                            strokeWidth={1.5}
                        />
                        <span className='font-sans'>
                            {siteData.footer.contact.phone}
                        </span>
                    </a>

                    <button
                        onClick={onOpenQuote}
                        className='relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#c8a97d]/40 text-xs uppercase tracking-[0.18em] text-[#f5f0e8] hover:border-[#c8a97d] transition-all duration-300'>
                        <span className='relative z-10 flex items-center gap-1.5'>
                            Zatražite Ponudu
                            <ArrowUpRight className='w-3.5 h-3.5 text-[#c8a97d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                        </span>
                        <div className='absolute inset-0 bg-[#c8a97d]/10 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </button>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='lg:hidden text-[#f5f0e8] p-2 hover:text-[#c8a97d] transition-colors'
                    aria-label='Navigacijski izbornik'>
                    {mobileMenuOpen ? (
                        <X className='w-6 h-6' />
                    ) : (
                        <Menu className='w-6 h-6' />
                    )}
                </button>
            </div>

            {/* Mobile Full-Screen Overlay Menu */}
            {mobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 top-[65px] bg-[#08080c]/98 backdrop-blur-2xl border-t border-[#c8a97d]/15 flex flex-col justify-between p-8 z-40 animate-fadeIn'>
                    <div className='flex flex-col gap-6 pt-4'>
                        <div className='text-[11px] tracking-[0.3em] uppercase text-[#c8a97d] border-b border-[#c8a97d]/20 pb-2'>
                            Navigacija
                        </div>
                        {siteData.header.navigation.map((item) => {
                            const isHash = item.href.startsWith("#");
                            if (isHash) {
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() =>
                                            handleNavClick(item.href)
                                        }
                                        className='font-display text-2xl tracking-wider text-[#f5f0e8] hover:text-[#c8a97d] transition-colors flex items-center justify-between'>
                                        {item.label}
                                        <span className='text-xs font-sans tracking-widest text-[#c8a97d]/50'>
                                            →
                                        </span>
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className='font-display text-2xl tracking-wider text-[#f5f0e8] hover:text-[#c8a97d] transition-colors flex items-center justify-between'>
                                    {item.label}
                                    <span className='text-xs font-sans tracking-widest text-[#c8a97d]/50'>
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className='pt-8 border-t border-white/10 flex flex-col gap-4'>
                        <a
                            href={`tel:${siteData.footer.contact.phone.replace(/\s+/g, "")}`}
                            className='flex items-center gap-3 text-sm text-[#b8b2a7]'>
                            <Phone
                                className='w-4 h-4 text-[#c8a97d]'
                                strokeWidth={1.5}
                            />
                            <span>{siteData.footer.contact.phone}</span>
                        </a>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenQuote();
                            }}
                            className='w-full py-3.5 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-[#d4b886] transition-colors'>
                            Zatražite Ponudu za Event
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
