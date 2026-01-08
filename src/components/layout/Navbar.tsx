
import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES } from '../../constants';

import BookingModal from '../common/BookingModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home', hasDropdown: false },
    { name: 'Servicios', href: '#services', hasDropdown: true },
    { name: 'Nosotros', href: '#about', hasDropdown: false },
    { name: 'Contacto', href: '#contact', hasDropdown: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100' : 'bg-white/50 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="h-14 w-48 relative overflow-hidden">
              <img
                src="/images/porta-logo.png"
                alt="Clínica Dental Porta Tingo María"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-auto max-w-none"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="font-semibold text-sm text-gray-700 transition-colors hover:text-porta py-2 block flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  )}
                </a>

                {/* Desktop Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                      {SERVICES.map(service => (
                        <a
                          key={service.id}
                          href={`#service-${service.id}`}
                          className="block px-4 py-3 rounded-xl hover:bg-porta-accent/30 text-gray-700 hover:text-porta font-medium text-sm transition-colors flex items-center gap-2"
                        >
                          <span className="p-1.5 bg-gray-50 rounded-lg text-porta">
                            {/* Simple version of icon */}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                          </span>
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Agendar Cita
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-gray-50 text-gray-900 border border-gray-100"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-slide-up h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenSubMenu(openSubMenu === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-porta hover:bg-porta-accent/50 transition-colors"
                    >
                      {link.name}
                      <svg className={`w-5 h-5 transition-transform ${openSubMenu === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    {openSubMenu === link.name && (
                      <div className="pl-4 pr-2 space-y-1 mb-2">
                        {SERVICES.map(service => (
                          <a
                            key={service.id}
                            href={`#service-${service.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl bg-gray-50 text-gray-600 text-sm font-medium hover:text-porta hover:pl-6 transition-all"
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-porta hover:bg-porta-accent/50 transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="block w-full text-center bg-gray-900 text-white px-6 py-4 rounded-2xl font-bold shadow-lg"
              >
                📅 Ver Horarios Libres
              </button>
            </div>
          </div>
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </nav>
  );
};

export default Navbar;
