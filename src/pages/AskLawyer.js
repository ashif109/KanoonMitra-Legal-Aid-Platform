import React, { useState } from 'react';

const AskLawyer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: '',
    urgency: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        subject: '',
        description: '',
        urgency: 'medium'
      });
    }, 3000);
  };

  const categories = [
    'Family Law',
    'Criminal Law',
    'Property Law',
    'Corporate Law',
    'Labor Law',
    'Tax Law',
    'Cyber Law',
    'Consumer Law',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', color: 'text-green-600' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
    { value: 'high', label: 'High', color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indian-blue to-saffron-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ask a Lawyer
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get expert legal advice from verified lawyers. Submit your question and receive a detailed response within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Question Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Submit Your Legal Question
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-800 font-medium">
                    Your question has been submitted successfully! We'll get back to you within 24 hours.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Legal Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="Brief subject of your legal question"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="input-field"
                  placeholder="Please provide detailed information about your legal issue..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <div className="flex space-x-4">
                  {urgencyLevels.map((level) => (
                    <label key={level.value} className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className={`font-medium ${level.color}`}>
                        {level.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Submit Question'
                )}
              </button>
            </form>
          </div>

          {/* Live Chat Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Live Chat Support
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indian-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KM</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Kanoon Mitra Assistant</h3>
                  <p className="text-sm text-gray-600">Online now</p>
                </div>
              </div>
              
              <div className="space-y-4 max-h-64 overflow-y-auto">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-indian-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">KM</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                    <p className="text-sm text-gray-800">
                      Hello! I'm here to help you with legal questions. What can I assist you with today?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-indian-blue text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      I need help with property dispute
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-indian-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">KM</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                    <p className="text-sm text-gray-800">
                      I can help you with property disputes. Would you like to:
                      <br />• Get general guidance
                      <br />• Connect with a property lawyer
                      <br />• Download relevant documents
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent"
                />
                <button className="bg-indian-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <button className="text-indian-blue hover:text-blue-700 font-medium">
                  Start a new conversation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indian-blue to-saffron-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Question</h3>
              <p className="text-gray-600">
                Fill out the form with your legal question and relevant details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indian-blue to-saffron-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Review</h3>
              <p className="text-gray-600">
                Our team of verified lawyers will review and analyze your case.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indian-blue to-saffron-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Response</h3>
              <p className="text-gray-600">
                Receive a detailed legal response within 24 hours via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskLawyer; 