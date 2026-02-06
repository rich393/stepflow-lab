import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    company: "Sauce Remote",
    author: "Mila Whitman",
    role: "Founder",
    quote: "Stepflow Lab's service and expertise was excellent in delivering our Job Scraping & CRM workflow. Great final product. Highly recommend.",
    outcome: "Reduced manual data entry by 85%"
  },
  {
    company: "Daughters of Gaea",
    author: "Felicity",
    role: "Founder",
    quote: "The infrastructure they built led us to acquiring 4x the number of Retailers stocking our brand within 9 months.",
    outcome: "4x New Retailers signed within 9 months"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16"
        >
          Some words from <br className="md:hidden" /> happy clients.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group flex flex-col justify-between p-8 rounded-2xl bg-gray-100 text-gray-900 relative overflow-hidden transition-all"
            >
              {/* Highlight effect on hover (Inverted for light card) */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-2 opacity-60">
                  <span className="font-bold uppercase tracking-wider text-xs border border-gray-400 px-2 py-1 rounded">
                     {t.company}
                  </span>
                </div>
                
                <p className="text-xl md:text-2xl font-medium leading-tight mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="relative z-10 border-t border-gray-300 pt-6">
                 {/* Outcome Highlight */}
                 <div className="mb-4 text-brand-tertiary font-bold text-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-tertiary animate-pulse" />
                    {t.outcome}
                 </div>

                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                       {t.author.charAt(0)}
                    </div>
                    <div>
                       <div className="font-bold text-sm">{t.author}</div>
                       <div className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};