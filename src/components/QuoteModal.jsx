import { useState } from "react";
import { siteData } from "../data.js";
import { X, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "Vjenčanje",
        guestCount: "50-100",
        date: "",
        location: "",
        message: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='fixed inset-0 z-50 bg-[#08080c]/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-fadeIn'>
            <div className='relative w-full max-w-2xl rounded-2xl bg-[#12121a] border border-[#c8a97d]/40 p-6 sm:p-10 shadow-2xl my-8'>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-5 right-5 text-[#878074] hover:text-[#f5f0e8] p-1.5 transition-colors'
                    aria-label='Zatvori modal'>
                    <X className='w-6 h-6' />
                </button>

                {submitted ? (
                    <div className='py-12 flex flex-col items-center justify-center text-center gap-4 animate-fadeIn'>
                        <div className='w-16 h-16 rounded-full bg-[#c8a97d]/20 border border-[#c8a97d] flex items-center justify-center text-[#c8a97d]'>
                            <CheckCircle2 className='w-8 h-8' />
                        </div>
                        <h3 className='font-display text-2xl text-[#f5f0e8]'>
                            Zahvaljujemo na Vašem upitu!
                        </h3>
                        <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                            Ivan Kurak i BarMen tim javit će vam se u najkraćem
                            roku s personaliziranim prijedlogom i kalkulacijom.
                        </p>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                onClose();
                            }}
                            className='mt-4 px-8 py-3 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-wider'>
                            Zatvori
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className='mb-6'>
                            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a97d]/30 bg-[#c8a97d]/5 mb-2'>
                                <Sparkles className='w-3 h-3 text-[#c8a97d]' />
                                <span className='text-[10px] uppercase tracking-widest text-[#c8a97d]'>
                                    Neobvezujuća Ponuda
                                </span>
                            </div>
                            <h3 className='font-display text-2xl sm:text-3xl text-[#f5f0e8]'>
                                Zatražite Ponudu za Vaš Event
                            </h3>
                            <p className='text-xs text-[#b8b2a7] font-sans mt-1'>
                                Ispunite podatke i pripremit ćemo ponudu krojenu
                                po vašoj mjeri.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        Ime i Prezime *
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Ivan Horvat'
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                    />
                                </div>

                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        E-mail Adresa *
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='ivan@email.com'
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        Broj Telefona *
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='+385 99 123 4567'
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                    />
                                </div>

                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        Tip Događanja
                                    </label>
                                    <select
                                        name='eventType'
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'>
                                        <option value='Vjenčanje'>
                                            Vjenčanje
                                        </option>
                                        <option value='Korporativni event'>
                                            Korporativni event
                                        </option>
                                        <option value='Djevojačka večer'>
                                            Djevojačka večer
                                        </option>
                                        <option value='Rođendan'>
                                            Rođendan
                                        </option>
                                        <option value='Najam šanka'>
                                            Samo najam šanka
                                        </option>
                                        <option value='Ostalo'>Ostalo</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        Broj Gostiju
                                    </label>
                                    <select
                                        name='guestCount'
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'>
                                        <option value='Do 30'>
                                            Do 30 gostiju
                                        </option>
                                        <option value='30-80'>
                                            30 - 80 gostiju
                                        </option>
                                        <option value='80-150'>
                                            80 - 150 gostiju
                                        </option>
                                        <option value='150-300'>
                                            150 - 300 gostiju
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                        Datum i Lokacija
                                    </label>
                                    <input
                                        type='text'
                                        name='location'
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder='npr. 12.07.2026, Zadar'
                                        className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                    />
                                </div>
                            </div>

                            <div>
                                <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-1 font-sans'>
                                    Dodatne Napomene
                                </label>
                                <textarea
                                    name='message'
                                    rows='3'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Posebne želje oko koktela, teme eventa, brendiranja šanka...'
                                    className='w-full px-4 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-xs sm:text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors resize-none'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full py-3.5 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#d4b886] transition-colors shadow-lg flex items-center justify-center gap-2'>
                                <span>Pošaljite Zahtjev</span>
                                <Send className='w-4 h-4' />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
