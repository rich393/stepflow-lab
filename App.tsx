import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ValueProps } from './components/ValueProps';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';

const getPage = (pathname: string) => {
  if (pathname === '/privacy' || pathname === '/privacy/') return 'privacy';
  if (pathname === '/terms' || pathname === '/terms/') return 'terms';
  return 'home';
};

export const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const App: React.FC = () => {
  const [page, setPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    return getPage(window.location.pathname);
  });

  useEffect(() => {
    const onPopState = () => {
      setPage(getPage(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (page === 'privacy') return <PrivacyPolicy />;
  if (page === 'terms') return <Terms />;

  return (
    <main className="text-white selection:bg-brand-primary/30 selection:text-white relative">
      <Background />
      <Navbar />
      <Hero />
      <SocialProof />
      <ValueProps />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default App;