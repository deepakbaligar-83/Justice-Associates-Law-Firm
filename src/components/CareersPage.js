import React from 'react';

const CareersPage = ({ onPageChange }) => {
  const jobOpenings = [
    {
      title: "Associate Attorney - Personal Injury",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years experience",
      description: "We are seeking an experienced personal injury attorney to join our growing team. The ideal candidate will have 3+ years of experience in personal injury law and a proven track record of successful case outcomes.",
      requirements: [
        "Juris Doctor degree from an accredited law school",
        "Active New York State bar admission",
        "3+ years of personal injury experience",
        "Strong research and writing skills",
        "Excellent communication and client service skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Professional development"]
    },
    {
      title: "Paralegal - Family Law",
      location: "New York, NY",
      type: "Full-time",
      experience: "2+ years experience",
      description: "Join our family law team as a paralegal with strong organizational skills and attention to detail. This role involves supporting attorneys with case preparation, client communication, and document management.",
      requirements: [
        "Paralegal certificate or equivalent experience",
        "2+ years of family law experience preferred",
        "Proficiency in legal research databases",
        "Strong organizational and time management skills",
        "Excellent written and verbal communication"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible schedule", "Growth opportunities"]
    },
    {
      title: "Legal Assistant - Business Law",
      location: "New York, NY",
      type: "Full-time",
      experience: "Entry level",
      description: "We are looking for a motivated legal assistant to support our business law practice. This is an excellent opportunity for someone looking to start their legal career.",
      requirements: [
        "Bachelor's degree preferred",
        "Strong computer skills (Microsoft Office, legal software)",
        "Excellent attention to detail",
        "Professional demeanor and communication skills",
        "Ability to work in a fast-paced environment"
      ],
      benefits: ["Competitive salary", "Health insurance", "Training provided", "Career advancement"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Build your legal career with Justice & Associates
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Justice & Associates, we believe that our people are our greatest asset. 
                We offer a collaborative environment where talented legal professionals can 
                grow their careers while making a meaningful impact on our clients' lives.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Benefits & Perks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Competitive salary and comprehensive benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Professional development opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Collaborative work environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">High-profile case opportunities</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Flexible work arrangements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Mentorship programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">State-of-the-art technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-700">Pro bono opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Team Culture</h3>
              <p className="text-gray-200 mb-6">
                Join a diverse group of legal professionals dedicated to excellence, 
                integrity, and making a positive impact in our community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">🤝</span>
                  <span>Collaborative Environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">📈</span>
                  <span>Career Growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">⚖️</span>
                  <span>Meaningful Work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold-400">🏆</span>
                  <span>Recognition & Rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our team and help us continue our mission of providing exceptional legal services
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="card p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center text-gray-600">
                        <span className="mr-2">📍</span>
                        {job.location}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <span className="mr-2">💼</span>
                        {job.type}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <span className="mr-2">📅</span>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <button
                      className="btn-primary w-full lg:w-auto"
                      onClick={() => onPageChange("apply", null, job.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">Complete our online application form with your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our HR team reviews your application and qualifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Interview Process</h3>
              <p className="text-gray-600 text-sm">Meet with our team for interviews and assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Welcome Aboard</h3>
              <p className="text-gray-600 text-sm">Join our team and begin your journey with Justice & Associates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals. 
            Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-primary bg-white text-navy-800 hover:bg-gray-100"
              onClick={() => onPageChange("apply", null, null)}
            >
              Submit General Application
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
