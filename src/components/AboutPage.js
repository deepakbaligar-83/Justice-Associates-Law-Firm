import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Justice & Associates</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated to serving our clients with integrity, expertise, and compassion
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, Justice & Associates has been committed to providing 
                exceptional legal representation. We believe in the power of justice and 
                work tirelessly to protect our clients' rights and interests.
              </p>
              
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-navy-800">Integrity:</strong>
                    <span className="text-gray-600 ml-2">We maintain the highest ethical standards in all our dealings</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-navy-800">Excellence:</strong>
                    <span className="text-gray-600 ml-2">We strive for superior results in every case we handle</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-navy-800">Compassion:</strong>
                    <span className="text-gray-600 ml-2">We understand the personal impact of legal issues on our clients</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-navy-800">Dedication:</strong>
                    <span className="text-gray-600 ml-2">We are committed to our clients' success and well-being</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Office</h3>
              <p className="text-gray-200 mb-6">
                Modern facilities designed for client comfort and confidentiality
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">📍</span>
                  <span>123 Legal Plaza, Suite 500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">📞</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">✉️</span>
                  <span>info@justiceassociates.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm History */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of growth, excellence, and unwavering commitment to justice
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1999
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">Firm Founded</h3>
                  <p className="text-gray-600">
                    Justice & Associates was established with a vision to provide exceptional legal services 
                    and fight for justice in our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2005
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    We expanded our practice areas to include business law and real estate, 
                    growing our team of experienced attorneys.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2015
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">New Office</h3>
                  <p className="text-gray-600">
                    Moved to our current state-of-the-art facility in downtown, 
                    providing clients with modern, comfortable meeting spaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2024
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">25 Years Strong</h3>
                  <p className="text-gray-600">
                    Celebrating 25 years of dedicated service to our community, 
                    with over 500 successful cases and countless satisfied clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our dedication to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium mb-2">Years of Experience</div>
              <p className="text-sm text-gray-500">Serving our community with unwavering dedication</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium mb-2">Cases Won</div>
              <p className="text-sm text-gray-500">Proven track record of successful outcomes</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium mb-2">Client Satisfaction</div>
              <p className="text-sm text-gray-500">Consistently exceeding client expectations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
