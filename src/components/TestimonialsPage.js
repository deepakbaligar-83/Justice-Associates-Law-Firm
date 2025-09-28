import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      text: "Justice & Associates helped me through the most difficult time of my life. Their expertise and compassion made all the difference. I couldn't have asked for better representation.",
      author: "John Smith",
      case: "Personal Injury Case",
      result: "Settlement: $2.5M",
      rating: 5,
      image: "👨"
    },
    {
      text: "Professional, knowledgeable, and results-driven. I couldn't have asked for better representation. They fought tirelessly for my rights and achieved an outcome I never thought possible.",
      author: "Maria Garcia",
      case: "Business Dispute",
      result: "Favorable Settlement",
      rating: 5,
      image: "👩"
    },
    {
      text: "They fought tirelessly for my rights and achieved an outcome I never thought possible. The entire team was professional, responsive, and truly cared about my case.",
      author: "Robert Johnson",
      case: "Criminal Defense",
      result: "Case Dismissed",
      rating: 5,
      image: "👨"
    },
    {
      text: "The family law team at Justice & Associates made my divorce process as smooth as possible. They were understanding, professional, and always had my best interests at heart.",
      author: "Lisa Thompson",
      case: "Divorce Proceedings",
      result: "Favorable Custody Agreement",
      rating: 5,
      image: "👩"
    },
    {
      text: "Their real estate expertise saved me thousands of dollars and countless headaches. I highly recommend their services to anyone dealing with property matters.",
      author: "David Wilson",
      case: "Real Estate Transaction",
      result: "Successful Closing",
      rating: 5,
      image: "👨"
    },
    {
      text: "The estate planning team helped me protect my family's future. They were thorough, patient, and made sure I understood every aspect of my estate plan.",
      author: "Susan Davis",
      case: "Estate Planning",
      result: "Complete Estate Plan",
      rating: 5,
      image: "👩"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experiences
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 hover:shadow-strong transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="mb-6">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.case}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Recent Case Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results for real people
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$2.5M</div>
              <div className="text-gray-600 font-medium mb-2">Personal Injury Settlement</div>
              <p className="text-sm text-gray-500">Car accident victim received maximum compensation</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium mb-2">Criminal Cases Won</div>
              <p className="text-sm text-gray-500">Outstanding success rate in criminal defense</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$5M+</div>
              <div className="text-gray-600 font-medium mb-2">Total Recoveries</div>
              <p className="text-sm text-gray-500">Combined settlements and verdicts</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium mb-2">Successful Cases</div>
              <p className="text-sm text-gray-500">Cases resolved in favor of our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed accounts of how we've helped our clients
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-primary-600 font-semibold mb-2">Personal Injury Case</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">$2.5 Million Settlement for Car Accident Victim</h3>
                  <p className="text-gray-600 mb-4">
                    Our client suffered severe injuries in a car accident caused by a distracted driver. 
                    Despite the insurance company's initial lowball offer, we fought tirelessly and secured 
                    a $2.5 million settlement that covered all medical expenses and provided for future care.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Client:</span>
                      <span className="text-gray-600 ml-1">John Smith</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Attorney:</span>
                      <span className="text-gray-600 ml-1">Sarah Justice</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                  <div className="text-5xl font-bold mb-2">$2.5M</div>
                  <div className="text-gray-200">Settlement Amount</div>
                </div>
              </div>
            </div>

            <div className="card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-primary-600 font-semibold mb-2">Criminal Defense</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">Complete Dismissal of DUI Charges</h3>
                  <p className="text-gray-600 mb-4">
                    Our client was facing serious DUI charges that could have resulted in jail time and 
                    loss of license. Through careful investigation and expert legal strategy, we were able 
                    to get all charges dismissed, preserving our client's clean record and future.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Client:</span>
                      <span className="text-gray-600 ml-1">Robert Johnson</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Attorney:</span>
                      <span className="text-gray-600 ml-1">Sarah Justice</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-500 rounded-lg p-8 text-white text-center">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-green-100">Case Dismissed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Success Story?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the justice you deserve. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-navy-800 hover:bg-gray-100">
              Schedule Free Consultation
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
