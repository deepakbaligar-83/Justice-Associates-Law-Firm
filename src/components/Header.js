import React, { useState } from 'react';

const Header = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'practice-areas', name: 'Practice Areas' },
    { id: 'attorneys', name: 'Attorneys' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'blog', name: 'Blog' },
    { id: 'careers', name: 'Careers' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-800">Justice & Associates</h1>
              <p className="text-xs text-gray-600">Law Firm</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`nav-link py-2 px-1 text-sm ${
                  currentPage === page.id ? 'nav-link-active' : ''
                }`}
              >
                {page.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onPageChange('contact')}
              className="btn-primary"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-gray-700 transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 slide-in">
            <nav className="flex flex-col space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsMenuOpen(false);
                  }}
                  className={`py-3 px-4 text-left rounded-lg transition-colors duration-200 ${
                    currentPage === page.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onPageChange('contact');
                  setIsMenuOpen(false);
                }}
                className="btn-primary mt-4"
              >
                Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
