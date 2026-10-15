import { useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data.js";
import { ArrowUp, Check } from "lucide-react";

export default function Footer() {
    const { footer, header, brand } = siteData;
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (newsletterEmail) {
            setSubscribed(true);
            setNewsletterEmail("");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className='relative bg-[#050508] border-t border-[#c8a97d]/20 text-[#b8b2a7] font-sans pt-20 pb-12 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Top Row: Brand & Newsletter */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10'>
                    {/* Brand Identity */}
                    <div className='lg:col-span-5 flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full border border-[#c8a97d]/40 flex items-center justify-center bg-[#c8a97d]/10'>
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
                            <span className='font-display text-3xl tracking-[0.18em] text-[#f5f0e8] uppercase font-medium'>
                                Bar<span className='text-[#c8a97d]'>Men</span>
                            </span>
                        </div>

                        <p className='text-xs uppercase tracking-[0.25em] text-[#c8a97d]'>
                            {brand.title} • {brand.founder}
                        </p>

                        <p className='text-xs sm:text-sm text-[#878074] leading-relaxed max-w-sm mt-1'>
                            Ekskluzivni mobilni bar i miksologija po mjeri za
                            vjenčanja, korporativne zabave i privatne proslave
                            diljem cijele Hrvatske.
                        </p>
                    </div>

                    {/* Navigation Quick Links */}
                    <div className='lg:col-span-3 flex flex-col gap-3'>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2'>
                            Navigacija
                        </span>
                        <div className='grid grid-cols-2 gap-2 text-xs'>
                            {header.navigation.map((item) => {
                                if (item.href.startsWith("#")) {
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className='text-[#b8b2a7] hover:text-[#c8a97d] transition-colors py-1'>
                                            {item.label}
                                        </a>
                                    );
                                }
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className='text-[#b8b2a7] hover:text-[#c8a97d] transition-colors py-1'>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className='lg:col-span-4 flex flex-col gap-3'>
                        <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2'>
                            Newsletter
                        </span>
                        <p className='text-xs text-[#878074] leading-relaxed'>
                            {footer.newsletter}
                        </p>

                        {subscribed ? (
                            <div className='flex items-center gap-2 text-xs text-[#c8a97d] p-3 rounded-xl bg-[#c8a97d]/10 border border-[#c8a97d]/30 mt-2'>
                                <Check className='w-4 h-4' />
                                <span>
                                    Uspješno ste se pretplatili na newsletter!
                                </span>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubscribe}
                                className='mt-2 flex items-center gap-2'>
                                <input
                                    type='email'
                                    required
                                    value={newsletterEmail}
                                    onChange={(e) =>
                                        setNewsletterEmail(e.target.value)
                                    }
                                    placeholder='Vaša e-mail adresa'
                                    className='w-full px-4 py-2.5 rounded-full bg-[#101018] border border-white/10 text-xs text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                />
                                <button
                                    type='submit'
                                    className='px-5 py-2.5 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs tracking-wider uppercase hover:bg-[#d4b886] transition-colors shrink-0'>
                                    Prijava
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom Row: Copyright, Socials & Back to Top */}
                <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#878074]'>
                    <div>
                        <p>{footer.copyright}</p>
                    </div>

                    {/* Social Media Links */}
                    <div className='flex items-center gap-6'>
                        {header.socialLinks.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target='_blank'
                                rel='noreferrer'
                                className='text-[#b8b2a7] hover:text-[#c8a97d] transition-colors text-xs tracking-wider uppercase'>
                                {s.name}
                            </a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className='flex items-center gap-2 hover:text-[#c8a97d] transition-colors uppercase tracking-widest text-[10px]'>
                        <span>Vrh stranice</span>
                        <ArrowUp className='w-3.5 h-3.5' />
                    </button>
                </div>
            </div>
        </footer>
    );
}
