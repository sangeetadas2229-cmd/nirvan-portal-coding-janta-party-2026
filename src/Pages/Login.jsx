import React from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function Login({ setCurrentPage }) {
  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Government Header Component */}
      <GovHeader title="Gateway Login" />

      {/* 2. Main Center Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 max-w-md w-full text-center">
          <span className="text-xs uppercase tracking-widest bg-[#C1CDC4]/30 text-[#1E293B] px-3 py-1 rounded-full font-semibold">
            NIRVAN Auth
          </span>
          <h2 className="text-2xl font-bold text-[#1E293B] mt-4">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-1">Select your verification gateway</p>

          <div className="mt-6 space-y-3">
            <button
              onClick={() => setCurrentPage('AadhaarLogin')}
              className="w-full py-3 bg-[#1E293B] text-white font-medium rounded-xl hover:bg-slate-800 transition cursor-pointer shadow-md"
            >
              Learner / Citizen Login
            </button>
            <button
              onClick={() => setCurrentPage('AdminLogin')}
              className="w-full py-3 bg-slate-100 text-[#1E293B] font-medium rounded-xl hover:bg-slate-200 transition cursor-pointer"
            >
              Administrator Portal
            </button>
          </div>
        </div>
      </div>

      {/* 3. Government Footer Component */}
      <GovFooter />

    </div>
  );
}