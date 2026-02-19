import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoWordmark } from './Logo';
import { Button } from './ui/Button';
import { navigate } from '../App';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string, offset: number) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div ref={menuRef}>
          <div className="pointer-events-auto relative isolate bg-surface-glass backdrop-blur-md border border-white/10 rounded-3xl px-6 md:px-8 py-4 flex items-center justify-between shadow-lg" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="cursor-pointer"
            >
              <LogoWordmark logoClassName="w-8 h-8 md:w-10 md:h-10 pointer-events-none" textClassName="text-xl md:text-2xl" className="pointer-events-none" />
            </a>

            <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-300">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about', 150); }} className="hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials', 30); }} className="hover:text-white transition-colors cursor-pointer">Testimonials</a>
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                className="md:hidden flex items-center justify-center w-11 h-11 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <div className="hidden md:flex">
                <Button variant="primary" className="text-base" contentClassName="!py-3.5 !px-7" icon arrow onClick={() => window.open('https://cal.com/stepflow-lab/growth-scoping-call', '_blank')}>
                  Let's talk
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden mt-2 pointer-events-auto bg-surface-glass backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-lg overflow-hidden"
              >
                <div className="flex flex-col gap-1 text-base font-medium text-gray-300">
                  <a
                    href="#about"
                    onClick={(e) => { e.preventDefault(); scrollToSection('about', 150); }}
                    className="py-3 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#testimonials"
                    onClick={(e) => { e.preventDefault(); scrollToSection('testimonials', 30); }}
                    className="py-3 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                  <a
                    href="https://cal.com/stepflow-lab/growth-scoping-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-brand-primary font-semibold transition-colors"
                  >
                    Let's talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
