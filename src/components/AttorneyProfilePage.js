import React from 'react';

const AttorneyProfilePage = ({ attorney, onBack }) => {
  if (!attorney) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Attorney Not Found</h1>
          <button onClick={() => onBack('attorneys')} className="btn-primary">
            Back to Attorneys
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container-custom">
          <button 
            onClick={() => onBack('attorneys')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Attorneys
          </button>
        </div>
      </div>

      {/* Attorney Profile Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Attorney Image & Basic Info */}
            <div className="text-center lg:text-left">
              <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <span className="text-6xl">{attorney.image}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{attorney.name}</h1>
              <p className="text-xl text-gray-200 mb-1">{attorney.title}</p>
              <p className="text-lg text-gray-300 mb-2">{attorney.expertise}</p>
              <p className="text-gray-300">{attorney.experience} experience</p>
            </div>

            {/* Quick Stats */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                  <div className="text-gray-200">Cases Won</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
                  <div className="text-gray-200">Success Rate</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">25+</div>
                  <div className="text-gray-200">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Profile Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">About {attorney.name.split(' ')[0]}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{attorney.bio}</p>
              </div>

              {/* Practice Areas */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Practice Areas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {attorney.expertise.split(', ').map((area, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Cases */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Notable Cases</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-navy-800">Landmark Personal Injury Settlement</h3>
                    <p className="text-gray-600 text-sm">Secured $2.5M settlement for client in complex multi-party accident case</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-navy-800">Successful Criminal Defense</h3>
                    <p className="text-gray-600 text-sm">Obtained not guilty verdict in high-profile white-collar crime case</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-navy-800">Business Litigation Victory</h3>
                    <p className="text-gray-600 text-sm">Won $1.8M judgment for client in breach of contract dispute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education & Credentials */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Education & Credentials</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Education</h4>
                    <p className="text-gray-600">{attorney.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Bar Admissions</h4>
                    <p className="text-gray-600">{attorney.barAdmissions}</p>
                  </div>
                </div>
              </div>

              {/* Awards & Recognition */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Awards & Recognition</h3>
                <ul className="space-y-2">
                  {attorney.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Contact {attorney.name.split(' ')[0]}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">{attorney.name.toLowerCase().replace(' ', '.')}@justiceassociates.com</span>
                  </div>
                </div>
                <button 
                  onClick={() => onBack('contact')}
                  className="btn-primary w-full mt-4"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneyProfilePage;
