import React from 'react';

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      title: "Personal Injury",
      description: "We fight for maximum compensation for accident victims",
      icon: "⚖️",
      details: "Our personal injury attorneys have recovered millions in settlements and verdicts for clients injured in car accidents, slip and falls, medical malpractice, and other incidents.",
      features: ["Car Accidents", "Slip & Fall", "Medical Malpractice", "Product Liability"]
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense for all criminal charges",
      icon: "🛡️",
      details: "From misdemeanors to serious felonies, our criminal defense team provides aggressive representation to protect your rights and freedom.",
      features: ["DUI/DWI", "Drug Crimes", "White Collar", "Violent Crimes"]
    },
    {
      title: "Family Law",
      description: "Compassionate guidance through divorce and custody matters",
      icon: "👨‍👩‍👧‍👦",
      details: "We handle divorce, child custody, spousal support, and other family law matters with sensitivity and expertise.",
      features: ["Divorce", "Child Custody", "Adoption", "Prenuptial Agreements"]
    },
    {
      title: "Business Law",
      description: "Comprehensive legal solutions for businesses",
      icon: "🏢",
      details: "From formation to litigation, we provide complete legal services for businesses of all sizes.",
      features: ["Business Formation", "Contracts", "Employment Law", "Commercial Litigation"]
    },
    {
      title: "Real Estate",
      description: "Expert guidance for property transactions and disputes",
      icon: "🏠",
      details: "We assist with property purchases, sales, leases, and resolve real estate disputes efficiently.",
      features: ["Property Transactions", "Landlord/Tenant", "Zoning Issues", "Title Disputes"]
    },
    {
      title: "Estate Planning",
      description: "Protect your legacy with proper estate planning",
      icon: "📋",
      details: "Comprehensive estate planning including wills, trusts, and probate administration to protect your family's future.",
      features: ["Wills & Trusts", "Probate", "Estate Administration", "Tax Planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive legal services tailored to your needs
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="card p-8 group hover:shadow-strong transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <span className="text-3xl">{area.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">{area.title}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{area.description}</p>
                    <p className="text-gray-600 mb-4">{area.details}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-navy-800 mb-2">Services Include:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="btn-outline text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Need Legal Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a free consultation to discuss your legal needs. Our experienced attorneys 
              are ready to help you understand your options and fight for your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule Free Consultation
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Practice Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience, expertise, and results that speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Specialized Expertise</h3>
              <p className="text-gray-600">
                Our attorneys focus on specific practice areas, ensuring deep knowledge and expertise in each field.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                We understand that legal matters are urgent. We provide quick responses and immediate action when needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. We provide clear, upfront pricing so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
