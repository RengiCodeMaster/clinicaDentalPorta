import React, { useEffect, useRef, useState } from 'react';
import { CLINIC_INFO } from '../../constants';

const Contact: React.FC = () => {
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

  /* Form State */
  const [formData, setFormData] = useState({
    name: '',
    reason: 'Consulta General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy *${formData.name}*.\n\nMe gustaría agendar una cita por: *${formData.reason}*.\n\nMensaje adicional: ${formData.message}`;
    const url = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          <div
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <h2 className="text-porta font-bold tracking-widest uppercase text-sm mb-3">Estamos aquí para ti</h2>
            <p className="text-4xl md:text-5xl font-outfit font-bold text-porta-heading mb-8">Empieza tu transformación hoy mismo</p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-porta-accent p-3 rounded-2xl text-porta">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-porta-heading">Ubicación</h4>
                  <p className="text-gray-600">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-porta-accent p-3 rounded-2xl text-porta">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-porta-heading">Llámanos</h4>
                  <a
                    href={`tel:+${CLINIC_INFO.whatsapp}`}
                    className="text-gray-600 hover:text-porta transition-colors font-medium"
                    aria-label={`Llamar al ${CLINIC_INFO.phone}`}
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-porta-accent p-3 rounded-2xl text-porta">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">{CLINIC_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a href={CLINIC_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-[#1877F2] hover:text-white rounded-xl transition-all border border-transparent hover:border-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.648 0-2.928 1.67-2.928 3.403v1.568h3.917l-.523 3.667h-3.394v7.98H9.101Z" /></svg>
              </a>
              <a href={CLINIC_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-[#E4405F] hover:text-white rounded-xl transition-all border border-transparent hover:border-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5Z" /></svg>
              </a>
              <a href={CLINIC_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-black hover:text-white rounded-xl transition-all border border-transparent hover:border-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
            </div>
          </div>

          <div
            className={`bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-5 py-4 bg-gray-50 border-transparent focus:border-porta focus:bg-white rounded-2xl transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Motivo de consulta</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border-transparent focus:border-porta focus:bg-white rounded-2xl transition-all"
                >
                  <option>Consulta General</option>
                  <option>Limpieza Dental</option>
                  <option>Ortodoncia (Brackets)</option>
                  <option>Diseño de Sonrisa</option>
                  <option>Urgencia Dental</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje (opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="w-full px-5 py-4 bg-gray-50 border-transparent focus:border-porta focus:bg-white rounded-2xl transition-all"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-porta hover:bg-porta-dark text-white rounded-2xl font-bold shadow-lg shadow-porta/20 transition-all flex items-center justify-center gap-2">
                Enviar solicitud
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Placeholder for Map */}
        {/* Google Map */}
        <div
          className={`mt-20 w-full h-[450px] bg-gray-200 rounded-[40px] overflow-hidden shadow-xl border border-gray-100 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <iframe
            src="https://www.google.com/maps?q=Jr.+Jose+Prato+352,+Tingo+Maria&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Dental Porta"
          ></iframe>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Jr.+José+Prato+352,+Tingo+María"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold shadow-2xl hover:bg-gray-50 transition-all flex items-center gap-2 z-10 group border border-gray-100"
          >
            <span>Cómo llegar</span>
            <svg className="w-5 h-5 text-porta group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
