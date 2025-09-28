import React from 'react';

const HomePage = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title mb-6 fade-in">
              Excellence in Legal
              <span className="block text-gradient-gold">
                Representation
              </span>
            </h1>
            <p className="hero-subtitle mb-8 max-w-3xl mx-auto slide-up">
              Trusted advocates delivering exceptional results for over 25 years. 
              We fight for justice and protect your rights with unwavering dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => onPageChange('contact')}
              >
                Schedule Free Consultation
              </button>
              <button 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-800"
                onClick={() => onPageChange('practice-areas')}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Personal Injury</h3>
              <p className="text-gray-600 mb-4">We fight for maximum compensation for accident victims</p>
              <button 
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                onClick={() => onPageChange('practice-areas')}
              >
                Learn More →
              </button>
            </div>

            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Criminal Defense</h3>
              <p className="text-gray-600 mb-4">Aggressive defense for all criminal charges</p>
              <button 
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                onClick={() => onPageChange('practice-areas')}
              >
                Learn More →
              </button>
            </div>

            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Family Law</h3>
              <p className="text-gray-600 mb-4">Compassionate guidance through divorce and custody matters</p>
              <button 
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                onClick={() => onPageChange('practice-areas')}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Why Choose Justice & Associates?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience, integrity, and results you can trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-600 text-xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Experienced Attorneys</h3>
              <p className="text-gray-600 text-sm">Our team brings decades of combined legal experience to every case.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-600 text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">We have successfully resolved hundreds of cases for our clients.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-600 text-xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Personal Attention</h3>
              <p className="text-gray-600 text-sm">Every client receives dedicated, personalized legal representation.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-600 text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Transparent Communication</h3>
              <p className="text-gray-600 text-sm">We keep you informed throughout every step of your case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fight for Your Rights?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't wait. Contact us today for a free consultation and let us help you get the justice you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-primary bg-white text-navy-800 hover:bg-gray-100"
              onClick={() => onPageChange('contact')}
            >
              Call Now: (555) 123-4567
            </button>
            <button 
              className="btn-outline border-white text-white hover:bg-white hover:text-navy-800"
              onClick={() => onPageChange('contact')}
            >
              Schedule Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
