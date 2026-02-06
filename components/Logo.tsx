import React from 'react';

interface LogoProps {
  className?: string;
  animated?: boolean;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", animated = false, color }) => {
  // Brand colors - use override color if provided, otherwise default palette
  const c1 = color || "#65e766";
  const c2 = color || "#4dc37a";
  const c3 = color || "#217e6d";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Node */}
      <circle cx="30" cy="25" r="12" fill={c1} className={animated ? "animate-pulse" : ""} style={{ animationDuration: '3s' }} />
      <circle cx="70" cy="25" r="12" fill={c1} className={animated ? "animate-pulse" : ""} style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      <path d="M30 25 H70" stroke={c1} strokeWidth="8" strokeLinecap="round" />

      {/* Middle Node */}
      <circle cx="20" cy="50" r="12" fill={c2} />
      <circle cx="50" cy="50" r="12" fill={c2} />
      <circle cx="80" cy="50" r="12" fill={c2} />
      <path d="M20 50 H80" stroke={c2} strokeWidth="8" strokeLinecap="round" />

      {/* Bottom Node */}
      <circle cx="30" cy="75" r="12" fill={c3} className={animated ? "animate-pulse" : ""} style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <circle cx="70" cy="75" r="12" fill={c3} className={animated ? "animate-pulse" : ""} style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
      <path d="M30 75 H70" stroke={c3} strokeWidth="8" strokeLinecap="round" />

      {/* Connections between rows (Abstracted) */}
      <path d="M30 25 Q 20 37.5 20 50" stroke={c1} strokeWidth="2" strokeOpacity="0.5" fill="none" />
      <path d="M70 25 Q 80 37.5 80 50" stroke={c1} strokeWidth="2" strokeOpacity="0.5" fill="none" />
      <path d="M20 50 Q 30 62.5 30 75" stroke={c3} strokeWidth="2" strokeOpacity="0.5" fill="none" />
      <path d="M80 50 Q 70 62.5 70 75" stroke={c3} strokeWidth="2" strokeOpacity="0.5" fill="none" />
    </svg>
  );
};

export const LogoWordmark: React.FC<{ 
  className?: string;
  logoClassName?: string;
  textClassName?: string;
}> = ({ 
  className = "", 
  logoClassName = "w-8 h-8",
  textClassName = "text-lg"
}) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <Logo className={logoClassName} />
    <span className={`font-bold tracking-tight text-white uppercase ${textClassName}`}>
      Stepflow <span className="text-brand-primary">Lab</span>
    </span>
  </div>
);