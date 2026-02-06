import React from 'react';
import { motion } from 'framer-motion';

export const HeroAnimation: React.FC = () => {
  // Brand colors for reference in SVG
  const cPrimary = "#65e766";
  const cSecondary = "#4dc37a";
  const cDark = "#021f31";

  // Icon Definitions (Centered at 0,0 for path following)
  const Icons = {
    Doc: (
      <g transform="translate(-10, -10) scale(0.8)">
        <rect x="2" y="2" width="16" height="16" rx="2" fill={cDark} stroke={cPrimary} strokeWidth="2" />
        <line x1="6" y1="6" x2="14" y2="6" stroke={cPrimary} strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="10" x2="14" y2="10" stroke={cPrimary} strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="14" x2="10" y2="14" stroke={cPrimary} strokeWidth="2" strokeLinecap="round" />
      </g>
    ),
    Data: (
      <g transform="translate(-10, -8) scale(0.8)">
        <path d="M20 12V8H0V12" stroke="none" /> {/* Bounding helper if needed */}
        <ellipse cx="10" cy="5" rx="8" ry="3" fill={cDark} stroke={cSecondary} strokeWidth="2" />
        <path d="M2 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill={cDark} stroke={cSecondary} strokeWidth="2" />
        <path d="M2 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill={cDark} stroke={cSecondary} strokeWidth="2" />
      </g>
    ),
    Shield: (
       <g transform="translate(-10, -10) scale(0.8)">
          <path d="M10 2l-8 4v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill={cDark} stroke={cPrimary} strokeWidth="2" />
          <path d="M9 13l2 2 4-4" stroke={cPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
       </g>
    ),
    Graph: (
        <g transform="translate(-10, -10) scale(0.8)">
            <rect x="2" y="2" width="16" height="16" rx="2" fill={cDark} stroke={cSecondary} strokeWidth="2" />
            <path d="M6 14l3-3 2 2 4-4" stroke={cSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    )
  };

  return (
    <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
      
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(101,231,102,0.2)]">
        <defs>
          <linearGradient id="beam-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#65e766" stopOpacity="0" />
            <stop offset="50%" stopColor="#65e766" stopOpacity="1" />
            <stop offset="100%" stopColor="#65e766" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vertical-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#217e6d" stopOpacity="0" />
            <stop offset="50%" stopColor="#4dc37a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#217e6d" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
             <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
             <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>

        {/* Orbitals - Background Rings */}
        <motion.g 
           animate={{ rotate: 360 }} 
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
           style={{ transformOrigin: "200px 200px" }}
        >
           <circle cx="200" cy="200" r="140" stroke="#217e6d" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="10 10" />
           <circle cx="200" cy="200" r="180" stroke="#217e6d" strokeWidth="0.5" strokeOpacity="0.1" />
        </motion.g>

         <motion.g 
           animate={{ rotate: -360 }} 
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
           style={{ transformOrigin: "200px 200px" }}
        >
           <circle cx="200" cy="200" r="100" stroke="#4dc37a" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />
        </motion.g>

        {/* Connection Paths (Curved Synapses) */}
        {/* Top to Mid */}
        <path id="path-1" d="M120 100 Q 120 150 80 200" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-2" d="M120 100 Q 160 150 200 200" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-3" d="M280 100 Q 280 150 320 200" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-4" d="M280 100 Q 240 150 200 200" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        
        {/* Mid to Bot */}
        <path id="path-5" d="M80 200 Q 80 250 120 300" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-6" d="M200 200 Q 160 250 120 300" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-7" d="M200 200 Q 240 250 280 300" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <path id="path-8" d="M320 200 Q 320 250 280 300" stroke="#217e6d" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />

        {/* Horizontal Beams (The Structure Levels) */}
        <motion.path 
            d="M100 100 H 300" 
            stroke="url(#beam-grad)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path 
            d="M60 200 H 340" 
            stroke="url(#beam-grad)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path 
            d="M100 300 H 300" 
            stroke="url(#beam-grad)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Vertical Scanning Beam */}
        <motion.rect 
            x="199" y="80" width="2" height="240" 
            fill="url(#vertical-grad)"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
        />

        {/* --- Playful Moving Icons --- */}
        
        {/* Document moving Top-Left -> Mid-Left */}
        <g opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0s" fill="freeze" />
          {Icons.Doc}
          <animateMotion
             path="M120 100 Q 120 150 80 200"
             dur="4s"
             repeatCount="indefinite"
             rotate="auto"
          />
        </g>

        {/* Data Stack moving Top-Right -> Center */}
        <g opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1s" fill="freeze" />
          {Icons.Data}
          <animateMotion
             path="M280 100 Q 240 150 200 200"
             dur="5s"
             begin="1s"
             repeatCount="indefinite"
             rotate="auto"
          />
        </g>

        {/* Shield moving Center -> Bot-Right */}
        <g opacity="0">
           <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2s" fill="freeze" />
           {Icons.Shield}
           <animateMotion
             path="M200 200 Q 240 250 280 300"
             dur="4.5s"
             begin="2s"
             repeatCount="indefinite"
             rotate="auto"
           />
        </g>

         {/* Graph/Analytics moving Top-Right -> Mid-Right */}
         <g opacity="0">
           <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.5s" fill="freeze" />
           {Icons.Graph}
           <animateMotion
             path="M280 100 Q 280 150 320 200"
             dur="6s"
             begin="0.5s"
             repeatCount="indefinite"
             rotate="auto"
           />
        </g>

        {/* Simple Packets (Dots) for extra activity */}
        <circle r="2" fill="#ffffff" filter="url(#glow)" opacity="0">
           <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0s" fill="freeze" />
           <animateMotion
             path="M120 100 Q 160 150 200 200"
             dur="3s"
             repeatCount="indefinite"
           />
        </circle>
        <circle r="2" fill="#ffffff" filter="url(#glow)" opacity="0">
           <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1s" fill="freeze" />
           <animateMotion
             path="M80 200 Q 80 250 120 300"
             dur="3.5s"
             begin="1s"
             repeatCount="indefinite"
           />
        </circle>

        {/* Nodes - Floating & Pulsing */}
        {/* Top Row */}
        <Node cx={120} cy={100} delay={0} />
        <Node cx={280} cy={100} delay={0.5} />
        
        {/* Mid Row */}
        <Node cx={80} cy={200} delay={1} />
        <Node cx={200} cy={200} delay={1.5} primary />
        <Node cx={320} cy={200} delay={2} />

        {/* Bot Row */}
        <Node cx={120} cy={300} delay={2.5} />
        <Node cx={280} cy={300} delay={3} />

      </svg>
    </div>
  );
};

const Node = ({ cx, cy, delay, primary = false }: { cx: number, cy: number, delay: number, primary?: boolean }) => (
    <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay, duration: 0.8, type: "spring" }}
    >
        {/* Outer Ring Pulse */}
        <motion.circle 
            cx={cx} 
            cy={cy} 
            r={primary ? 20 : 12} 
            stroke={primary ? "#65e766" : "#4dc37a"}
            strokeWidth={1}
            fill="none"
            opacity={0.5}
            animate={{ 
                r: primary ? [20, 25, 20] : [12, 16, 12],
                opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
        />

        {/* Main Node Body */}
        <motion.circle 
            cx={cx} 
            cy={cy} 
            r={primary ? 12 : 6} 
            fill={primary ? "#021f31" : "#021f31"} 
            stroke={primary ? "#65e766" : "#4dc37a"}
            strokeWidth={2}
            className="drop-shadow-lg"
        />
        
        {/* Inner Core */}
        <motion.circle 
            cx={cx} 
            cy={cy} 
            r={primary ? 4 : 2} 
            fill={primary ? "#65e766" : "#4dc37a"} 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay }}
        />
    </motion.g>
);