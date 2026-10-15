import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

// Multi-page Views
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OfferPage from "./pages/OfferPage";
import MobileBarPage from "./pages/MobileBarPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    const handleOpenQuote = () => setIsQuoteOpen(true);
    const handleCloseQuote = () => setIsQuoteOpen(false);

    return (
        <BrowserRouter>
            <div className='min-h-screen bg-[#08080c] text-[#f5f0e8] selection:bg-[#c8a97d]/30 selection:text-white flex flex-col'>
                {/* Scroll to Top on Route Change */}
                <ScrollToTop />

                {/* Fixed Top Navigation Bar (Clean 4-link layout) */}
                <Navbar onOpenQuote={handleOpenQuote} />

                {/* Dynamic Page Router */}
                <main className='flex-1'>
                    <Routes>
                        <Route
                            path='/'
                            element={<HomePage onOpenQuote={handleOpenQuote} />}
                        />
                        <Route
                            path='/about'
                            element={
                                <AboutPage onOpenQuote={handleOpenQuote} />
                            }
                        />
                        <Route
                            path='/offer'
                            element={
                                <OfferPage onOpenQuote={handleOpenQuote} />
                            }
                        />
                        <Route
                            path='/mobile-bar'
                            element={
                                <MobileBarPage onOpenQuote={handleOpenQuote} />
                            }
                        />
                        <Route path='/gallery' element={<GalleryPage />} />
                        {/* Fallback to Home */}
                        <Route
                            path='*'
                            element={<HomePage onOpenQuote={handleOpenQuote} />}
                        />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />

                {/* Universal Quote / Inquiry Modal */}
                <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
            </div>
        </BrowserRouter>
    );
}
