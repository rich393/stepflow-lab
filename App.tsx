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

const getPage = (hash: string) => {
  if (hash === '#privacy') return 'privacy';
  if (hash === '#terms') return 'terms';
  return 'home';
};

const App: React.FC = () => {
  const [page, setPage] = useState(() => getPage(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
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