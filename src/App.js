import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingHelp from './components/FloatingHelp';
import Home from './pages/Home';
import Services from './pages/Services';
import AskLawyer from './pages/AskLawyer';
import KnowledgeHub from './pages/KnowledgeHub';
import Contact from './pages/Contact';
import LawyerAuth from './pages/LawyerAuth';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ask-lawyer" element={<AskLawyer />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lawyer-auth" element={<LawyerAuth />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>
        <Footer />
        <FloatingHelp />
      </div>
    </Router>
  );
}

export default App; 