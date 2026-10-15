import { useState } from "react";
import { siteData } from "../data.js";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    MessageSquare,
    Clock,
} from "lucide-react";

export default function ContactSection() {
    const { contact } = siteData.footer;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            // Keep success message visible
        }, 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const cleanPhone = contact.phone.replace(/[\s+]/g, "");

    return (
        <section
            id='contact'
            className='relative py-24 md:py-32 bg-[#0c0c12] border-t border-[#c8a97d]/15 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Section Header */}
                <div className='max-w-3xl mb-16 pb-6 border-b border-white/10'>
                    <span className='text-[10px] uppercase tracking-[0.3em] text-[#c8a97d] block mb-2 font-sans'>
                        Započnimo Dogovor
                    </span>
                    <h2 className='font-display text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] font-normal leading-tight'>
                        Kontakt & Upit za Ponudu
                    </h2>
                    <p className='text-sm sm:text-base text-[#b8b2a7] font-sans mt-3 leading-relaxed'>
                        Ispunite obrazac u nastavku ili nas kontaktirajte
                        izravno putem telefona ili WhatsAppa za brzi dogovor.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
                    {/* Left: Contact Info & Coverage */}
                    <div className='lg:col-span-5 flex flex-col gap-8'>
                        <div className='space-y-6'>
                            <h3 className='font-display text-2xl text-[#f5f0e8]'>
                                Izravni Kontakt
                            </h3>
                            <p className='text-xs sm:text-sm text-[#b8b2a7] font-sans leading-relaxed'>
                                Dostupni smo za savjetovanje o odabiru koktela,
                                tehničkim uvjetima prostora i kreiranju ponude
                                prilagođene vašem budžetu.
                            </p>

                            <div className='space-y-4'>
                                <a
                                    href={`tel:${cleanPhone}`}
                                    className='flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-white/5 hover:border-[#c8a97d]/40 transition-colors group'>
                                    <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] group-hover:bg-[#c8a97d] group-hover:text-[#08080c] transition-colors'>
                                        <Phone
                                            className='w-5 h-5'
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <span className='text-[10px] uppercase tracking-wider text-[#878074] block'>
                                            Nazovite nas
                                        </span>
                                        <span className='font-sans text-sm sm:text-base text-[#f5f0e8] font-medium'>
                                            {contact.phone}
                                        </span>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${contact.email}`}
                                    className='flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-white/5 hover:border-[#c8a97d]/40 transition-colors group'>
                                    <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] group-hover:bg-[#c8a97d] group-hover:text-[#08080c] transition-colors'>
                                        <Mail
                                            className='w-5 h-5'
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <span className='text-[10px] uppercase tracking-wider text-[#878074] block'>
                                            E-mail adresa
                                        </span>
                                        <span className='font-sans text-sm sm:text-base text-[#f5f0e8] font-medium'>
                                            {contact.email}
                                        </span>
                                    </div>
                                </a>

                                <a
                                    href={`https://wa.me/${cleanPhone}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-white/5 hover:border-[#c8a97d]/40 transition-colors group'>
                                    <div className='w-10 h-10 rounded-full bg-[#c8a97d]/10 flex items-center justify-center text-[#c8a97d] group-hover:bg-[#c8a97d] group-hover:text-[#08080c] transition-colors'>
                                        <MessageSquare
                                            className='w-5 h-5'
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <span className='text-[10px] uppercase tracking-wider text-[#878074] block'>
                                            WhatsApp Poruka
                                        </span>
                                        <span className='font-sans text-sm sm:text-base text-[#f5f0e8] font-medium'>
                                            Brzi odgovor putem chata
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Coverage Details Card */}
                        <div className='p-6 rounded-2xl bg-[#101018] border border-[#c8a97d]/20'>
                            <div className='flex items-center gap-3 mb-2 text-[#c8a97d]'>
                                <MapPin className='w-5 h-5' strokeWidth={1.5} />
                                <h4 className='font-serif text-base text-[#f5f0e8]'>
                                    Područje Djelovanja
                                </h4>
                            </div>
                            <p className='text-xs text-[#b8b2a7] font-sans leading-relaxed'>
                                Sa sjedištem u Zagrebu, mobilni šank i tim
                                barmena dolaze na lokacije diljem cijele
                                Hrvatske (Istra, Kvarner, Dalmacija, Slavonija i
                                otoci).
                            </p>
                        </div>
                    </div>

                    {/* Right: Bespoke Inquiry Form */}
                    <div className='lg:col-span-7 rounded-2xl bg-[#12121a] border border-[#c8a97d]/30 p-8 md:p-10 shadow-2xl relative'>
                        {submitted ? (
                            <div className='py-12 flex flex-col items-center justify-center text-center gap-4 animate-fadeIn'>
                                <div className='w-16 h-16 rounded-full bg-[#c8a97d]/20 border border-[#c8a97d] flex items-center justify-center text-[#c8a97d]'>
                                    <CheckCircle2 className='w-8 h-8' />
                                </div>
                                <h3 className='font-display text-2xl text-[#f5f0e8]'>
                                    Zahvaljujemo na Vašem upitu!
                                </h3>
                                <p className='text-sm text-[#b8b2a7] font-sans max-w-md'>
                                    Vaš zahtjev je uspješno zaprimljen. Ivan
                                    Kurak i tim BarMen javit će vam se s
                                    detaljnom personaliziranom ponudom u
                                    najkraćem roku.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className='mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs text-[#b8b2a7] hover:text-white transition-colors'>
                                    Pošaljite još jedan upit
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            Ime i Prezime *
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='npr. Marko Horvat'
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            E-mail Adresa *
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='marko@email.com'
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            Broj Telefona *
                                        </label>
                                        <input
                                            type='tel'
                                            name='phone'
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder='+385 91 ...'
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            Tip Eventa
                                        </label>
                                        <select
                                            name='eventType'
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'>
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
                                            <option value='Drugo'>
                                                Ostalo
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            Okvirni Broj Gostiju
                                        </label>
                                        <select
                                            name='guestCount'
                                            value={formData.guestCount}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'>
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
                                        <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                            Datum i Lokacija
                                        </label>
                                        <input
                                            type='text'
                                            name='location'
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder='npr. 15.06.2026, Split'
                                            className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-[11px] uppercase tracking-wider text-[#878074] mb-2 font-sans'>
                                        Vaša Poruka ili Posebne Želje
                                    </label>
                                    <textarea
                                        name='message'
                                        rows='4'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Opišite detalje eventa, željene koktele, stil uređenja...'
                                        className='w-full px-4 py-3 rounded-xl bg-[#08080c] border border-white/10 text-sm text-[#f5f0e8] focus:border-[#c8a97d] focus:outline-none transition-colors resize-none'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full py-4 rounded-full bg-[#c8a97d] text-[#08080c] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#d4b886] transition-colors shadow-lg flex items-center justify-center gap-2'>
                                    <span>Pošaljite Zahtjev za Ponudu</span>
                                    <Send className='w-4 h-4' />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
