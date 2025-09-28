import React, { useState } from 'react';
import './styles.css';

// Import Components
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PracticeAreasPage from './components/PracticeAreasPage';
import AttorneysPage from './components/AttorneysPage';
import AttorneyProfilePage from './components/AttorneyProfilePage';
import TestimonialsPage from './components/TestimonialsPage';
import BlogPage from './components/BlogPage';
import LegalChecklistsPage from './components/LegalChecklistsPage';
import FAQPage from './components/FAQPage';
import LegalGlossaryPage from './components/LegalGlossaryPage';
import CareersPage from './components/CareersPage';
import ApplyPage from './components/ApplyPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const handlePageChange = (page, data = null) => {
    setCurrentPage(page);

    if (page === 'attorney-profile') {
      setSelectedAttorney(data);
    } else if (page === 'apply') {
      setSelectedJob(data);
    } else {
      setSelectedAttorney(null);
      setSelectedJob(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage />;
      case 'practice-areas':
        return <PracticeAreasPage />;
      case 'attorneys':
        return <AttorneysPage onPageChange={handlePageChange} />;
      case 'attorney-profile':
        return <AttorneyProfilePage attorney={selectedAttorney} onBack={handlePageChange} />;
      case 'apply':
        return <ApplyPage jobTitle={selectedJob} onBack={handlePageChange} />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'blog':
        return <BlogPage onPageChange={handlePageChange} />;
      case 'legal-checklists':
        return <LegalChecklistsPage onBack={handlePageChange} />;
      case 'faq':
        return <FAQPage onBack={handlePageChange} />;
      case 'legal-glossary':
        return <LegalGlossaryPage onBack={handlePageChange} />;
      case 'careers':
        return <CareersPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;