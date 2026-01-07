import React, { useEffect, useRef, useState } from 'react';
import { SPECIALISTS } from '../../constants';

const Specialists: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 20% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          {/* Text Section - Slides from Left */}
          <div
            className={`lg:w-1/3 mb-12 lg:mb-0 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
          >
            <h2 className="text-porta font-bold tracking-widest uppercase text-sm mb-3">Tu equipo de confianza</h2>
            <p className="text-4xl font-outfit font-bold text-gray-900 mb-6">Más que dentistas, somos tu familia dental</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Somos vecinos de Tingo María y sabemos que ir al dentista no siempre es fácil. Por eso, nos tomamos el tiempo de escucharte y explicarte todo con paciencia, para que te sientas tranquilo y seguro en cada cita.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-porta">10+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Años Exp.</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-porta">5k+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Sonrisas</p>
              </div>
            </div>
          </div>

          {/* Cards Section - Slides from Right */}
          <div
            className={`lg:w-2/3 grid sm:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
          >
            {SPECIALISTS.map((spec, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-[40px] aspect-[4/5] bg-gray-100">
                <img
                  src={spec.image}
                  alt={spec.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                  <h4 className="text-xl font-bold font-outfit">{spec.name}</h4>
                  <p className="text-porta-light text-sm font-medium mb-3 uppercase tracking-wider">{spec.role}</p>
                  <p className="text-sm text-gray-300 leading-snug">{spec.bio}</p>
                </div>
                {/* Always visible info on mobile/idle */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl group-hover:hidden transition-all shadow-lg">
                  <h4 className="font-bold text-gray-900">{spec.name}</h4>
                  <p className="text-xs text-porta-dark font-semibold uppercase">{spec.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
