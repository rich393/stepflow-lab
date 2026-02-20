import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { navigate } from '../App';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block sm:w-[400px] sm:h-[250px] md:w-[800px] md:h-[400px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8">
             Ready to evolve?
           </h2>
           <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
             Join the forward-thinking companies using Stepflow Lab to make AI their biggest competitive edge.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="h-16 text-xl w-full sm:w-auto" contentClassName="px-12" icon arrow onClick={() => window.open('https://cal.com/stepflow-lab/growth-scoping-call', '_blank')}>
                Let's talk
              </Button>
           </div>
        </motion.div>

        <footer className="mt-28 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
           <div>
              <p>© {new Date().getFullYear()} Stepflow Lab. All rights reserved.</p>
              <p className="mt-1">Website build and maintenance by Stepflow Lab.</p>
           </div>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="hover:text-white transition-colors py-2">Privacy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} className="hover:text-white transition-colors py-2">Terms</a>
           </div>
        </footer>
      </div>
    </section>
  );
};