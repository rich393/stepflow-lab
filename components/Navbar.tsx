import React from 'react';
import { LogoWordmark } from './Logo';
import { Button } from './ui/Button';
import { navigate } from '../App';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="pointer-events-auto relative isolate bg-surface-glass backdrop-blur-md border border-white/10 rounded-3xl px-8 py-4 flex items-center justify-between shadow-lg" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
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
            <LogoWordmark logoClassName="w-10 h-10 pointer-events-none" textClassName="text-2xl" className="pointer-events-none" />
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-300">
            <a href="#about" onClick={(e) => { e.preventDefault(); const el = document.getElementById('about'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 150; window.scrollTo({ top: y, behavior: 'smooth' }); } }} className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); const el = document.getElementById('testimonials'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 30; window.scrollTo({ top: y, behavior: 'smooth' }); } }} className="hover:text-white transition-colors cursor-pointer">Testimonials</a>
          </div>

          <div className="flex items-center gap-6">
             <Button variant="primary" className="text-base" contentClassName="!py-3.5 !px-7" icon arrow onClick={() => window.open('https://cal.com/stepflow-lab/growth-scoping-call', '_blank')}>
                Let's talk
             </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};