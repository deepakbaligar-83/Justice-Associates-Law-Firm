import React from 'react';

const LegalChecklistsPage = ({ onBack }) => {
  const checklists = [
    {
      title: "Personal Injury Checklist",
      description: "Essential steps to take after an accident",
      icon: "🚗",
      items: [
        "Seek immediate medical attention",
        "Document the accident scene with photos",
        "Collect witness contact information",
        "Report the accident to police",
        "Notify your insurance company",
        "Keep all medical records and bills",
        "Document lost wages and expenses",
        "Contact a personal injury attorney",
        "Avoid giving recorded statements",
        "Don't sign any settlement offers without legal review"
      ]
    },
    {
      title: "Estate Planning Checklist",
      description: "Preparing for your family's future",
      icon: "📋",
      items: [
        "Create a will",
        "Designate beneficiaries for all accounts",
        "Set up a living will/advance directive",
        "Choose a healthcare proxy",
        "Consider a trust for complex estates",
        "Update beneficiary designations regularly",
        "Organize important documents",
        "Inform family members of your plans",
        "Review and update every 3-5 years",
        "Consider life insurance needs"
      ]
    },
    {
      title: "Business Formation Checklist",
      description: "Starting your business the right way",
      icon: "🏢",
      items: [
        "Choose business structure (LLC, Corp, etc.)",
        "Register business name",
        "Obtain necessary licenses and permits",
        "Get an EIN from the IRS",
        "Open business bank account",
        "Set up accounting system",
        "Purchase business insurance",
        "Create operating agreement/bylaws",
        "Register for state taxes",
        "Comply with employment laws"
      ]
    },
    {
      title: "Divorce Preparation Checklist",
      description: "Organizing your affairs before divorce",
      icon: "💔",
      items: [
        "Gather financial documents",
        "List all assets and debts",
        "Document income and expenses",
        "Consider child custody arrangements",
        "Think about property division",
        "Consult with a family law attorney",
        "Consider mediation options",
        "Protect your credit",
        "Update beneficiaries",
        "Plan for post-divorce finances"
      ]
    },
    {
      title: "Real Estate Closing Checklist",
      description: "Preparing for your property purchase",
      icon: "🏠",
      items: [
        "Review purchase agreement",
        "Complete home inspection",
        "Obtain homeowners insurance",
        "Secure financing approval",
        "Review title report",
        "Schedule final walkthrough",
        "Prepare closing funds",
        "Bring required identification",
        "Review closing documents",
        "Complete final paperwork"
      ]
    },
    {
      title: "Criminal Defense Checklist",
      description: "Protecting your rights if charged",
      icon: "⚖️",
      items: [
        "Exercise your right to remain silent",
        "Request an attorney immediately",
        "Don't discuss the case with anyone",
        "Document everything related to the case",
        "Preserve evidence",
        "Gather witness information",
        "Review police reports carefully",
        "Understand your charges",
        "Attend all court hearings",
        "Follow your attorney's advice"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container-custom">
          <button 
            onClick={() => onBack('blog')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Legal Resources
          </button>
        </div>
      </div>

      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Checklists</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Step-by-step guides to help you navigate common legal processes
          </p>
        </div>
      </section>

      {/* Checklists Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checklists.map((checklist, index) => (
              <div key={index} className="card p-8 hover:shadow-strong transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold-600 text-2xl">{checklist.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{checklist.title}</h3>
                  <p className="text-gray-600 text-sm">{checklist.description}</p>
                </div>
                
                <div className="space-y-3">
                  {checklist.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => onBack('contact')}
                    className="btn-primary w-full"
                  >
                    Get Legal Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Need Personalized Legal Guidance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            While these checklists provide general guidance, every legal situation is unique. 
            Consult with our experienced attorneys for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onBack('contact')}
              className="btn-primary"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => onBack('attorneys')}
              className="btn-outline"
            >
              Meet Our Attorneys
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalChecklistsPage;
