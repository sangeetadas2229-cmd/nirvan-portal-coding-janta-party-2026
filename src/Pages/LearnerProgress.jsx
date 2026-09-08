import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function LearnerProgress({ setCurrentPage }) {
  const milestones = [
    { title: 'Core Skills Orientation', date: '10 Jan 2026', status: 'Completed', score: '92%' },
    { title: 'Practical Assessment Phase 1', date: '28 Feb 2026', status: 'Completed', score: '88%' },
    { title: 'Advanced Technical Upskilling', date: 'In Progress', status: 'Active', score: '65%' },
    { title: 'National Certification Evaluation', date: 'Upcoming', status: 'Pending', score: 'N/A' },
  ];

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Learner Progress Analytics" />

      {/* 2. Main Page Content */}
      <main className="max-w-5xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
              National Skill Credit Framework
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">Detailed Progress Tracker</h1>
            <p className="text-xs text-slate-500">Milestone achievements, skill credits, and performance records.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Milestones List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="font-bold text-sm text-[#1E293B]">Course Milestones & Credit Earned</h3>
            <button 
              onClick={() => setCurrentPage('LearnerDashboard')}
              className="text-xs text-[#1E293B] font-bold hover:underline cursor-pointer"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="space-y-3">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{m.date}</span>
                  <h4 className="font-bold text-[#1E293B]">{m.title}</h4>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-slate-700">Score: {m.score}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    m.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                    m.status === 'Active' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {m.status}
                  </span>
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