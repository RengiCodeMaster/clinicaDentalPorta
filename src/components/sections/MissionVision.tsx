import React, { useEffect, useRef, useState } from 'react';

const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Reset animation when scrolling away so it plays again when entering
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '-50px' // Don't trigger until 50px inside the viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return { isVisible, ref };
};

const MissionVision: React.FC = () => {
    const intro = useScrollAnimation();
    const mission = useScrollAnimation();
    const vision = useScrollAnimation();
    const closer = useScrollAnimation();

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- INTRO: MANIFIESTO DE MARCA --- */}
                <div ref={intro.ref} className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 ${intro.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <span className="block text-porta font-bold tracking-[0.3em] uppercase text-sm mb-4">Lo que somos</span>
                    <h2 className="text-4xl md:text-6xl font-outfit font-bold text-porta-heading mb-8 leading-tight">
                        Sabemos que nadie salta de alegría por ir al dentista.<br />
                        <span className="text-porta">Por eso lo hacemos diferente.</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Seamos sinceros: a nadie le gusta el sonido de la maquinita ni las inyecciones. Lo entendemos perfectamente.
                        Por eso en Porta no solo nos preocupamos por tus dientes, nos preocupamos por <strong>ti</strong>.
                        Queremos que vengas sin miedo y salgas sintiendo que estás en manos de amigos.
                    </p>
                </div>

                {/* --- STORY BLOCK 1: LA MISIÓN --- */}
                <div ref={mission.ref} className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className={`relative transition-all duration-1000 delay-200 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}>
                        <div className="absolute inset-0 bg-porta-light/30 rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
                        <img
                            src="/images/dra-judith-xray.webp"
                            alt="Dra. Judith Analizando Caso"
                            className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
                        />

                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}>
                        <h3 className="text-3xl font-outfit font-bold text-porta-heading mb-6">
                            Nuestra Misión: <span className="text-porta">Que te sientas en casa</span>
                        </h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Para nosotros, tú no eres "el paciente de las 5". Eres un vecino, un amigo, alguien que confía su salud en nuestras manos.
                                Nuestra meta de todos los días es simple: <strong>que olvides que estás en un consultorio.</strong>
                            </p>
                            <p>
                                Nos tomamos el tiempo para explicarte todo con manzanitas, sin apuros. Si te duele algo, paramos. Si tienes dudas, las respondemos.
                                Queremos ganarnos tu confianza no con palabras bonitas, sino con un trato suave, honesto y lleno de cariño.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- STORY BLOCK 2: LA VISIÓN (Reverse Layout) --- */}
                <div ref={vision.ref} className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`order-2 lg:order-1 transition-all duration-1000 delay-500 ${vision.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}>
                        <h3 className="text-3xl font-outfit font-bold text-porta-heading mb-6">
                            Nuestra Visión: <span className="text-porta">Ser el dentista que recomiendas con orgullo</span>
                        </h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Soñamos con un Tingo María donde la gente ya no esconda su sonrisa por vergüenza o dolor.
                                Queremos ser ese lugar al que traes a tus hijos, a tus padres y a tus amigos porque sabes que aquí <strong>no te van a engañar</strong> y te van a tratar bien.
                            </p>
                            <p>
                                Nos capacitamos constantemente y traemos la mejor tecnología, no para presumir, sino para que tú tengas tratamientos que duren y funcionen.
                                Queremos ser tus dentistas para toda la vida.
                            </p>
                        </div>
                    </div>

                    <div className={`relative order-1 lg:order-2 transition-all duration-1000 delay-600 ${vision.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}>
                        <div className="absolute inset-0 bg-porta-dark/10 rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
                        <img
                            src="/images/dr-alesander-xray.webp"
                            alt="Dr. Alexander Analizando Radiografía"
                            className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
                        />

                    </div>
                </div>

                {/* --- EMOTIONAL CLOSER --- */}
                <div ref={closer.ref} className={`mt-32 text-center transition-all duration-1000 delay-200 ${closer.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <p className="text-2xl md:text-3xl font-outfit font-bold text-gray-400 max-w-3xl mx-auto">
                        "En Clínica Porta, tu sonrisa no es un número de historia clínica. <br />
                        <span className="text-porta-heading">Es nuestra obra maestra y tu carta de presentación al mundo."</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
