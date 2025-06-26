import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SubjectModule from './pages/SubjectModule';
import Tools from './pages/Tools';
import PeerHub from './pages/PeerHub';
import EduCast from './pages/EduCast';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" dir="rtl">
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/subject/:subjectId" element={<SubjectModule />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/peer-hub" element={<PeerHub />} />
                <Route path="/educast" element={<EduCast />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;