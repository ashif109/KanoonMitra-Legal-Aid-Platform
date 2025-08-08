import React, { useState } from 'react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const userProfile = {
    name: 'Ashif Ansari',
    email: 'ashifansari04704@gmail.com',
    phone: '+91 11223 45678',
    joinDate: 'January 2024',
    totalQuestions: 5,
    savedArticles: 12,
    downloads: 8
  };

  const recentQuestions = [
    {
      id: 1,
      subject: 'Property Dispute with Neighbor',
      category: 'Property Law',
      status: 'Answered',
      date: '2024-01-15',
      lawyer: 'Adv. Priya Sharma',
      response: 'Based on your description, you have a strong case...'
    },
    {
      id: 2,
      subject: 'Consumer Rights - Online Purchase',
      category: 'Consumer Law',
      status: 'Pending',
      date: '2024-01-12',
      lawyer: null,
      response: null
    },
    {
      id: 3,
      subject: 'Employment Contract Review',
      category: 'Labor Law',
      status: 'Answered',
      date: '2024-01-10',
      lawyer: 'Adv. Rajesh Kumar',
      response: 'Your employment contract appears to be standard...'
    }
  ];

  const savedArticles = [
    {
      id: 1,
      title: 'How to File an FIR: Complete Step-by-Step Guide',
      author: 'Adv. Priya Sharma',
      date: '2024-01-15',
      category: 'Criminal Law',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Women Rights in India: A Comprehensive Guide',
      author: 'Adv. Meera Patel',
      date: '2024-01-12',
      category: 'Family Law',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Property Dispute Resolution: Legal Options Available',
      author: 'Adv. Rajesh Kumar',
      date: '2024-01-10',
      category: 'Property Law',
      readTime: '10 min read'
    }
  ];

  const downloads = [
    {
      id: 1,
      name: 'FIR Application Form',
      type: 'PDF',
      size: '245 KB',
      date: '2024-01-15',
      category: 'Forms'
    },
    {
      id: 2,
      name: 'Rental Agreement Template',
      type: 'DOCX',
      size: '1.2 MB',
      date: '2024-01-12',
      category: 'Templates'
    },
    {
      id: 3,
      name: 'Consumer Complaint Format',
      type: 'PDF',
      size: '180 KB',
      date: '2024-01-10',
      category: 'Forms'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'questions', name: 'My Questions', icon: '❓' },
    { id: 'articles', name: 'Saved Articles', icon: '📚' },
    { id: 'downloads', name: 'Downloads', icon: '📥' },
    { id: 'profile', name: 'Profile', icon: '👤' }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Answered':
        return 'text-green-600 bg-green-100';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'In Progress':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indian-blue to-saffron-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome back, {userProfile.name}!
              </h1>
              <p className="text-xl opacity-90">
                Manage your legal queries, saved content, and downloads
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Questions Asked</p>
                <p className="text-2xl font-bold text-gray-900">{userProfile.totalQuestions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Saved Articles</p>
                <p className="text-2xl font-bold text-gray-900">{userProfile.savedArticles}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{userProfile.downloads}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-indian-blue text-indian-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Questions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Questions</h3>
                    <div className="space-y-3">
                      {recentQuestions.slice(0, 3).map((question) => (
                        <div key={question.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{question.subject}</p>
                            <p className="text-sm text-gray-600">{formatDate(question.date)}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(question.status)}`}>
                            {question.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Downloads */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Downloads</h3>
                    <div className="space-y-3">
                      {downloads.slice(0, 3).map((download) => (
                        <div key={download.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{download.name}</p>
                            <p className="text-sm text-gray-600">{formatDate(download.date)}</p>
                          </div>
                          <span className="text-xs text-gray-500">{download.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Legal Questions</h2>
                <div className="space-y-4">
                  {recentQuestions.map((question) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{question.subject}</h3>
                          <p className="text-sm text-gray-600">{question.category} • {formatDate(question.date)}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(question.status)}`}>
                          {question.status}
                        </span>
                      </div>
                      
                      {question.lawyer && (
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium text-blue-900">Answered by {question.lawyer}</span>
                          </div>
                          <p className="text-blue-800">{question.response}</p>
                        </div>
                      )}
                      
                      <div className="flex space-x-3">
                        <button className="text-indian-blue hover:text-blue-700 font-medium text-sm">
                          View Details
                        </button>
                        {question.status === 'Pending' && (
                          <button className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                            Cancel Question
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Articles Tab */}
            {activeTab === 'articles' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedArticles.map((article) => (
                    <div key={article.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <button className="text-red-500 hover:text-red-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">By {article.author}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(article.date)}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <button className="w-full mt-4 text-indian-blue hover:text-blue-700 font-medium text-sm">
                        Read Article →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloaded Documents</h2>
                <div className="space-y-4">
                  {downloads.map((download) => (
                    <div key={download.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{download.name}</h3>
                          <p className="text-sm text-gray-600">{download.category} • {download.size} • {formatDate(download.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {download.type}
                        </span>
                        <button className="text-indian-blue hover:text-blue-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={userProfile.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={userProfile.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={userProfile.phone}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <input
                        type="text"
                        value={userProfile.joinDate}
                        disabled
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 