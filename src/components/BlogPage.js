import React from 'react';

const BlogPage = ({ onPageChange }) => {
  const blogPosts = [
    {
      title: "Understanding Your Rights After a Car Accident",
      excerpt: "Learn about the important steps to take and your legal rights following a car accident.",
      date: "March 15, 2024",
      category: "Personal Injury",
      readTime: "5 min read",
      featured: true,
      image: "🚗"
    },
    {
      title: "The Importance of Estate Planning",
      excerpt: "Protect your family's future with proper estate planning and will preparation.",
      date: "March 10, 2024",
      category: "Estate Planning",
      readTime: "7 min read",
      featured: false,
      image: "📋"
    },
    {
      title: "Business Formation: LLC vs Corporation",
      excerpt: "A comprehensive guide to choosing the right business structure for your company.",
      date: "March 5, 2024",
      category: "Business Law",
      readTime: "6 min read",
      featured: false,
      image: "🏢"
    },
    {
      title: "What to Expect During a Criminal Defense Case",
      excerpt: "Understanding the criminal justice process and how to prepare for your defense.",
      date: "February 28, 2024",
      category: "Criminal Defense",
      readTime: "8 min read",
      featured: false,
      image: "⚖️"
    },
    {
      title: "Divorce Mediation vs Litigation",
      excerpt: "Exploring your options for resolving divorce disputes amicably.",
      date: "February 20, 2024",
      category: "Family Law",
      readTime: "6 min read",
      featured: false,
      image: "💔"
    },
    {
      title: "Real Estate Closing Checklist",
      excerpt: "Everything you need to know before closing on your new property.",
      date: "February 15, 2024",
      category: "Real Estate",
      readTime: "4 min read",
      featured: false,
      image: "🏠"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights & Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay informed with our latest legal articles and updates
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="card p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl">{post.image}</span>
                    <div>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{post.date} • {post.readTime}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy-800 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                  <button className="btn-primary">Read Full Article</button>
                </div>
                <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                  <div className="text-6xl mb-4">{post.image}</div>
                  <div className="text-xl font-semibold">Featured Article</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights on legal matters that affect you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="card p-6 group hover:shadow-strong transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{post.image}</span>
                  <div>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{post.date} • {post.readTime}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest legal insights, firm updates, and important legal news.
            </p>
            
            <div className="card p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="form-input flex-1"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Legal Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helpful resources to guide you through legal processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Legal Checklists</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step checklists for common legal processes and procedures.
              </p>
              <button 
                className="btn-outline"
                onClick={() => onPageChange('legal-checklists')}
              >
                View Checklists
              </button>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">❓</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">FAQ Section</h3>
              <p className="text-gray-600 mb-4">
                Answers to frequently asked questions about legal matters and our services.
              </p>
              <button 
                className="btn-outline"
                onClick={() => onPageChange('faq')}
              >
                View FAQs
              </button>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Legal Glossary</h3>
              <p className="text-gray-600 mb-4">
                Understand legal terminology with our comprehensive glossary of legal terms.
              </p>
              <button 
                className="btn-outline"
                onClick={() => onPageChange('legal-glossary')}
              >
                View Glossary
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
