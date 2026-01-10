
import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES } from '../../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home', hasDropdown: false },
    { name: 'Nosotros', href: '#about', hasDropdown: false },
    { name: 'Equipo', href: '#team', hasDropdown: false },
    { name: 'Servicios', href: '#services', hasDropdown: true },
    { name: 'Contacto', href: '#contact', hasDropdown: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-gray-100' : 'bg-white/50 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="h-14 md:h-16 flex items-center overflow-visible">
              <img
                src="/images/porta-logo.webp"
                alt="Clínica Dental Porta Tingo María"
                className="h-full w-auto object-contain transform scale-150 origin-left ml-2 md:ml-4 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="font-outfit font-medium text-[16px] text-gray-600 transition-all hover:text-porta py-2 block flex items-center gap-1.5 hover:scale-105"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-porta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  )}
                </a>

                {/* Desktop Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
                    <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-3 overflow-hidden ring-1 ring-black/5">
                      {SERVICES.map(service => (
                        <a
                          key={service.id}
                          href={`#service-${service.id}`}
                          className="block px-4 py-3.5 rounded-2xl hover:bg-porta-accent/50 text-gray-600 hover:text-porta font-medium text-sm transition-all flex items-center gap-3 group/item"
                        >
                          <span className="p-2 bg-gray-50 rounded-xl text-porta group-hover/item:bg-white transition-colors shadow-sm">
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
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-gray-50 text-gray-900 border border-gray-100"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
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

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
