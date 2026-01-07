import React, { useEffect, useRef, useState } from 'react';
import { BEFORE_AFTER } from '../constants';

const BeforeAfter: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <p className="text-porta font-bold tracking-widest uppercase text-sm mb-3">Resultados Reales</p>
                    <h2 className="text-4xl font-outfit font-bold text-gray-900">Historias de Cambio</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        No hay mejor prueba de nuestro trabajo que la felicidad de nuestros pacientes. Descubre cómo una nueva sonrisa puede cambiar una vida.
                    </p>
                </div>

                <div
                    className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    {BEFORE_AFTER.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] shadow-xl shadow-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group ring-1 ring-gray-100">
                            {/* Image comparison container */}
                            <div className="relative aspect-[4/3] flex">
                                <div className="w-1/2 relative bg-gray-200">
                                    <img src={item.before} alt="Antes" className="w-full h-full object-cover" />
                                    <span className="absolute top-3 left-3 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">ANTES</span>
                                </div>
                                <div className="w-1/2 relative bg-porta-light">
                                    <img src={item.after} alt="Después" className="w-full h-full object-cover" />
                                    <span className="absolute top-3 right-3 bg-porta text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm">DESPUÉS</span>
                                </div>

                                {/* Center Divider */}
                                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white z-10 shadow-lg">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                                        <svg className="w-4 h-4 text-porta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
