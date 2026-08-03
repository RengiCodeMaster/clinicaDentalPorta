import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      id={service.id}
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
        <div className="relative w-full h-full lg:bg-transparent lg:p-0 z-0 lg:z-10 group">
          {service.images && service.images.length === 2 ? (
            <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-[2.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-lg border border-white">
              {/* Decorative background blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-porta-light/30 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-porta/20 rounded-full blur-3xl -ml-20 -mb-20 transition-transform duration-1000 group-hover:scale-150"></div>
              
              {/* Asymmetric Grid Layout */}
              <div className="absolute inset-3 lg:inset-6 flex gap-3 lg:gap-6">
                {/* Image 1 - Larger, pushed to bottom */}
                <div className="w-[55%] h-[85%] mt-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-porta/20 relative cursor-pointer">
                  <div className="absolute inset-0 bg-porta-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                  <img
                    src={service.images[0]}
                    alt={`${service.title} principal`}
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                  />
                </div>
                
                {/* Image 2 - Smaller, pushed to top */}
                <div className="w-[45%] h-[75%] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-porta/20 relative cursor-pointer">
                  <div className="absolute inset-0 bg-porta-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                  <img
                    src={service.images[1]}
                    alt={`${service.title} detalle`}
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-b-[2.5rem] lg:rounded-[2.5rem] border-2 border-dashed border-gray-200">
              <svg className="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-400 font-medium">Imágenes Próximamente</span>
            </div>
          )}
          {/* Mobile Overlay Gradient - not needed with new solid background design, but kept for text readability if text overlaps */}
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

        <Link
          to={`/contacto?service=${service.id}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-porta hover:bg-porta-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-porta/20 hover:translate-y-[-4px] hover:shadow-xl group"
        >
          <span>Agendar Cita</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7m7-7H3" /></svg>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay to allow for page transitions and rendering
        setTimeout(() => {
          const navbarHeight = 100; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    }
  }, [hash]);

  return (
    <section id="services" className="bg-white overflow-hidden">
      {/* Header Section */}
      <div className="pt-32 md:pt-44 pb-12 text-center max-w-4xl mx-auto px-4">
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
