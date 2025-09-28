import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Justice & Associates</h3>
                  <p className="text-sm text-gray-400">Law Firm</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Excellence in legal representation for over 25 years. We are committed to protecting 
                your rights and achieving the best possible outcomes for our clients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-lg">💼</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#practice-areas" className="text-gray-300 hover:text-white transition-colors">Practice Areas</a></li>
                <li><a href="#attorneys" className="text-gray-300 hover:text-white transition-colors">Our Attorneys</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            {/* Practice Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Personal Injury</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Criminal Defense</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Family Law</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Business Law</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Estate Planning</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-400 mt-1">📍</span>
                  <div>
                    <p className="text-gray-300">
                      123 Legal Plaza, Suite 500<br />
                      Downtown, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400">📞</span>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400">✉️</span>
                  <p className="text-gray-300">info@justiceassociates.com</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-400 mt-1">🕒</span>
                  <div>
                    <p className="text-gray-300">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Justice & Associates. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Legal Disclaimer</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">J</span>
                </div>
                <span className="text-gray-300 text-sm font-medium">Justice Legal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
