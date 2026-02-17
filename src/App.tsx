import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { CaseStudy } from './pages/CaseStudy';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [projectId, setProjectId] = useState<string | undefined>();

  const handleNavigate = (page: string, id?: string) => {
    // FIX 1: Explicitly set the ID. If navigating to a non-project page, 
    // it resets the ID to prevent old data from lingering.
    setProjectId(id); 
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setCurrentPage(hash);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      
      // FIX 2: Changed 'case-study' to 'casestudy' to match common 
      // navigation calls like onNavigate('casestudy', 'sickle-cell')
      case 'casestudy': 
        return <CaseStudy projectId={projectId} onNavigate={handleNavigate} />;
        
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0A0A0F] via-[#15151D] to-[#0A0A0F]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}