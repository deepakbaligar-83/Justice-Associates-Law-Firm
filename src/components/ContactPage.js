import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you with your legal needs. Contact us today for a 
                free consultation and let us fight for your rights.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Legal Plaza<br />
                      Suite 500<br />
                      Downtown, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      (555) 123-4567<br />
                      <span className="text-sm text-gray-500">Emergency: (555) 123-4568</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@justiceassociates.com<br />
                      <span className="text-sm text-gray-500">emergency@justiceassociates.com</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      <span className="text-sm text-gray-500">Sunday: Emergency calls only</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Legal Assistance</h3>
                <p className="text-red-700 mb-4">
                  Need immediate legal help? Our emergency hotline is available 24/7 for urgent legal matters.
                </p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Call Emergency Line: (555) 123-4568
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select Subject</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="family-law">Family Law</option>
                      <option value="business-law">Business Law</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your legal matter in detail..."
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located in the heart of downtown with easy access to public transportation
            </p>
          </div>
          
          <div className="card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">📍 Our Location</h3>
                <p className="text-gray-600 mb-6">
                  123 Legal Plaza, Suite 500<br />
                  Downtown, NY 10001
                </p>
                <p className="text-gray-600 mb-8">
                  We're conveniently located in the heart of downtown with easy access to public transportation 
                  and parking facilities. Our modern office provides a comfortable and professional environment 
                  for client meetings and consultations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary-600">🚇</span>
                    <span className="text-gray-700">5-minute walk from Central Station</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary-600">🚗</span>
                    <span className="text-gray-700">Valet parking available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary-600">♿</span>
                    <span className="text-gray-700">Wheelchair accessible</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h4 className="text-xl font-semibold mb-2">Modern Office Space</h4>
                <p className="text-gray-200">
                  State-of-the-art facilities designed for client comfort and confidentiality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Quick Contact Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our legal team for immediate assistance
              </p>
              <button className="btn-primary">(555) 123-4567</button>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our team in real-time for quick answers
              </p>
              <button className="btn-outline">Start Chat</button>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Schedule Online</h3>
              <p className="text-gray-600 mb-4">
                Book your free consultation at a time that works for you
              </p>
              <button className="btn-outline">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
