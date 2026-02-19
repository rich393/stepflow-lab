import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // Parallax text
  const y2 = useTransform(scrollY, [0, 500], [0, -50]); // Parallax visual

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-28 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          style={{ y: y1 }}
          className="max-w-2xl"
        >
          {/* Hook / Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Growth Unlocked Through AI
          </motion.div>

          {/* Dominant Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-6"
          >
            AI Workflow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              Intelligence.
            </span>
          </motion.h1>

          {/* Subheadline / Value Prop */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            Building effective AI-driven workflows for fast-moving B2B companies.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" icon arrow onClick={() => window.open('https://cal.com/stepflow-lab/growth-scoping-call', '_blank')}>
              Let's talk
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Visual - Animated Gradient Orb */}
        <motion.div
          className="flex lg:hidden justify-center items-center my-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-primary/10 blur-2xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Inner orb with radial gradient */}
            <motion.div
              className="absolute inset-4 rounded-full"
              style={{
                background: "radial-gradient(circle at 40% 40%, rgba(101,231,102,0.3), rgba(77,195,122,0.15) 50%, rgba(33,126,109,0.05) 80%, transparent 100%)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Core bright point */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-primary"
              animate={{
                opacity: [0.6, 1, 0.6],
                boxShadow: [
                  "0 0 20px 8px rgba(101,231,102,0.2)",
                  "0 0 30px 12px rgba(101,231,102,0.4)",
                  "0 0 20px 8px rgba(101,231,102,0.2)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Right Visual - Abstract Representation */}
        <motion.div 
          style={{ y: y2 }}
          className="relative hidden lg:flex justify-center items-center perspective-1000 h-[600px]"
        >
          {/* Main Visual Container */}
            <div className="relative w-full h-full flex items-center justify-center">
               <HeroAnimation />
            </div>

            {/* Floating Elements (Particles/Data points) */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 right-0 bg-surface-glass backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-tertiary/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-brand-primary -rotate-45" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                  <div className="text-lg font-bold text-white">+102%</div>
                </div>
              </div>
            </motion.div>

             <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-32 left-10 bg-surface-glass backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <div className="text-sm font-mono text-gray-300">System_Active</div>
              </div>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};