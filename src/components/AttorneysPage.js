import React from 'react';

const AttorneysPage = ({ onPageChange }) => {
  const attorneys = [
    {
      name: "Sarah Justice",
      title: "Managing Partner",
      expertise: "Personal Injury, Criminal Defense",
      experience: "25 years",
      image: "👩‍💼",
      bio: "Sarah founded Justice & Associates in 1999 and has been fighting for clients' rights ever since. She has won numerous high-profile cases and is recognized as one of the top trial attorneys in the state.",
      education: "J.D., Harvard Law School",
      barAdmissions: "New York, Connecticut, Federal Courts",
      achievements: ["Super Lawyers 2020-2024", "AVVO Rating 10/10", "500+ Cases Won"]
    },
    {
      name: "Michael Chen",
      title: "Senior Partner",
      expertise: "Business Law, Real Estate",
      experience: "20 years",
      image: "👨‍💼",
      bio: "Michael specializes in complex business transactions and real estate matters. His attention to detail and strategic thinking have helped countless businesses achieve their goals.",
      education: "J.D., Columbia Law School",
      barAdmissions: "New York, New Jersey",
      achievements: ["Best Lawyers 2021-2024", "Chamber Distinguished", "Top 100 Attorneys"]
    },
    {
      name: "Emily Rodriguez",
      title: "Partner",
      expertise: "Family Law, Estate Planning",
      experience: "15 years",
      image: "👩‍⚖️",
      bio: "Emily brings compassion and expertise to family law matters. She understands the emotional challenges clients face and works tirelessly to achieve the best outcomes for families.",
      education: "J.D., Yale Law School",
      barAdmissions: "New York, Federal Courts",
      achievements: ["Family Law Specialist", "Pro Bono Award 2023", "Client Choice Award"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Attorneys</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experienced legal professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <div key={index} className="card p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Attorney Image & Basic Info */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                      <span className="text-5xl">{attorney.image}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">{attorney.name}</h3>
                    <p className="text-primary-600 font-semibold mb-1">{attorney.title}</p>
                    <p className="text-gray-600 mb-2">{attorney.expertise}</p>
                    <p className="text-sm text-gray-500">{attorney.experience} experience</p>
                  </div>

                  {/* Bio & Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-navy-800 mb-3">About {attorney.name.split(' ')[0]}</h4>
                      <p className="text-gray-600 leading-relaxed">{attorney.bio}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Education & Bar Admissions */}
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h5 className="font-semibold text-navy-800 mb-3">Education & Credentials</h5>
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-gray-700">Education:</span>
                            <p className="text-sm text-gray-600">{attorney.education}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Bar Admissions:</span>
                            <p className="text-sm text-gray-600">{attorney.barAdmissions}</p>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h5 className="font-semibold text-navy-800 mb-3">Recognition & Awards</h5>
                        <ul className="space-y-1">
                          {attorney.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button 
                        className="btn-primary"
                        onClick={() => onPageChange('contact')}
                      >
                        Schedule Consultation
                      </button>
                      <button 
                        className="btn-outline"
                        onClick={() => onPageChange('attorney-profile', attorney)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Team's Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combined experience and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">60+</div>
              <div className="text-gray-600 font-medium">Combined Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Cases Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Attorneys */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Why Choose Our Attorneys?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience, dedication, and results that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Top-Tier Education</h3>
              <p className="text-gray-600">
                Our attorneys graduated from the nation's most prestigious law schools and continue their education through ongoing training.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                With hundreds of successful cases and numerous awards, our attorneys have consistently delivered exceptional results.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Personal Approach</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our clients, providing personalized attention and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneysPage;
