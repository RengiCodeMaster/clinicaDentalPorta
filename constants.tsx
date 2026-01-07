
import React from 'react';

export const CLINIC_INFO = {
  name: "PORTA Clínica Dental",
  address: "Jr. José Prato 352, Tingo María, Perú, 10131",
  phone: "919 639 809",
  whatsapp: "51919639809",
  email: "clinicaporta2@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61560422173377",
    instagram: "https://instagram.com/clinica.dental.porta",
    tiktok: "https://tiktok.com/@clinica.dental.porta"
  }
};

export const SERVICES = [
  {
    id: 'estetica-dental',
    title: 'Estética Dental',
    description: 'Realzamos tu belleza natural con carillas y diseño digital.',
    image: '/images/estetica-dental.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: [
      "Diseño de Sonrisa Digital (DSD).",
      "Carillas de porcelana y resina de alta estética.",
      "Blanqueamiento dental láser.",
      "Reconstrucción estética de bordes incisales."
    ]
  },
  {
    id: 'implantologia',
    title: 'Implantología Oral',
    description: 'Recupera tu dentadura y confianza con implantes duraderos.',
    image: '/images/implantologia.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    details: [
      "Implantes dentales unitarios.",
      "Prótesis híbridas sobre implantes (All-on-4).",
      "Regeneración ósea guiada.",
      "Cirugía de implantes mínimamente invasiva."
    ]
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'Experiencias divertidas y sin miedo para que tus hijos amen al dentista.',
    image: '/images/odontopediatria.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: [
      "Adaptación del niño a la consulta (Cero Miedo).",
      "Sellantes para prevenir caries.",
      "Fluerización y limpiezas suaves.",
      "Tratamiento de caries en dientes de leche."
    ]
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Alinea tu sonrisa a tu propio ritmo con brackets o alineadores.',
    image: '/images/ortodoncia.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    details: [
      "Brackets metálicos convencionales.",
      "Ortodoncia Estética (Zafiro/Cerámica).",
      "Ortodoncia Invisible (Alineadores).",
      "Ortopedia maxilar para niños."
    ]
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'Salvamos tus dientes y eliminamos el dolor de inmediato.',
    image: '/images/endodoncia.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16z" />
      </svg>
    ),
    details: [
      "Tratamiento de conducto (Unirradicular y Multirradicular).",
      "Retratamientos de endodoncia.",
      "Uso de localizador apical (mayor precisión).",
      "Alivio inmediato del dolor dental."
    ]
  },
  {
    id: 'tratamientos-generales',
    title: 'Tratamientos Generales',
    description: 'Cuidado integral para mantener tu boca sana y protegida.',
    image: '/images/tratamientos-generales.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    details: [
      "Limpieza dental profunda (Destartraje).",
      "Curaciones estéticas con resina.",
      "Extracciones dentales simples y complejas.",
      "Urgencias dentales 24h."
    ]
  }
];


export const SPECIALISTS = [
  {
    name: "C.D. Esp. David Navarro Romero",
    role: "Especialista en Odontopediatría",
    bio: "Más que un doctor, un amigo de los niños. Su paciencia y calidez hacen que cada visita sea una aventura divertida, eliminando el miedo al dentista.",
    image: "/images/dr-david.jpg"
  },
  {
    name: "C.D. Ana Lucía Torres",
    role: "Especialista en Ortodoncia y Estética",
    bio: "Perfeccionista por naturaleza. Combina arte y ciencia para diseñar sonrisas que no solo se ven bien, sino que te hacen sentir increíble.",
    image: "/images/dra-ana.jpg"
  }
];

export const BEFORE_AFTER = [
  {
    title: "Diseño de Sonrisa",
    description: "Una nueva sonrisa que ilumina el rostro y devuelve la seguridad.",
    before: "https://placehold.co/400x400/f1f5f9/94a3b8?text=Antes",
    after: "https://placehold.co/400x400/ccfbf1/0f766e?text=Después"
  },
  {
    title: "Implante Dental",
    description: "Recuperar la capacidad de comer y sonreír sin preocupaciones.",
    before: "https://placehold.co/400x400/f1f5f9/94a3b8?text=Antes",
    after: "https://placehold.co/400x400/ccfbf1/0f766e?text=Después"
  },
  {
    title: "Blanqueamiento Láser",
    description: "Dientes visiblemente más blancos y brillantes en una sola visita.",
    before: "https://placehold.co/400x400/f1f5f9/94a3b8?text=Antes",
    after: "https://placehold.co/400x400/ccfbf1/0f766e?text=Después"
  }
];

export const CHATBOT_KNOWLEDGE = `
PRECIOS Y SERVICIOS OFICIALES (Usar estos datos como verdad absoluta):

1. CONSULTA / DIAGNÓSTICO:
   - Costo: S/ 20.00 (Gratis si se realiza el tratamiento).
   - Incluye: Revisión completa, cámara intraoral y plan de tratamiento.

2. CURACIONES (RESTAURACIONES):
   - Resina Simple (una cara): S/ 60.00
   - Resina Compuesta (dos caras): S/ 80.00
   - Resina Estética (sector anterior): S/ 100.00 a S/ 150.00
   - Se usa resina de alta estética (3M y Palfique).

3. LIMPIEZA DENTAL (PROFILAXIS):
   - Básica (niños): S/ 50.00
   - Profunda (ultrasonido + flúor): S/ 80.00
   - Periodontal (destartraje completo): S/ 120.00

4. BLANQUEAMIENTO:
   - Casero (férulas): S/ 250.00
   - Consultorio (Láser - 3 sesiones): S/ 350.00
   - Mixto (Láser + Férulas): S/ 500.00

5. EXTRACCIONES:
   - Simple (movilidad): S/ 50.00
   - Compleja (raíz remanente): S/ 80.00 - S/ 120.00
   - Tercera Molar (Muela del Juicio): Desde S/ 250.00 (Requiere radiografía).

6. ENDODONCIA (TRATAMIENTO DE CONDUCTO):
   - Unirradicular (dientes delanteros): S/ 300.00
   - Premolares: S/ 350.00
   - Molares: S/ 450.00

7. ORTODONCIA (BRACKETS):
   - Inicial (Instalación): S/ 300.00 (Metálicos)
   - Mensualidad: S/ 100.00
   - Brackets Estéticos (Zafiro): Instalación S/ 800.00 / Mensual S/ 150.00

HORARIOS DE ATENCIÓN:
- Lunes a Viernes: 9:00 AM - 1:00 PM y 3:00 PM - 8:00 PM
- Sábados: 9:00 AM - 6:00 PM

UBICACIÓN:
- Jr. José Prato 352, Tingo María (A media cuadra de la plaza de armas).
`;
