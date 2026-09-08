import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your pages or components (you can adjust file names according to your project)
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import LearnerDashboard from './Pages/LearnerDashboard';
import LearnerProfile from './Pages/LearnerProfile';
import LearnerProgress from './Pages/LearnerProgress';
import Assessment from './Pages/Assessment'; // New Assessment page
import ProgressReports from './Pages/ProgressReports';
import DivisionalOverview from './Pages/DivisionalOverview';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        
        {/* Top Navigation Bar */}
        <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2 font-bold text-lg">
            <span className="text-emerald-400">NIRVAN</span> <span>PORTAL</span>
          </div>
          <div className="flex space-x-4 text-sm font-medium overflow-x-auto">
            <Link to="/" className="hover:text-emerald-400 transition">Login</Link>
            <Link to="/dashboard" className="hover:text-emerald-400 transition">Dashboard</Link>
            <Link to="/learner-dashboard" className="hover:text-emerald-400 transition">LearnerDashboard</Link>
            <Link to="/learner-profile" className="hover:text-emerald-400 transition">LearnerProfile</Link>
            <Link to="/learner-progress" className="hover:text-emerald-400 transition">LearnerProgress</Link>
            <Link to="/assessment" className="text-emerald-400 font-semibold underline">Assessment</Link>
            <Link to="/progress-reports" className="hover:text-emerald-400 transition">ProgressReports</Link>
            <Link to="/divisional-overview" className="hover:text-emerald-400 transition">DivisionalOverview</Link>
          </div>
        </nav>

        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learner-dashboard" element={<LearnerDashboard />} />
          <Route path="/learner-profile" element={<LearnerProfile />} />
          <Route path="/learner-progress" element={<LearnerProgress />} />
          
          {/* The new Assessment page is set here, displaying Beginner/Intermediate options */}
          <Route path="/assessment" element={<Assessment />} />
          
          <Route path="/progress-reports" element={<ProgressReports />} />
          <Route path="/divisional-overview" element={<DivisionalOverview />} />
        </Routes>

      </div>
    </Router>
  );
}