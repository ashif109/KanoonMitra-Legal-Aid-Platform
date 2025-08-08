import React, { useState } from 'react';

const FloatingHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Help Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-slide-up">
          <div className="bg-gradient-to-r from-indian-blue to-saffron-500 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Need Help?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm opacity-90">Chat with our legal assistant</p>
          </div>
          
          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-indian-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">KM</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Hello! I'm your legal assistant. How can I help you today?
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-indian-blue text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    I need help with filing an FIR
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-indian-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">KM</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    I can help you with that! You can visit our "Services" page and select "Online FIR Guidance" for step-by-step instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-blue focus:border-transparent text-sm"
              />
              <button className="bg-indian-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Help Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-indian-blue to-saffron-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingHelp; 