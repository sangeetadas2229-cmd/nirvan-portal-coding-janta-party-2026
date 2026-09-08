import React, { useState } from 'react';

// Import all 11 page components
import AadhaarLogin from './Pages/AadhaarLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminUserManagement from './Pages/AdminUserManagement';
import Dashboard from './Pages/Dashboard';
import DivisionalOverview from './Pages/DivisionalOverview';
import KnowledgeAssessment from './Pages/KnowledgeAssessment';
import LearnerDashboard from './Pages/LearnerDashboard';
import LearnerProfile from './Pages/LearnerProfile';
import LearnerProgress from './Pages/LearnerProgress';
import Login from './Pages/Login';
import ProgressReports from './Pages/ProgressReports';

// Import AI Assistant Component
import AIAssistant from './Pages/AIAssistant';

export default function App() {
  const [currentPage, setCurrentPage] = useState('AadhaarLogin');

  const renderPage = () => {
    switch (currentPage) {
      case 'AadhaarLogin': return <AadhaarLogin setCurrentPage={setCurrentPage} />;
      case 'AdminLogin': return <AdminLogin setCurrentPage={setCurrentPage} />;
      case 'AdminUserManagement': return <AdminUserManagement setCurrentPage={setCurrentPage} />;
      case 'Dashboard': return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'DivisionalOverview': return <DivisionalOverview setCurrentPage={setCurrentPage} />;
      case 'KnowledgeAssessment': return <KnowledgeAssessment setCurrentPage={setCurrentPage} />;
      case 'LearnerDashboard': return <LearnerDashboard setCurrentPage={setCurrentPage} />;
      case 'LearnerProfile': return <LearnerProfile setCurrentPage={setCurrentPage} />;
      case 'LearnerProgress': return <LearnerProgress setCurrentPage={setCurrentPage} />;
      case 'ProgressReports': return <ProgressReports setCurrentPage={setCurrentPage} />;
      case 'Login':
      default: return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] relative gov-watermark-bg">
      {/* Top Government Navigation Bar */}
      <nav className="relative z-10 bg-[#1E293B] text-white px-6 py-3 flex items-center justify-between text-xs overflow-x-auto gap-2 border-b border-slate-700/50 shadow-md">
        
        {/* Government Symbol & Branding */}
        <div className="flex items-center gap-2.5 shrink-0">
          <svg className="w-6 h-6 text-[#C1CDC4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            <circle cx="12" cy="12" r="1.5"/>
          </svg>
          <span className="font-bold text-[#C1CDC4] uppercase tracking-widest text-sm drop-shadow-sm">
            NIRVAN PORTAL
          </span>
        </div>

        {/* Page Switcher Navigation */}
        <div className="flex gap-1.5 overflow-x-auto py-1">
          {[
            'Login', 'AadhaarLogin', 'AdminLogin', 'Dashboard', 
            'LearnerDashboard', 'LearnerProfile', 'LearnerProgress', 
            'KnowledgeAssessment', 'ProgressReports', 'DivisionalOverview', 'AdminUserManagement'
          ].map((pageName) => (
            <button
              key={pageName}
              onClick={() => setCurrentPage(pageName)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                currentPage === pageName 
                  ? 'bg-[#C1CDC4] text-[#1E293B] font-bold shadow-sm' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {pageName}
            </button>
          ))}
        </div>
      </nav>

      {/* Page Content Rendering */}
      <main className="w-full relative z-10">{renderPage()}</main>

      {/* Floating AI Assistant Widget */}
      <AIAssistant />
    </div>
  );
}