import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function ProgressReports({ setCurrentPage }) {
  const reports = [
    { id: 'REP-2026-01', title: 'National Vocational Outcome Report Q1', date: 'March 2026', type: 'PDF' },
    { id: 'REP-2026-02', title: 'State-wise Skill Training Performance', date: 'February 2026', type: 'XLS' },
    { id: 'REP-2026-03', title: 'Digital Upskilling Assessment Analytics', date: 'January 2026', type: 'PDF' },
  ];

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Reports & Institutional Analytics" />

      {/* 2. Main Page Content */}
      <main className="max-w-6xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
              Official Records & Audit Trails
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">Progress Reports & Publications</h1>
            <p className="text-xs text-slate-500">Download official evaluation audits and quarterly skill progression documents.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Reports Table / List Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-sm text-[#1E293B]">Available System Dossiers</h3>
            <span className="text-xs text-slate-500">Filter by Academic Year: 2026</span>
          </div>

          <div className="divide-y divide-slate-100">
            {reports.map((rep) => (
              <div key={rep.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400">{rep.id}</span>
                    <span className="text-[10px] bg-slate-100 text-[#1E293B] font-bold px-2 py-0.5 rounded border border-slate-200">
                      {rep.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1E293B]">{rep.title}</h4>
                  <p className="text-xs text-slate-400">Published: {rep.date}</p>
                </div>

                <button className="px-4 py-2 bg-[#1E293B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-2 self-start sm:self-auto shadow-sm">
                  <span>📥 Download Report</span>
                </button>
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