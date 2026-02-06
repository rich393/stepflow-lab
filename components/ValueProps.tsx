import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { TrendingUp, Zap, Monitor, Database, MessageCircle, BarChart3, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Connect your tools and eliminate repetitive tasks. We build reliable automations on Make, n8n and Zapier that run around the clock.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    icon: Monitor,
    title: "AI Integrations",
    description: "Embed ChatGPT, Claude or any other AI model into your workflows where intelligent judgement is essential. Make content generation and data analysis tasks infinitely faster and easier.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    icon: Database,
    title: "Seamless Data Pipelines",
    description: "No more manual exports or broken syncs. We engineer reliable data flows between your core systems so everything stays connected and up to date.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: MessageCircle,
    title: "Chatbots & Assistants",
    description: "Customer questions answered, leads qualified, internal requests handled. Custom-built AI assistants trained on your business, speaking in your voice.",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20"
  },
  {
    icon: BarChart3,
    title: "Dashboards and Reporting",
    description: "No more spreadsheet wrangling or manual updates. Automated reports and live dashboards pulling from every source, ready when you are.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20"
  },
  {
    icon: Settings,
    title: "Custom Development",
    description: "Need something unique? Sometimes the right tool doesn't exist yet. We build it. Custom integrations and applications shaped entirely around your business.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20"
  }
];

export const ValueProps: React.FC = () => {
  const [terminalKey, setTerminalKey] = useState(0);

  // Loop the terminal animation every 8 seconds (increased duration for more steps)
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalKey(prev => prev + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="solutions" className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Turn your disconnected apps into a <span className="text-brand-primary">unified system</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Stepflow Lab creates intelligent workflows that can tie your existing apps and subs into simple systems that...well...flow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full flex flex-col justify-start">
              <div className={`mb-6 w-12 h-12 rounded-lg border ${feature.border} ${feature.bg} flex items-center justify-center ${feature.color}`}>
                <motion.div
                  variants={{
                    hover: { 
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Secondary Detailed Section (Swapped Position: Now First) */}
        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center mb-12">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full" />
              <div className="relative bg-surface-card border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                 <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="text-xs text-gray-500 font-mono">system_monitor.exe</div>
                 </div>
                 
                 {/* Animated Terminal Content with Loop */}
                 <div className="min-h-[260px]"> {/* Increased height for new items */}
                   <AnimatePresence mode="wait">
                     <motion.div 
                        key={terminalKey}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: { transition: { staggerChildren: 0.6, delayChildren: 0.2 } }
                        }}
                        className="space-y-3 font-mono text-sm"
                     >
                        <motion.div 
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            className="flex justify-between text-gray-400"
                        >
                           <span>&gt; Initializing custom lead search...</span>
                           <span className="text-brand-primary">OK</span>
                        </motion.div>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            className="flex justify-between text-gray-400"
                        >
                           <span>&gt; optimizing_database_queries...</span>
                           <span className="text-brand-primary">45ms</span>
                        </motion.div>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            className="flex justify-between text-gray-400"
                        >
                           <span>&gt; optimal_leads_found</span>
                           <span className="text-brand-primary">978</span>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <div className="h-px bg-white/10 my-4" />
                        </motion.div>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="flex gap-2 items-center text-white"
                        >
                           <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                           <span className="font-semibold">New Leads Loaded to Email Campaign</span>
                        </motion.div>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="flex gap-2 items-center text-white"
                        >
                           <Zap className="w-4 h-4 text-brand-primary fill-brand-primary animate-pulse" />
                           <span className="font-semibold">Resuming Email Campaign with New Leads</span>
                        </motion.div>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="flex gap-2 items-center text-white"
                        >
                           <Zap className="w-4 h-4 text-brand-secondary fill-brand-secondary animate-pulse" />
                           <span className="font-semibold">Webhooks for Auto-replies Active</span>
                        </motion.div>
                     </motion.div>
                   </AnimatePresence>
                 </div>
              </div>
           </motion.div>
           
           <div>
              <div className="flex items-center gap-3 mb-6">
                 <TrendingUp className="w-6 h-6 text-brand-secondary" />
                 <span className="text-brand-secondary font-medium tracking-wide uppercase text-sm">TAILORED GROWTH STRATEGY</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                 Discover how to make AI your <span className="text-brand-primary">unfair growth advantage.</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                 Every engagement starts the same way: a proper conversation. Here's what your route to growth looks like:
              </p>
              <ul className="space-y-6">
                 {[
                    {
                      title: "Growth Scoping Call (30 min)",
                      description: "Let’s talk. We get to know your business; understanding your current pain points, goals and where your time is disappearing."
                    },
                    {
                      title: "Opportunity Analysis",
                      description: "We map your processes and pinpoint exactly where AI and automation will have the most impact - whether that's a single workflow or a full strategic roadmap - and provide you with a detailed proposal."
                    },
                    {
                      title: "Launch & Support",
                      description: "We handle the rollout end to end, then stick around to optimise, iterate, and spot new opportunities as you grow."
                    }
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300">
                       <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-primary shrink-0 shadow-[0_0_8px_rgba(101,231,102,0.4)]" />
                       <div>
                         <strong className="block text-white text-lg mb-1">{item.title}</strong>
                         <span className="text-gray-400 leading-relaxed block">{item.description}</span>
                       </div>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
        
        {/* Centered CTA Button */}
        <div className="flex justify-center mb-10">
          <Button variant="primary" icon arrow onClick={() => window.open('https://cal.com/stepflow-lab/growth-scoping-call', '_blank')}>
            Let's talk
          </Button>
        </div>

        {/* Founder / About Section - Compact Version (Swapped Position: Now Second) */}
        <motion.div 
           id="about"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             hidden: { opacity: 0 },
             visible: { 
               opacity: 1,
               transition: { 
                 staggerChildren: 0.2
               }
             }
           }}
           className="mt-16 max-w-5xl mx-auto bg-surface-card border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden"
        >
           {/* Decorative Background Blob */}
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

           <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
              {/* Founder Image - Compact */}
              <motion.div 
                 variants={{
                    hidden: { opacity: 0, x: -50, rotate: -2 },
                    visible: { 
                        opacity: 1, 
                        x: 0, 
                        rotate: 0, 
                        transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
                    }
                 }}
                 className="relative group shrink-0"
              >
                 <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-xl overflow-hidden border border-white/10 bg-brand-dark/50 shadow-2xl transform transition-transform duration-500">
                    <img 
                      src="/About Us Rich Image BW 300 width.png" 
                      alt="Rich Henderson" 
                      className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 {/* Accent Lines */}
                 <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r border-b border-brand-primary/30 rounded-br-xl -z-10" />
                 <div className="absolute -top-2 -left-2 w-12 h-12 border-l border-t border-brand-primary/30 rounded-tl-xl -z-10" />
              </motion.div>

              {/* Founder Bio - Compact Text Container with Staggered Children */}
              <motion.div 
                 className="text-center md:text-left"
                 variants={{
                    hidden: { opacity: 1 }, // Wrapper persists to coordinate children
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                 }}
              >
                 <motion.div 
                    variants={{
                       hidden: { opacity: 0, y: -20 },
                       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[10px] font-semibold uppercase tracking-wider mb-3"
                 >
                    About Stepflow Lab
                 </motion.div>
                 
                 <motion.h3 
                    variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                 >
                    Rich Henderson
                 </motion.h3>
                 
                 <motion.p 
                    variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-brand-secondary text-sm font-medium mb-4"
                 >
                    Founder
                 </motion.p>
                 
                 <motion.div 
                    variants={{
                       hidden: { opacity: 0, y: 30 },
                       visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl"
                 >
                    <p>
                       A curious AI tinkerer since the dawn of ChatGPT, Rich founded Stepflow Lab to help B2B companies grow by utilising AI in a way which maximises its economic impact; increasing revenue, cutting costs and saving time. 
                    </p>
                    <p>
                       His background in consulting and sales across FTSE 250 and CAC 40 companies gives him a sharp eye for bottlenecks — and his AI-led workflows have generated clients £10Ks in revenue and savings.
                    </p>
                 </motion.div>
              </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};