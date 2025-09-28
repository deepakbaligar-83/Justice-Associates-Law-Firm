import React, { useState } from 'react';

const FAQPage = ({ onBack }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "Personal Injury",
      icon: "🚗",
      questions: [
        {
          question: "How long do I have to file a personal injury claim?",
          answer: "The statute of limitations for personal injury claims varies by state, typically ranging from 1-3 years from the date of the accident. It's crucial to consult with an attorney as soon as possible to ensure you don't miss important deadlines."
        },
        {
          question: "What damages can I recover in a personal injury case?",
          answer: "You may be able to recover economic damages (medical bills, lost wages, property damage) and non-economic damages (pain and suffering, emotional distress). In some cases, punitive damages may also be available."
        },
        {
          question: "Do I need a lawyer for a personal injury claim?",
          answer: "While you can handle minor claims yourself, having an experienced personal injury attorney significantly increases your chances of receiving fair compensation. They understand the legal process, can negotiate with insurance companies, and ensure you don't miss important deadlines."
        }
      ]
    },
    {
      category: "Criminal Defense",
      icon: "⚖️",
      questions: [
        {
          question: "Should I talk to the police without a lawyer?",
          answer: "No. You have the right to remain silent and the right to an attorney. Anything you say can be used against you in court. It's always best to consult with a criminal defense attorney before speaking with law enforcement."
        },
        {
          question: "What's the difference between a misdemeanor and felony?",
          answer: "Misdemeanors are less serious crimes punishable by up to one year in jail, while felonies are more serious crimes punishable by more than one year in prison. The classification affects your rights, potential penalties, and long-term consequences."
        },
        {
          question: "Can I get my criminal record expunged?",
          answer: "Expungement eligibility varies by state and depends on factors like the type of crime, time since conviction, and your criminal history. An attorney can help determine if you qualify and guide you through the process."
        }
      ]
    },
    {
      category: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      questions: [
        {
          question: "How is child custody determined?",
          answer: "Courts consider the best interests of the child, including factors like each parent's ability to provide care, the child's relationship with each parent, stability of home environment, and the child's preferences (if old enough)."
        },
        {
          question: "What's the difference between divorce and legal separation?",
          answer: "Divorce legally ends the marriage, while legal separation allows couples to live apart and divide assets without officially ending the marriage. Legal separation may be preferred for religious, financial, or insurance reasons."
        },
        {
          question: "How is property divided in a divorce?",
          answer: "Property division depends on whether you live in a community property state (50/50 split) or equitable distribution state (fair but not necessarily equal). Factors include each spouse's contribution, earning capacity, and the length of the marriage."
        }
      ]
    },
    {
      category: "Business Law",
      icon: "🏢",
      questions: [
        {
          question: "What's the difference between an LLC and Corporation?",
          answer: "LLCs offer flexibility in management and taxation, while corporations provide stronger liability protection and easier access to funding. The best choice depends on your business goals, size, and growth plans."
        },
        {
          question: "Do I need a business attorney to start a company?",
          answer: "While not legally required, a business attorney can help you choose the right structure, draft contracts, ensure compliance with regulations, and protect your interests. This investment can save significant time and money later."
        },
        {
          question: "What contracts should my business have?",
          answer: "Essential contracts include employment agreements, client service agreements, vendor contracts, partnership agreements, and terms of service. Each protects different aspects of your business relationships."
        }
      ]
    },
    {
      category: "Estate Planning",
      icon: "📋",
      questions: [
        {
          question: "Do I need a will if I'm young and healthy?",
          answer: "Yes. A will ensures your assets go to your chosen beneficiaries and allows you to name guardians for minor children. Without a will, state law determines how your assets are distributed."
        },
        {
          question: "What's the difference between a will and a trust?",
          answer: "A will takes effect after death and goes through probate, while a trust can take effect during your lifetime and avoid probate. Trusts offer more privacy and control but are more complex and expensive to set up."
        },
        {
          question: "How often should I update my estate plan?",
          answer: "Review your estate plan every 3-5 years or after major life events like marriage, divorce, birth of children, death of beneficiaries, or significant changes in assets or laws."
        }
      ]
    },
    {
      category: "Real Estate",
      icon: "🏠",
      questions: [
        {
          question: "Should I get a home inspection before buying?",
          answer: "Absolutely. A professional home inspection can reveal hidden problems that could cost thousands to repair. It's one of the most important steps in the home buying process."
        },
        {
          question: "What happens if the home inspection reveals problems?",
          answer: "You can negotiate repairs with the seller, request a price reduction, ask for a credit at closing, or walk away from the deal if the problems are too significant."
        },
        {
          question: "Do I need a real estate attorney?",
          answer: "While not required in all states, a real estate attorney can review contracts, ensure proper title transfer, handle closing issues, and protect your interests throughout the transaction."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqKey = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqKey ? null : faqKey);
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common legal questions across different practice areas
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gold-600 text-xl">{category.icon}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy-800">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-navy-800 pr-4">{faq.question}</span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            openFAQ === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openFAQ === `${categoryIndex}-${questionIndex}` && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are here to provide personalized answers to your specific legal questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onBack('contact')}
              className="btn-primary"
            >
              Ask a Question
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

export default FAQPage;
