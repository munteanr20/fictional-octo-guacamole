// src/components/organisms/Navbar.jsx
import { useState, useEffect } from 'react';
import { Logo } from '../atoms/Logo.js';

// Navigation links data
const navLinks = [
 { name: 'Când & Unde', href: '#cand-unde' },
 { name: 'Detalii', href: '#detalii' },
 { name: 'Echipă', href: '#echipa' },
 { name: 'Plată', href: '#plata' },
];

// Hamburger/Close Icons (using SVG)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    // Navbar container: sticky, dark, with a blur backdrop
    <nav className="sticky top-0 z-50 bg-mordor-black border-b-2 border-rohan-gold border-opacity-70 shadow-md shadow-rohan-gold backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" aria-label="Middle Earth - Home">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gondor-silver hover:text-rohan-gold px-3 py-2 rounded-md text-lg font-bold font-serif transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gondor-silver hover:text-rohan-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rohan-gold transition-transform duration-150"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      {/* Overlay behind mobile menu */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className={`md:hidden fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ zIndex: 48 }}
      />

      {/* Mobile Menu (animated dropdown) */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full z-50 transform origin-top transition-transform duration-200 ease-out ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="bg-mordor-black bg-opacity-95 border-t border-rohan-gold border-opacity-30 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gondor-silver hover:text-rohan-gold block px-3 py-2 rounded-md text-base font-medium font-sans transition-colors duration-150"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};