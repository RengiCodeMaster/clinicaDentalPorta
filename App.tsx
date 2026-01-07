
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialists from './components/Specialists';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Specialists />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />

      {/* Floating Elements */}
      <WhatsAppFab />
      <AIChat />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.02); }
          100% { transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        .animate-slide-up { animation: slideUp 0.4s ease-out; }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }
        .animate-pop-in { animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { opacity: 0; animation: slideUp 0.8s ease-out forwards; will-change: transform, opacity; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}} />
    </div>
  );
};

export default App;
