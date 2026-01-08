
import React, { useState } from 'react';
import { CLINIC_INFO } from '../../constants';
import BookingModal from '../common/BookingModal';

const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Clínica Dental Porta - Dentistas en Tingo María - Ortodoncia e Implantes"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 lg:to-transparent"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-porta-light opacity-50 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">

          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-gray-900 leading-tight mb-6 drop-shadow-sm animate-fade-in-up">
            Cuidamos tu sonrisa como si fuera la <span className="text-porta">nuestra</span>.
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-xl lg:bg-transparent lg:p-0 animate-fade-in-up delay-100">
            En Clínica Dental PORTA usamos la mejor tecnología para asegurarnos de que tu visita sea cómoda, segura y sin dolor. Somos tu dentista de confianza en Tingo María.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-porta hover:bg-porta-dark text-white rounded-2xl font-bold shadow-xl shadow-porta/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Agendar Cita Online
            </button>
          </div>
        </div>

        {/* Empty column to let the background image shine through on the right */}
        <div className="hidden lg:block"></div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
};

export default Hero;
