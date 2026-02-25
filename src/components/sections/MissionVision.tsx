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
                threshold: 0.1,
                rootMargin: '0px'
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
        <section id="about" className="pt-32 pb-24 md:pt-44 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div ref={intro.ref} className={`mb-24 transition-all duration-700 ${intro.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-end">
                        <div className="lg:w-1/2">
                            <span className="block text-porta font-bold tracking-widest uppercase text-xs mb-6">Lo que somos</span>
                            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-porta-heading leading-tight">
                                Sabemos que nadie salta de alegría por ir al dentista.
                                <br /> <span className="text-porta">Por eso lo hacemos diferente.</span>
                            </h2>
                        </div>

                        <div className="lg:w-1/2">
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                Seamos sinceros: a nadie le gusta el sonido de la maquinita ni las inyecciones. Lo entendemos perfectamente.
                                Por eso en Porta no solo nos preocupamos por tus dientes, nos preocupamos por <strong>ti</strong>.
                                <br /><br />
                                Queremos que vengas sin miedo y salgas sintiendo que estás en manos de amigos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- STORY BLOCK 1: LA MISIÓN --- */}
                <div ref={mission.ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <div className={`relative transition-all duration-1000 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="absolute inset-0 bg-porta-light/20 rounded-[2.5rem] md:rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
                        <img
                            src="/images/dra-judith-xray.webp"
                            alt="Dra. Judith Analizando Caso"
                            className="relative z-10 w-full h-[350px] sm:h-[500px] object-cover rounded-[2.5rem] md:rounded-[3rem] shadow-2xl"
                        />
                    </div>

                    <div className={`transition-all duration-1000 delay-100 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {/* Mobile: Floating Card | Desktop: Clean Reset */}
                        <div className="relative z-20 mt-[-60px] lg:mt-0 mx-4 lg:mx-0 p-8 md:p-12 lg:p-0 bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-[2rem] lg:rounded-none shadow-xl shadow-porta/5 lg:shadow-none border border-gray-100 lg:border-none text-center lg:text-left">
                            <span className="inline-block text-porta font-bold tracking-widest uppercase text-[10px] mb-4 lg:hidden">Nuestra Misión</span>
                            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-porta-heading mb-6 leading-tight">
                                Que te sientas <span className="text-porta lg:block">en casa.</span>
                            </h3>

                            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Para nosotros, tú no eres "el paciente de las 5". Eres un vecino, un amigo, alguien que confía su salud en nuestras manos.
                                    Nuestra meta es simple: <strong>que olvides que estás en un consultorio.</strong>
                                </p>
                                <p className="hidden md:block lg:block">
                                    Nos tomamos el tiempo para explicarte todo sin apuros. Queremos ganarnos tu confianza con un trato suave, honesto y lleno de cariño.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- STORY BLOCK 2: LA VISIÓN (Reverse Layout on Desktop) --- */}
                <div ref={vision.ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className={`order-2 lg:order-1 transition-all duration-1000 delay-100 ${vision.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Mobile: Floating Card | Desktop: Clean Reset */}
                        <div className="relative z-20 mt-[-60px] lg:mt-0 mx-4 lg:mx-0 p-8 md:p-12 lg:p-0 bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-[2rem] lg:rounded-none shadow-xl shadow-porta/5 lg:shadow-none border border-gray-100 lg:border-none text-center lg:text-left">
                            <span className="inline-block text-porta font-bold tracking-widest uppercase text-[10px] mb-4 lg:hidden">Nuestra Visión</span>
                            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-porta-heading mb-6 leading-tight">
                                Ser el dentista que <br /><span className="text-porta">recomiendas con orgullo.</span>
                            </h3>
                            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Soñamos con un Tingo María donde la gente ya no esconda su sonrisa por vergüenza o dolor.
                                    Queremos ser ese lugar al que traes a tu familia porque sabes que aquí <strong>no te van a engañar</strong>.
                                </p>
                                <p className="hidden md:block lg:block">
                                    Nos capacitamos constantemente y traemos la mejor tecnología para que tú tengas tratamientos que duren y funcionen.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`relative order-1 lg:order-2 transition-all duration-1000 ${vision.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="absolute inset-0 bg-porta-dark/10 rounded-[2.5rem] md:rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
                        <img
                            src="/images/dr-alesander-xray.webp"
                            alt="Dr. Alexander Analizando Radiografía"
                            className="relative z-10 w-full h-[350px] sm:h-[500px] object-cover rounded-[2.5rem] md:rounded-[3rem] shadow-2xl"
                        />
                    </div>
                </div>

                {/* --- EMOTIONAL CLOSER --- */}
                <div ref={closer.ref} className={`mt-24 md:mt-32 text-center transition-all duration-1000 ${closer.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-xl md:text-3xl font-outfit font-bold text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        "En Clínica Porta, tu sonrisa no es un número de historia clínica. <br className="hidden md:block" />
                        <span className="text-porta-heading">Es nuestra obra maestra y tu carta de presentación al mundo."</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
