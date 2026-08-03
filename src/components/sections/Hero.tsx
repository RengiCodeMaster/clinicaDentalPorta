import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-transparent">

      {/* Cinematic Dark Gradient for Text Legibility (Only on the left side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a191f]/90 via-[#0a191f]/60 to-transparent w-full md:w-4/5 lg:w-2/3 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center h-full">
        <div className="text-center lg:text-left pt-10">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2 drop-shadow-xl">
            {["Cuidamos", "tu", "sonrisa", "como", "si", "fuera", "la"].map((word, i) => (
              <span 
                key={i} 
                className="animate-fall-in inline-block opacity-0"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                {word}
              </span>
            ))}
            <span 
              className="text-porta-light animate-fall-in inline-block opacity-0 drop-shadow-[0_0_15px_rgba(44,122,125,0.5)]"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              nuestra.
            </span>
          </h1>
          
          <p className="text-lg text-white/90 font-medium mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up drop-shadow-md opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            En Clínica Dental PORTA usamos la mejor tecnología para asegurarnos de que tu visita sea cómoda, segura y sin dolor. Somos tu dentista de confianza en Tingo María.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <Link
              to="/contacto?service=consulta"
              className="w-full sm:w-auto px-8 py-4 bg-porta hover:bg-porta-dark text-white rounded-2xl font-bold shadow-xl shadow-black/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Agendar Cita Online
            </Link>
          </div>

        </div>

        {/* Empty column to let the background image shine through on the right */}
        {/* Spacer to keep grid structure for text on left */}
        <div className="hidden lg:block"></div>
      </div>


    </section>
  );
};

export default Hero;
