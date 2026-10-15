/* LandingPage.jsx */
import { siteData } from "../data.js";
import { Loader, HeroBackground } from "../components/Basics.jsx";

export default function LandingPage() {
    return (
        <div className='min-h-screen bg-bg-primary text-text-primary font-body'>
            {/* Header */}
            <header className='flex justify-between items-center p-6 border-b border-gray-200'>
                <h1 className='text-2xl font-heading font-bold'>
                    {siteData.hero.title.split(" ")[0]}
                </h1>
                <nav className='gap-6 flex'>
                    {siteData.navigation.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className='hover:text-brand transition-colors'>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </header>

            <main>
                {/* Hero sekcija */}
                <section className='relative px-6 py-24 text-center overflow-hidden'>
                    <HeroBackground />
                    <h2 className='text-5xl font-heading font-extrabold mb-4'>
                        {siteData.hero.title}
                    </h2>
                    <p className='text-lg text-text-secondary mb-8'>
                        {siteData.hero.subtitle}
                    </p>
                    <button className='bg-btn-bg text-btn-text px-8 py-3 rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity'>
                        {siteData.hero.ctaText}
                    </button>
                </section>

                {/* Usluge */}
                <section id='services' className='py-20 px-6 bg-bg-secondary'>
                    <h3 className='text-3xl font-heading font-bold text-center mb-12'>
                        Usluge
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
                        {siteData.services.map((service) => (
                            <div
                                key={service.id}
                                className='bg-card-bg text-card-text p-6 rounded-[var(--radius-card)] shadow-xs border border-gray-100'>
                                <h4 className='text-xl font-bold mb-3'>
                                    {service.title}
                                </h4>
                                <p className='text-text-secondary'>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                id='contact'
                className='p-8 text-center border-t border-gray-200 mt-auto'>
                <p className='font-heading'>
                    Kontaktirajte nas:{" "}
                    <a
                        href={`mailto:${siteData.contact.email}`}
                        className='text-brand'>
                        {siteData.contact.email}
                    </a>
                </p>
            </footer>
        </div>
    );
}
