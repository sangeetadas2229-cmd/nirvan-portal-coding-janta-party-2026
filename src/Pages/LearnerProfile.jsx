import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function LearnerProfile({ setCurrentPage }) {
  const profileData = {
    fullName: "Rohan Sharma",
    dob: "15-08-1998",
    email: "rohan.sharma@gov-learner.in",
    phone: "+91 98765 43210",
    district: "North East Delhi",
    state: "Delhi",
    verificationStatus: "Verified via National Gateway"
  };

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Learner Profile" />

      {/* 2. Main Page Content */}
      <main className="max-w-5xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              Verified Candidate Dossier
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">Official Learner Profile</h1>
            <p className="text-xs text-slate-500">Government credential repository and personal details.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#1E293B] text-white flex items-center justify-center font-bold text-xl shadow-md">
                RS
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1E293B]">{profileData.fullName}</h3>
                <p className="text-xs text-emerald-700 font-medium">✓ {profileData.verificationStatus}</p>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('LearnerDashboard')}
              className="px-4 py-2 bg-[#1E293B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer self-start sm:self-auto"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">Full Name</span>
              <p className="font-bold text-[#1E293B]">{profileData.fullName}</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">Date of Birth</span>
              <p className="font-bold text-[#1E293B]">{profileData.dob}</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">Email Address</span>
              <p className="font-bold text-[#1E293B]">{profileData.email}</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">Contact Number</span>
              <p className="font-bold text-[#1E293B]">{profileData.phone}</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">District</span>
              <p className="font-bold text-[#1E293B]">{profileData.district}</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium">State / UT</span>
              <p className="font-bold text-[#1E293B]">{profileData.state}</p>
            </div>
          </div>
        </div>

      </main>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}