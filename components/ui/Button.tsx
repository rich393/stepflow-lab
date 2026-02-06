import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Logo } from '../Logo';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  arrow?: boolean;
  children?: React.ReactNode;
  contentClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  arrow = false,
  className = '',
  contentClassName,
  ...props 
}) => {
  
  const paddingClass = contentClassName ?? "px-8 py-4";

  // Base styles: relative positioning, flex layout, no overflow hiding on parent to allow glow
  const baseStyles = "relative rounded-2xl font-medium text-base flex items-center justify-center gap-2 group isolate";
  
  // Container styles per variant (applied to the motion.button)
  const containerVariants = {
    primary: "text-brand-dark", // Background handled by inner layer
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors duration-300",
    outline: "text-white bg-transparent hover:bg-white/5 transition-colors duration-300"
  };

  // Surface styles (The actual visible button background for primary)
  const primarySurfaceClass = "bg-brand-primary shadow-[0_0_20px_-5px_rgba(101,231,102,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(101,231,102,0.6)]";

  return (
    <motion.button
      className={`${baseStyles} ${containerVariants[variant]} ${paddingClass} ${className}`}
      initial="idle"
      animate="idle"
      whileHover="hover"
      whileTap="tap"
      variants={{
        idle: { scale: 1 },
        hover: { scale: variant === 'primary' ? 1.05 : 1.02 },
        tap: { scale: 0.95 }
      }}
      {...props}
    >
      {/* ---------------- PRIMARY VARIANT LAYERS ---------------- */}
      {variant === 'primary' && (
        <>
          {/* 1. Core Pulsing Layer (The Stone) */}
          <motion.div
            className="absolute inset-0 bg-brand-primary rounded-2xl -z-20"
            variants={{
                idle: {
                    scale: 1,
                    opacity: 0.5, 
                    filter: "blur(10px)",
                },
                hover: {
                    scale: [1, 1.05, 1], 
                    opacity: [0.6, 0.8, 0.6],
                    filter: "blur(15px)",
                    transition: {
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }
            }}
          />

          {/* 
            RIPPLE SYSTEM 
            Using borders instead of filled backgrounds to create "troughs" (gaps) between waves.
            Staggered delays create the wave train effect.
          */}

          {/* Ripple 1 */}
          <motion.div
             className="absolute inset-0 rounded-2xl -z-30 border border-brand-primary/30"
             variants={{
                idle: { opacity: 0, scale: 1 },
                hover: {
                    scale: [1, 1.5],
                    opacity: [0.5, 0], // Reduced max opacity for subtlety
                    borderWidth: ["2px", "0px"], // Thins out completely
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }
                }
             }}
          />
          
          {/* Ripple 2 */}
          <motion.div
             className="absolute inset-0 rounded-2xl -z-30 border border-brand-primary/30"
             variants={{
                idle: { opacity: 0, scale: 1 },
                hover: {
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                    borderWidth: ["2px", "0px"],
                    transition: {
                        duration: 2,
                        delay: 0.6,
                        repeat: Infinity,
                        ease: "easeOut"
                    }
                }
             }}
          />

          {/* Ripple 3 */}
          <motion.div
             className="absolute inset-0 rounded-2xl -z-30 border border-brand-primary/30"
             variants={{
                idle: { opacity: 0, scale: 1 },
                hover: {
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                    borderWidth: ["2px", "0px"],
                    transition: {
                        duration: 2,
                        delay: 1.2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }
                }
             }}
          />

          {/* 4. Solid Surface Layer (The "Button" itself) */}
          <div className={`absolute inset-0 rounded-2xl -z-10 overflow-hidden ${primarySurfaceClass}`}>
             {/* Shine Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />
          </div>
        </>
      )}

      {/* ---------------- CONTENT ---------------- */}
      {icon && <Logo className="w-5 h-5 relative z-10" color={variant === 'primary' ? "#14532d" : undefined} />}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight 
            className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            strokeWidth={2.5}
        />
      )}
    </motion.button>
  );
};