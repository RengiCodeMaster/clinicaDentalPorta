
import React from 'react';
import { CLINIC_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white/5 rounded-2xl p-4 w-fit mb-6 backdrop-blur-sm border border-white/10">
              <div className="h-32 flex items-center">
                <img
                  src="/images/porta-logo.webp"
                  alt="PORTA Clínica Dental"
                  className="h-full w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Especialistas en salud dental comprometidos con la excelencia y el bienestar de los pacientes en la bella ciudad de Tingo María.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-porta transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-porta transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-porta transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-porta transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Horarios</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between"><span>Lunes - Viernes:</span> <span className="text-white">9am - 8pm</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span className="text-white">9am - 1pm</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span className="text-porta">Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 PORTA Clínica Dental. Todos los derechos reservados.</p>
          <p>Diseñado para Tingo María, Perú.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
