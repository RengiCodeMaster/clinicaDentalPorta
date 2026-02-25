import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import { SERVICES } from '../constants';

/* ─── Animated wrapper ─── */
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

/* ─── Data ─── */
const BENEFITS = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Trato humano y cercano',
        desc: 'Aquí no eres un número de historia clínica. Te escuchamos, te explicamos cada paso y cuidamos que tu experiencia sea tan cómoda como visitar a un amigo.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Tecnología de verdad',
        desc: 'No hablamos de tecnología solo por decirlo. Usamos equipos digitales de última generación porque tus dientes merecen la mejor precisión posible.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Respetamos tu tiempo',
        desc: 'Sabemos que tu día es valioso. Trabajamos con puntualidad y te damos un plan claro desde el primer momento, sin sorpresas ni visitas innecesarias.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Un equipo que se complementa',
        desc: 'Cada especialista aporta lo suyo. No improvisamos: si tu caso necesita a un experto específico, lo tienes. Trabajamos juntos por tu sonrisa.',
    },
];

const FEATURED_SERVICES = SERVICES.slice(0, 4); // First 4 services

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />

            {/* ═══════════════════════════════════════════
          SECTION: ¿POR QUÉ ELEGIRNOS?
          ═══════════════════════════════════════════ */}
            <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fdfd 50%, #ffffff 100%)' }}>
                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-porta-light/30 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-porta-accent/40 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <FadeInSection className="text-center mb-16">
                        <span className="inline-block text-porta font-bold tracking-[0.2em] uppercase text-sm mb-3">
                            ¿Por qué PORTA?
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-porta-heading mb-5 leading-tight">
                            Porque tu sonrisa merece <span className="text-porta">algo diferente</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            No somos la clínica más grande, pero sí la que más se preocupa por ti.
                            Cada detalle está pensado para que te sientas seguro, cómodo y bien atendido.
                        </p>
                    </FadeInSection>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {BENEFITS.map((b, i) => (
                            <FadeInSection key={i} delay={0.1 * i}>
                                <div className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-porta/8 hover:border-porta-light/50 transition-all duration-500 hover:-translate-y-2 h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-porta-accent flex items-center justify-center text-porta mb-5 group-hover:bg-porta group-hover:text-white transition-colors duration-400">
                                        {b.icon}
                                    </div>
                                    <h3 className="font-outfit font-bold text-lg text-porta-heading mb-3">
                                        {b.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {b.desc}
                                    </p>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION: SERVICIOS DESTACADOS
          ═══════════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <FadeInSection className="text-center mb-14">
                        <span className="inline-block text-porta font-bold tracking-[0.2em] uppercase text-sm mb-3">
                            Lo que hacemos
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-porta-heading mb-5 leading-tight">
                            Tratamientos pensados <span className="text-porta">para ti</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Cada servicio tiene un propósito: devolverte la tranquilidad de saber que tu salud dental está en las mejores manos.
                        </p>
                    </FadeInSection>

                    {/* Services Preview Grid */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                        {FEATURED_SERVICES.map((service, i) => (
                            <FadeInSection key={service.id} delay={0.12 * i}>
                                <Link
                                    to={`/servicios#${service.id}`}
                                    className="group flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-porta/8 hover:border-porta-light/50 transition-all duration-500 hover:-translate-y-1 h-full"
                                >
                                    {/* Image */}
                                    <div className="sm:w-48 lg:w-56 flex-shrink-0 h-48 sm:h-auto overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <h3 className="font-outfit font-bold text-lg text-porta-heading mb-2 group-hover:text-porta transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {service.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-porta font-bold text-sm group-hover:gap-3 transition-all">
                                            Conocer más
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                                        </span>
                                    </div>
                                </Link>
                            </FadeInSection>
                        ))}
                    </div>

                    {/* View All Link */}
                    <FadeInSection delay={0.3} className="text-center">
                        <Link
                            to="/servicios"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-porta text-porta font-bold hover:bg-porta hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-porta/20 group"
                        >
                            Ver todos nuestros servicios
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7m7-7H3" /></svg>
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION: CTA - CONFIANZA
          ═══════════════════════════════════════════ */}
            <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2C7A7D 0%, #1F5C5E 100%)' }}>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full" />
                    <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Jr. José Prato 352, Tingo María
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-white mb-6 leading-tight">
                            ¿Listo para sonreír <br className="hidden sm:block" />con total confianza?
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={0.2}>
                        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Da el primer paso. Una consulta, una conversación, y juntos diseñamos el camino hacia la sonrisa que siempre quisiste tener.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contacto"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-porta font-bold rounded-2xl shadow-xl shadow-black/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Agendar mi cita
                            </Link>
                            <Link
                                to="/equipo"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm text-lg"
                            >
                                Conocer al equipo
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </FadeInSection>

                    {/* Trust indicators */}
                    <FadeInSection delay={0.4}>
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/15">
                            <div className="text-center">
                                <p className="text-3xl font-outfit font-bold text-white">10+</p>
                                <p className="text-white/60 text-sm font-medium mt-1">Años de experiencia</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden sm:block" />
                            <div className="text-center">
                                <p className="text-3xl font-outfit font-bold text-white">5k+</p>
                                <p className="text-white/60 text-sm font-medium mt-1">Sonrisas transformadas</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden sm:block" />
                            <div className="text-center">
                                <p className="text-3xl font-outfit font-bold text-white">7</p>
                                <p className="text-white/60 text-sm font-medium mt-1">Especialidades dentales</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden sm:block" />
                            <div className="text-center">
                                <p className="text-3xl font-outfit font-bold text-white">4</p>
                                <p className="text-white/60 text-sm font-medium mt-1">Profesionales dedicados</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </>
    );
};

export default HomePage;
