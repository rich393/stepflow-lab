import React, { useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

const brands = [
  { name: 'Make', slug: 'make' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'ClickUp', slug: 'clickup' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'Notion', slug: 'notion' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Gemini', slug: 'googlegemini' },
];

// Create a safe buffer for infinite scrolling
const ALL_BRANDS = [...brands, ...brands, ...brands, ...brands];
const ITEM_WIDTH = 350; // Increased width for more breathing room
const START_INDEX = brands.length; // Start at the beginning of the second set

export const SocialProof: React.FC = () => {
  const [index, setIndex] = useState(START_INDEX);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000); // 2 seconds pause between moves

    return () => clearInterval(timer);
  }, []);

  const handleAnimationComplete = () => {
    // When we reach the end of the second set (visually identical to start of second set)
    // Snap back to the start of the second set
    if (index >= brands.length * 2) {
      setIsResetting(true);
      setIndex(START_INDEX);
      // Small timeout to allow the render to snap without animation
      setTimeout(() => {
        setIsResetting(false);
      }, 50);
    }
  };

  return (
    // Reduced top padding (pt-8) to shift section up closer to hero, kept bottom padding (pb-20)
    <section className="-mt-8 pt-0 pb-10 relative z-20 overflow-hidden">

      {/* Title */}
      <div className="container mx-auto px-6 mb-8 text-center relative z-20">
         <p className="text-xs font-bold text-brand-primary/80 uppercase tracking-[0.3em]">
            POWERED BY INDUSTRY-LEADING PLATFORMS
         </p>
      </div>
      
      {/* Carousel Container */}
      <div className="relative h-48 flex items-center justify-center">
        

        {/* Sliding Track */}
        <div className="w-full flex justify-start items-center overflow-hidden">
             <motion.div 
                className="flex items-center gap-0"
                animate={{ 
                    x: `calc(-${index * ITEM_WIDTH}px + 50vw - ${ITEM_WIDTH / 2}px)` 
                }}
                transition={ isResetting ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20, mass: 1 } }
                onAnimationComplete={handleAnimationComplete}
             >
                {ALL_BRANDS.map((brand, i) => (
                    <div 
                        key={i} 
                        className="flex-shrink-0 flex flex-col items-center justify-center gap-6"
                        style={{ width: ITEM_WIDTH }}
                    >
                        {/* Wrapper for scaling effect */}
                        <motion.div 
                            className="flex flex-col items-center transition-all duration-500"
                            animate={{
                                opacity: Math.abs(index - i) < 2 ? 1 : 0.3,
                                // Scale Logic: Active is 1 (crisp native size), Inactive scales down to 0.6
                                scale: index === i ? 1 : 0.6, 
                                filter: index === i ? "grayscale(0%)" : "grayscale(100%) blur(1px)"
                            }}
                        >
                            {/* Icon - Increased padding to p-12 (was p-10) to reduce logo size by ~10% */}
                            <div className="h-32 w-32 flex items-center justify-center p-8">
                                <img 
                                    src={`https://cdn.simpleicons.org/${brand.slug}/white`} 
                                    alt={brand.name}
                                    className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Wordmark */}
                            <span className="text-2xl font-bold text-gray-300 tracking-tight mt-2">
                                {brand.name}
                            </span>
                        </motion.div>
                    </div>
                ))}
             </motion.div>
        </div>

      </div>
    </section>
  );
};