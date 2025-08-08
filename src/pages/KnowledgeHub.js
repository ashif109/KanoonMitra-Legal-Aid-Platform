import React, { useState } from 'react';

const KnowledgeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'family-law', name: 'Family Law' },
    { id: 'criminal-law', name: 'Criminal Law' },
    { id: 'property-law', name: 'Property Law' },
    { id: 'consumer-rights', name: 'Consumer Rights' },
    { id: 'cyber-law', name: 'Cyber Law' },
    { id: 'labor-law', name: 'Labor Law' }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to File an FIR: Complete Step-by-Step Guide',
      excerpt: 'Learn the complete process of filing a First Information Report (FIR) in India, including online and offline methods.',
      category: 'criminal-law',
      author: 'Adv. Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Women Rights in India: A Comprehensive Guide',
      excerpt: 'Understanding the fundamental rights and legal protections available to women in India under various laws.',
      category: 'family-law',
      author: 'Adv. Meera Patel',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Property Dispute Resolution: Legal Options Available',
      excerpt: 'Explore the various legal remedies and procedures available for resolving property disputes in India.',
      category: 'property-law',
      author: 'Adv. Rajesh Kumar',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
    },
    {
      id: 4,
      title: 'Consumer Rights: How to File Complaints Effectively',
      excerpt: 'A detailed guide on consumer rights in India and how to file complaints with consumer forums.',
      category: 'consumer-rights',
      author: 'Adv. Anjali Singh',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      title: 'Cyber Crime Prevention: Protecting Yourself Online',
      excerpt: 'Essential tips and legal measures to protect yourself from cyber crimes and online fraud.',
      category: 'cyber-law',
      author: 'Adv. Vikram Malhotra',
      date: '2024-01-05',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      title: 'Employee Rights: Understanding Labor Laws in India',
      excerpt: 'Comprehensive overview of employee rights and labor laws that every worker should know.',
      category: 'labor-law',
      author: 'Adv. Suresh Reddy',
      date: '2024-01-03',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      id: 7,
      title: 'Divorce Process in India: Legal Requirements and Procedures',
      excerpt: 'Complete guide to divorce procedures, legal requirements, and rights of both parties.',
      category: 'family-law',
      author: 'Adv. Priya Sharma',
      date: '2023-12-28',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 8,
      title: 'RTI Filing: Your Right to Information',
      excerpt: 'Step-by-step guide to filing RTI applications and accessing government information.',
      category: 'consumer-rights',
      author: 'Adv. Meera Patel',
      date: '2023-12-25',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indian-blue to-saffron-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Access comprehensive legal knowledge, guides, and resources to understand your rights and legal procedures.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent text-lg"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-indian-blue text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="card overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indian-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(article.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <button className="text-indian-blue hover:text-blue-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="card overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <button className="text-indian-blue hover:text-blue-700 font-semibold text-sm">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Legal Knowledge
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest legal articles, updates, and tips directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowledgeHub; 