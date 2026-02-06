import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      variants={{
        hover: { 
          y: -5, 
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)" 
        }
      }}
      className={`relative rounded-xl border border-white/10 bg-surface-card backdrop-blur-sm p-8 overflow-hidden group ${className}`}
    >
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(101, 231, 102, 0.06), transparent 40%)`,
        }}
      />
      
      {/* Border beam gradient helper */}
      <div 
         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
         style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(101, 231, 102, 0.4), transparent 40%)`,
            maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
         }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};