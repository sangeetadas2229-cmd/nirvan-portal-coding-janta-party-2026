import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function LearnerDashboard({ setCurrentPage }) {
  const enrolledCourses = [
    { title: 'AI & Machine Learning Foundations', progress: '75%', status: 'In Progress', code: 'SKL-AI-2026' },
    { title: 'Digital Financial Literacy', progress: '100%', status: 'Completed', code: 'SKL-FIN-102' },
    { title: 'Cybersecurity Best Practices for Governance', progress: '40%', status: 'In Progress', code: 'SKL-CYB-301' },
  ];

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Learner Portal" />

      {/* 2. Main Page Content */}
      <main className="max-w-7xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Learner Welcome Banner */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              Active Candidate Workspace
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">Welcome, Learner</h1>
            <p className="text-xs text-slate-500">Track your upskilling journey, course progress, and official credentials.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Quick Navigation / Action Bar */}
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setCurrentPage('LearnerProfile')}
            className="px-4 py-2 bg-white border border-slate-200 text-[#1E293B] rounded-xl text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
          >
            👤 View Profile
          </button>
          <button 
            onClick={() => setCurrentPage('LearnerProgress')}
            className="px-4 py-2 bg-white border border-slate-200 text-[#1E293B] rounded-xl text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
          >
            📊 Detailed Progress
          </button>
          <button 
            onClick={() => setCurrentPage('KnowledgeAssessment')}
            className="px-4 py-2 bg-[#1E293B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer shadow-sm"
          >
            📝 Start New Assessment
          </button>
        </div>

        {/* Enrolled Courses Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <h3 className="font-bold text-sm text-[#1E293B]">My Active Courses</h3>
          
          <div className="space-y-3">
            {enrolledCourses.map((course, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{course.code}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                      course.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1E293B]">{course.title}</h4>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="w-full md:w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-[#1E293B] h-2 rounded-full transition-all duration-300" 
                      style={{ width: course.progress }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 min-w-[35px]">{course.progress}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}