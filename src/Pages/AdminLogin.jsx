import React, { useState } from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function AdminLogin({ setCurrentPage }) {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('AdminUserManagement');
  };

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Administrator Gateway" />

      {/* 2. Main Login Card Container */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-md w-full relative overflow-hidden">
          
          {/* Subtle Emblem Background Watermark */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-10 -bottom-10 h-44 w-auto opacity-5 pointer-events-none" 
          />

          <div className="text-center mb-6 z-10 relative">
            <span className="text-[11px] uppercase tracking-widest bg-slate-100 text-[#1E293B] px-3 py-1 rounded-full font-bold border border-slate-200">
              Authorized Personnel Only
            </span>
            <h2 className="text-2xl font-bold text-[#1E293B] mt-4">Admin Portal Access</h2>
            <p className="text-xs text-slate-500 mt-1">
              Ministry of Skill Development System Administration
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs z-10 relative">
            <div>
              <label className="block font-semibold text-[#1E293B] mb-1 uppercase tracking-wider">
                Government Officer Credentials / ID
              </label>
              <input
                type="text"
                required
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="Enter Official Admin ID"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1E293B] mb-1 uppercase tracking-wider">
                Secure Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] bg-slate-50/50"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#1E293B] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold transition cursor-pointer shadow-lg shadow-slate-900/10 text-xs"
            >
              Authenticate & Proceed
            </button>
          </form>

          <div className="mt-6 text-center border-t border-slate-100 pt-4 z-10 relative">
            <button 
              onClick={() => setCurrentPage('Login')}
              className="text-[11px] text-slate-500 hover:text-[#1E293B] font-medium transition cursor-pointer"
            >
              ← Back to Main Verification Gateway
            </button>
          </div>

        </div>
      </div>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}