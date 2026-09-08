import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function Dashboard({ setCurrentPage }) {
  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="National Dashboard" />

      {/* 2. Main Page Content */}
      <main className="max-w-7xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Emblem Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              Verified Portal Overview
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">National Skill Analytics Dashboard</h1>
            <p className="text-xs text-slate-500">Real-time statistics on vocational training, enrollments, and certifications.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Active Schemes</p>
            <h3 className="text-2xl font-bold text-[#1E293B] mt-1">14</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-emerald-600 shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Enrolled Learners</p>
            <h3 className="text-2xl font-bold text-[#1E293B] mt-1">1,24,500+</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Skill Assessments</p>
            <h3 className="text-2xl font-bold text-[#1E293B] mt-1">88%</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-purple-600 shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Certificates Issued</p>
            <h3 className="text-2xl font-bold text-[#1E293B] mt-1">98,200</h3>
          </div>
        </div>

        {/* Recent Initiatives Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold text-sm text-[#1E293B] mb-4">Key Government Directives</h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#1E293B]">PMKVY 4.0 Special Drive</p>
                <p className="text-[11px] text-slate-500">Upskilling modules deployed for AI & Green Skills.</p>
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">Active</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#1E293B]">National Credit Framework Integration</p>
                <p className="text-[11px] text-slate-500">Seamless credit transfers for vocational learners.</p>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Updated</span>
            </div>
          </div>
        </div>

      </main>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}