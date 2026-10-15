import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PartnersMarquee from "../components/PartnersMarquee";
import EventsSection from "../components/EventsSection";
import ContactSection from "../components/ContactSection";
function HomePage({ onOpenQuote }) {
    return (
        <div className='animate-fadeIn'>
            {/* 1. Hero Section with Animated Mixology & Authentic Recipe Blueprint */}
            <HeroSection onOpenQuote={onOpenQuote} />

            {/* 2. Features Section: "Zašto baš mi?" (Comes right after hero section) */}
            <FeaturesSection onOpenQuote={onOpenQuote} />

            {/* 3. Partners Marquee */}
            <PartnersMarquee />

            {/* 4. Events Section: "Želite svoj event učiniti nezaboravnim?" (Stays on homepage) */}
            <EventsSection onOpenQuote={onOpenQuote} />

            {/* 5. Contact Section */}
            <ContactSection />
        </div>
    );
}
export default HomePage;
