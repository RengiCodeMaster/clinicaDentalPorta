
import React from 'react';
import { CLINIC_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white rounded-xl p-3 w-fit mb-6">
              <div className="h-16 w-56 relative overflow-hidden">
                <img
                  src="/images/porta-logo.png"
                  alt="PORTA Clínica Dental"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-56 w-auto max-w-none"
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
          <p>© 2024 PORTA Clínica Dental. Todos los derechos reservados.</p>
          <p>Diseñado para Tingo María, Perú.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
