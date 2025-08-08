import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Legal Advice',
      description: 'Get expert legal consultation from verified lawyers across various practice areas.',
      features: ['Free initial consultation', 'Expert legal guidance', 'Multiple practice areas', 'Verified lawyers'],
      price: 'Starting from ₹500',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Online FIR Guidance',
      description: 'Step-by-step guidance to file FIR online with proper documentation support.',
      features: ['Step-by-step guidance', 'Document preparation', 'Online filing support', 'Status tracking'],
      price: 'Free',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Lawyer Connect',
      description: 'Connect directly with specialized lawyers for your specific legal needs.',
      features: ['Direct lawyer connection', 'Specialized expertise', 'Video consultation', 'Document review'],
      price: 'Starting from ₹1000',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'RTI Filing Help',
      description: 'Complete assistance for filing Right to Information requests with proper guidance.',
      features: ['RTI application drafting', 'Government department guidance', 'Follow-up support', 'Response tracking'],
      price: 'Starting from ₹200',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Cyber Complaint Assist',
      description: 'Help with filing cybercrime complaints and digital fraud reporting.',
      features: ['Cybercrime complaint filing', 'Digital fraud reporting', 'Evidence documentation', 'Police coordination'],
      price: 'Starting from ₹300',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Free Legal Docs',
      description: 'Download free legal documents and templates for common legal procedures.',
      features: ['Free document templates', 'Legal agreements', 'Application forms', 'Guidance notes'],
      price: 'Free',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indian-blue to-saffron-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Legal Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive legal services designed to make justice accessible to every Indian citizen. 
            From basic legal advice to complex case handling, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indian-blue">
                      {service.price}
                    </span>
                  </div>
                  
                  <Link
                    to="/ask-lawyer"
                    className="w-full bg-gradient-to-r from-indian-blue to-saffron-500 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-saffron-600 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Personalized Legal Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of expert lawyers is ready to assist you with your specific legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ask-lawyer"
              className="btn-primary text-lg px-8 py-4"
            >
              Ask a Lawyer Now
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 