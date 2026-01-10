import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../../constants';

const ServiceItem: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      id={`service-${service.id}`}
      ref={ref}
      className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center py-12 lg:py-20 min-h-[auto] lg:min-h-[80vh] overflow-hidden"
    >
      {/* Image Block */}
      <div
        className={`relative ${isEven ? 'lg:order-2' : ''} h-[300px] sm:h-[400px] lg:h-[600px] transition-all duration-1000 ease-out transform ${isVisible
          ? 'opacity-100 translate-x-0'
          : isEven ? 'opacity-0 translate-x-20' : 'opacity-0 -translate-x-20'
          }`}
      >
        <div className="relative w-full h-full lg:bg-white lg:p-2 lg:rounded-[2.5rem] lg:shadow-2xl lg:shadow-porta/20 lg:rotate-1 lg:hover:rotate-0 transition-transform duration-700 ease-out z-0 lg:z-10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-b-[2.5rem] lg:rounded-[2rem] shadow-md lg:shadow-none"
          />
          {/* Mobile Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden rounded-b-[2.5rem]"></div>
        </div>

        {/* Decorative Blur behind image - Desktop only */}
        <div className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-porta-accent/20 rounded-full blur-3xl -z-10`}></div>
      </div>

      {/* Text Content */}
      <div
        className={`${isEven ? 'lg:order-1' : ''} 
          relative z-10 -mt-16 lg:mt-0 
          mx-4 lg:mx-0 
          bg-white lg:bg-transparent 
          p-8 lg:p-12 
          rounded-[2rem] lg:rounded-none 
          shadow-xl lg:shadow-none 
          transition-all duration-1000 ease-out transform ${isVisible
            ? 'opacity-100 translate-y-0 lg:translate-x-0'
            : 'opacity-0 translate-y-20 lg:translate-y-0 lg:translate-x-20'
          }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-porta-light text-porta-dark text-xs font-bold uppercase tracking-wider mb-4 lg:hidden">
          Tratamiento Dental
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-porta-heading mb-4 lg:mb-6 leading-tight">
          {service.title}
        </h3>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-medium">
          {service.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 mb-8 lg:mb-10">
          {service.details?.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-porta-light transition-colors">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-porta-accent flex items-center justify-center text-porta font-bold text-[10px] lg:text-xs flex-shrink-0">
                {idx + 1}
              </div>
              <span className="text-gray-700 font-medium text-sm leading-snug">{detail}</span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-porta hover:bg-porta-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-porta/20 hover:translate-y-[-4px] hover:shadow-xl group"
        >
          <span>Agendar Cita</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7m7-7H3" /></svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white overflow-hidden">
      {/* Header Section */}
      <div className="pt-24 pb-12 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-porta font-bold tracking-widest uppercase text-sm mb-3">Nuestros Tratamientos</h2>
        <p className="text-4xl md:text-5xl font-outfit font-bold text-gray-700 mb-6">Todo lo que tu sonrisa necesita</p>
        <p className="text-gray-600 text-lg">
          Desde la prevención hasta la estética más avanzada. Descubre cómo cada servicio está pensado para brindarte salud, belleza y bienestar.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
