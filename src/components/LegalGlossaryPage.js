import React, { useState } from 'react';

const LegalGlossaryPage = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const legalTerms = [
    {
      term: "Affidavit",
      definition: "A written statement of facts made under oath and signed before a notary public or other authorized official.",
      category: "General Legal"
    },
    {
      term: "Alimony",
      definition: "Financial support paid by one spouse to another after divorce, also known as spousal support.",
      category: "Family Law"
    },
    {
      term: "Arraignment",
      definition: "The first court appearance where the defendant is formally charged and enters a plea of guilty or not guilty.",
      category: "Criminal Law"
    },
    {
      term: "Bail",
      definition: "Money or property deposited with the court to secure the release of a defendant from custody pending trial.",
      category: "Criminal Law"
    },
    {
      term: "Breach of Contract",
      definition: "Failure to perform any term of a contract without a valid legal excuse.",
      category: "Business Law"
    },
    {
      term: "Burden of Proof",
      definition: "The obligation to prove allegations in a lawsuit. In criminal cases, the prosecution must prove guilt beyond a reasonable doubt.",
      category: "General Legal"
    },
    {
      term: "Child Custody",
      definition: "The legal right and responsibility to care for a child, including physical and legal custody.",
      category: "Family Law"
    },
    {
      term: "Class Action",
      definition: "A lawsuit filed by one or more people on behalf of a larger group who have similar claims.",
      category: "Civil Law"
    },
    {
      term: "Damages",
      definition: "Monetary compensation awarded to a party who has suffered loss or injury due to another's wrongful act.",
      category: "General Legal"
    },
    {
      term: "Discovery",
      definition: "The pre-trial process where parties exchange information and evidence relevant to the case.",
      category: "General Legal"
    },
    {
      term: "Due Process",
      definition: "The constitutional guarantee that legal proceedings will be fair and that individuals will be given notice and opportunity to be heard.",
      category: "Constitutional Law"
    },
    {
      term: "Eminent Domain",
      definition: "The government's power to take private property for public use, with just compensation to the owner.",
      category: "Property Law"
    },
    {
      term: "Felony",
      definition: "A serious crime punishable by imprisonment for more than one year or by death.",
      category: "Criminal Law"
    },
    {
      term: "Grand Jury",
      definition: "A group of citizens who determine whether there is enough evidence to charge someone with a crime.",
      category: "Criminal Law"
    },
    {
      term: "Habeas Corpus",
      definition: "A writ requiring a person under arrest to be brought before a judge to determine if detention is lawful.",
      category: "Constitutional Law"
    },
    {
      term: "Injunction",
      definition: "A court order requiring a party to do or refrain from doing a specific act.",
      category: "General Legal"
    },
    {
      term: "Joint Custody",
      definition: "An arrangement where both parents share legal and/or physical custody of their children.",
      category: "Family Law"
    },
    {
      term: "Liability",
      definition: "Legal responsibility for one's acts or omissions, which may result in an obligation to pay damages.",
      category: "General Legal"
    },
    {
      term: "Misdemeanor",
      definition: "A less serious crime punishable by a fine or imprisonment for less than one year.",
      category: "Criminal Law"
    },
    {
      term: "Negligence",
      definition: "Failure to exercise reasonable care, resulting in harm to another person or property.",
      category: "Personal Injury"
    },
    {
      term: "Plea Bargain",
      definition: "An agreement between the defendant and prosecutor where the defendant pleads guilty to a lesser charge.",
      category: "Criminal Law"
    },
    {
      term: "Power of Attorney",
      definition: "A legal document that gives someone else the authority to act on your behalf in legal or financial matters.",
      category: "Estate Planning"
    },
    {
      term: "Probate",
      definition: "The legal process of validating a will and distributing a deceased person's assets.",
      category: "Estate Planning"
    },
    {
      term: "Restraining Order",
      definition: "A court order that prohibits someone from contacting or approaching another person.",
      category: "Family Law"
    },
    {
      term: "Statute of Limitations",
      definition: "The time limit within which a lawsuit must be filed after the cause of action arises.",
      category: "General Legal"
    },
    {
      term: "Subpoena",
      definition: "A court order requiring a person to appear in court or produce documents.",
      category: "General Legal"
    },
    {
      term: "Tort",
      definition: "A wrongful act that causes harm to another person, giving rise to civil liability.",
      category: "Personal Injury"
    },
    {
      term: "Trust",
      definition: "A legal arrangement where one party holds property for the benefit of another party.",
      category: "Estate Planning"
    },
    {
      term: "Verdict",
      definition: "The decision reached by a jury or judge in a trial.",
      category: "General Legal"
    },
    {
      term: "Will",
      definition: "A legal document that specifies how a person's assets should be distributed after death.",
      category: "Estate Planning"
    }
  ];

  const categories = ['All', ...Array.from(new Set(legalTerms.map(term => term.category)))];

  const filteredTerms = legalTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Glossary</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Understand legal terminology with our comprehensive glossary
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Terms
                  </label>
                  <input
                    type="text"
                    placeholder="Search for legal terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                {filteredTerms.length} Term{filteredTerms.length !== 1 ? 's' : ''} Found
              </h2>
              {selectedCategory !== 'All' && (
                <p className="text-gray-600">Showing terms in: <span className="font-semibold">{selectedCategory}</span></p>
              )}
            </div>
            
            <div className="space-y-4">
              {filteredTerms.map((term, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-navy-800 mr-3">{term.term}</h3>
                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
                          {term.category}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{term.definition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredTerms.length === 0 && (
              <div className="card p-8 text-center">
                <div className="text-gray-500 text-lg mb-4">No terms found</div>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Need Legal Help?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Understanding legal terms is just the beginning. Our experienced attorneys can help you navigate complex legal matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onBack('contact')}
              className="btn-primary"
            >
              Get Legal Advice
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

export default LegalGlossaryPage;
