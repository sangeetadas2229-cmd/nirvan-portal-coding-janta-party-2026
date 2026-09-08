import React, { useState } from 'react';

export default function AadhaarLogin({ setCurrentPage }) {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('LearnerDashboard');
  };

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 relative">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        
        {/* Left Side: Indian Government Architecture Image Sidebar */}
        <div 
          className="md:col-span-5 relative p-8 flex flex-col justify-between text-white bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.80), rgba(30, 41, 59, 0.92)), url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop')`
          }}
        >
          {/* Top Logo & Emblem */}
          <div className="flex items-center gap-2.5 z-10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Emblem of India" 
              className="h-9 w-auto filter brightness-0 invert" 
            />
            <div className="h-6 w-[1px] bg-slate-400/50"></div>
            <span className="text-xl font-extrabold tracking-wider text-white">NIRVAN</span>
          </div>

          {/* Overlay Text */}
          <div className="space-y-3 z-10 my-auto md:my-0">
            <h3 className="text-xl font-bold text-[#C1CDC4] leading-snug">
              Empowering Government Employees
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Through Continuous Learning, Modern Upskilling & AI-Powered Governance.
            </p>
          </div>

          {/* Bottom Branding */}
          <div className="text-[10px] text-slate-400 z-10 uppercase tracking-widest font-semibold">
            Government of India Initiative
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E293B]">Welcome to NIRVAN</h2>
            <p className="text-xs text-slate-500 mt-1">Learn • Assess • Grow</p>
          </div>

          {/* User Type Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-6 text-xs font-semibold">
            <button 
              onClick={() => setCurrentPage('Login')} 
              className="py-2.5 rounded-lg bg-[#1E293B] text-white shadow-sm transition cursor-pointer"
            >
              Learner
            </button>
            <button 
              onClick={() => setCurrentPage('AdminLogin')} 
              className="py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#1E293B] mb-1 uppercase tracking-wider">
                Aadhaar Number (12 Digits)
              </label>
              <input
                type="text"
                required
                maxLength="12"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                placeholder="Enter 12-digit Aadhaar number"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1E293B] mb-1 uppercase tracking-wider">
                OTP / Security PIN
              </label>
              <input
                type="password"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] bg-slate-50/50"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-[#1E293B] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold transition cursor-pointer shadow-lg shadow-slate-900/10 text-xs"
            >
              Login
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-400 mt-6">
            Don't have an account? <span className="text-[#1E293B] font-bold cursor-pointer underline">Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
}