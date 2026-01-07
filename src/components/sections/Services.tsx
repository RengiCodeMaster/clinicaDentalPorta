import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../../constants';
import BookingModal from '../common/BookingModal'; // Importar Modal

const ServiceItem: React.FC<{ service: typeof SERVICES[0]; index: number; onBook: (slug: string) => void }> = ({ service, index, onBook }) => {
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
      className="grid lg:grid-cols-2 gap-12 items-center py-20 min-h-[80vh] overflow-hidden"
    >
      {/* Image Block */}
      <div
        className={`relative ${isEven ? 'lg:order-2' : ''} h-[400px] lg:h-[600px] transition-all duration-1000 ease-out transform ${isVisible
          ? 'opacity-100 translate-x-0'
          : isEven ? 'opacity-0 translate-x-20' : 'opacity-0 -translate-x-20'
          }`}
      >
        <div className="relative w-full h-full bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-porta/20 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out z-10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-[2rem]"
          />
          {/* Floating Badge */}
          <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow hidden lg:block`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-porta font-bold text-sm">Disponible Hoy</p>
            </div>
          </div>
        </div>

        {/* Decorative Blur behind image */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-porta-accent/20 rounded-full blur-3xl -z-10`}></div>
      </div>

      {/* Text Content */}
      <div
        className={`${isEven ? 'lg:order-1' : ''} p-6 lg:p-12 transition-all duration-1000 ease-out transform ${isVisible
          ? 'opacity-100 translate-x-0'
          : isEven ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
          }`}
      >
        <div className="inline-block px-4 py-1.5 bg-porta-accent/30 rounded-lg text-porta font-bold text-xs tracking-wider uppercase mb-6">
          {service.title}
        </div>

        <h3 className="text-3xl lg:text-5xl font-semibold font-outfit text-gray-500 mb-6 leading-tight">
          {service.description}
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {service.details?.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-porta-light transition-colors">
              <div className="w-8 h-8 rounded-full bg-porta-accent flex items-center justify-center text-porta font-bold text-xs flex-shrink-0">
                {idx + 1}
              </div>
              <span className="text-gray-700 font-medium text-sm leading-snug">{detail}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onBook(service.id)}
          className="inline-flex items-center justify-center gap-2 bg-porta hover:bg-porta-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-porta/20 hover:translate-y-[-4px] hover:shadow-xl w-full sm:w-auto"
        >
          <span>Agendar Cita</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [bookingSlug, setBookingSlug] = useState<string | null>(null);

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
            onBook={(slug) => setBookingSlug(slug)} // Callback para abrir modal con slug
          />
        ))}
      </div>

      {/* Modal único controlado por el estado del padre */}
      <BookingModal
        isOpen={!!bookingSlug}
        onClose={() => setBookingSlug(null)}
        serviceSlug={bookingSlug || undefined}
      />
    </section>
  );
};

export default Services;
