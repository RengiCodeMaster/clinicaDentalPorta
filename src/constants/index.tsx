
import React from 'react';

export const CLINIC_INFO = {
  name: "PORTA Clínica Dental",
  address: "Jr. José Prato 352, Tingo María, Perú, 10131",
  phone: "919 639 809",
  whatsapp: "51919639809",
  email: "Clinicaporta4@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61560422173377",
    instagram: "https://www.instagram.com/clinica_porta/",
    tiktok: "https://www.tiktok.com/@clinicadentalporta"
  }
};

export const SERVICES = [
  {
    id: 'ortodoncia',
    title: 'Ortodoncia (Brackets)',
    description: 'Tu sonrisa es tu firma personal. No solo alineamos dientes; diseñamos la arquitectura de tu confianza para que nunca dejes de sonreír en las fotos.',
    images: ['/images/IMG_3445.webp', '/images/IMG_3446.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    details: [
      "Brackets Zafiro: Invisibles para el mundo, efectivos para ti.",
      "Alineadores modernos: Endereza tus dientes sin que nadie lo note.",
      "Ortopedia infantil: Guiando el futuro de los más pequeños.",
      "Corrección de mordida: Porque masticar bien es vivir bien."
    ]
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: '¿Ese dolor agudo no te deja dormir? Es tu diente pidiendo auxilio. No lo des por perdido; somos los paramédicos dentales que le darán una segunda oportunidad de vida.',
    images: ['/images/IMG_3530.webp', '/images/IMG_3541.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16z" />
      </svg>
    ),
    details: [
      "Alivio instantáneo del dolor (nuestra prioridad #1).",
      "Tecnología rotatoria: Tratamientos más rápidos y cómodos.",
      "Salvamos piezas que otros darían por perdidas.",
      "Microscopía para una precisión milimétrica."
    ]
  },
  {
    id: 'diseno-de-sonrisa',
    title: 'Diseño de sonrisa (Estética)',
    description: 'El arte y la ciencia se encuentran en tu boca. Analizamos tus rasgos, gestos y personalidad para esculpir unos dientes que no solo brillan, sino que realmente te pertenecen.',
    images: ['/images/IMG_3404.webp', '/images/IMG_3412.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: [
      "Diseño Digital (DSD): Pruébate tu sonrisa antes de crearla.",
      "Carillas de Alta Estética: Láminas finísimas de perfección.",
      "Blanqueamiento Láser: Un 'reset' luminoso para tu esmalte.",
      "Contorneo de encías para una armonía rosa-blanca perfecta."
    ]
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría (Niños)',
    description: 'Transformamos el "tengo miedo" en "¿cuándo volvemos?". Creamos un universo de magia donde cuidar los dientes es una misión divertida para pequeños superhéroes.',
    images: ['/images/IMG_3475.webp', '/images/IMG_3489.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: [
      "Técnicas de manejo de conducta basadas en el juego.",
      "Sellantes protectores: Escudos contra los monstruos del azúcar.",
      "Flúor de sabores divertidos para fortalecer el esmalte.",
      "Odontología preventiva: Cuidando sonrisas desde el primer diente."
    ]
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación (Prótesis, Coronas)',
    description: 'Devolvemos el tiempo atrás. Reconstruimos piezas dañadas o perdidas con materiales tan naturales que olvidarás cuál es el diente real y cuál es el que hicimos nosotros.',
    images: ['/images/IMG_3396.webp', '/images/IMG_3444.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    details: [
      "Coronas de Zirconio: Dureza extrema con estética natural.",
      "Prótesis fijas y puentes que se sienten parte de ti.",
      "Rehabilitación completa: Recupera el placer de comer de todo.",
      "Incrustaciones que se fusionan invisiblemente con tu diente."
    ]
  },
  {
    id: 'cirugia-dental',
    title: 'Cirugía dental',
    description: 'Precisión quirúrgica con tacto humano. Resolvemos problemas complejos con técnicas mínimamente invasivas para que tu recuperación sea tan rápida como un abrir y cerrar de ojos.',
    images: ['/images/IMG_3561.webp', '/images/IMG_3571.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: [
      "Extracción de muelas del juicio sin traumas ni dramas.",
      "Cirugías de encías para salvar tus dientes.",
      "Apicectomías: Soluciones quirúrgicas de precisión.",
      "Manejo experto de tejidos para resultados estéticos."
    ]
  },
  {
    id: 'implante-dental',
    title: 'Implante dental',
    description: 'La segunda oportunidad que tu boca esperaba. Instalamos raíces de titanio que se fusionan contigo, devolviéndote la fuerza de mordida y la estética de un diente natural.',
    images: ['/images/IMG_3418.webp', '/images/IMG_3550.webp'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    details: [
      "Implantes de Titanio Grado Médico: Integración garantizada.",
      "Carga Inmediata: ¿Dientes en un día? Sí, es posible.",
      "Regeneración ósea para bases sólidas y duraderas.",
      "Prótesis sobre implantes: Firmeza total, cero preocupaciones."
    ]
  }
];


export const SPECIALISTS = [
  {
    name: "C.D. Judith Rosmery Lavado Porta",
    role: "Fundadora & Directora Médica",
    subtitle: "Odontóloga General - C.O.P. 55660",
    bio: "Fundadora y directora médica. Su pasión es transformar vidas a través de sonrisas saludables, combinando experiencia clínica con un trato cálido y personalizado.",
    image: "/images/dra-judith.webp",
    featured: true
  },
  {
    name: "C.D. Alexander Céspedes Adriano",
    role: "Odontólogo General",
    subtitle: "C.O.P. 57487",
    bio: "Comprometido con la excelencia y la atención integral. Su enfoque minucioso garantiza diagnósticos precisos y tratamientos efectivos para recuperar tu salud dental.",
    image: "/images/dr-alesander.webp",
    featured: false
  },
  {
    name: "C.D. Esterling Ugarte C.",
    role: "Esp. Implantología Oral",
    subtitle: "R.N.E. 3795",
    bio: "Especialista en implantología oral. Su experiencia y precisión quirúrgica devuelven la funcionalidad y estética dental con implantes de última generación.",
    image: "/images/dr-esterling.webp",
    featured: false
  },
  {
    name: "C.D. Johanna Sánchez O.",
    role: "Odontólogo General",
    subtitle: "C.O.P. 39743",
    bio: "Profesional dedicada a brindar atención dental de calidad. Su compromiso con el bienestar del paciente y su calidez humana hacen de cada consulta una experiencia confortable.",
    image: "/images/dra-johanna.webp",
    featured: false
  }
];

export const BEFORE_AFTER = [
  {
    title: "Diseño de Sonrisa",
    description: "Una nueva sonrisa que ilumina el rostro y devuelve la seguridad.",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  },
  {
    title: "Implante Dental",
    description: "Recuperar la capacidad de comer y sonreír sin preocupaciones.",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  },
  {
    title: "Blanqueamiento Láser",
    description: "Dientes visiblemente más blancos y brillantes en una sola visita.",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  }
];

