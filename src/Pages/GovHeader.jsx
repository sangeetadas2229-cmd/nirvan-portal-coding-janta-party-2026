import React from 'react';

export default function GovHeader({ title }) {
  return (
    <div className="w-full bg-[#1E293B] text-slate-200 shadow-md">
      {/* Official Government Strip */}
      <div className="px-6 py-2 flex justify-between items-center text-xs border-b border-slate-700/60">
        <div className="flex items-center gap-3">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem of India" 
            className="h-6 w-auto filter brightness-0 invert opacity-90" 
          />
          <div className="h-4 w-[1px] bg-slate-600"></div>
          <span className="font-semibold text-[#C1CDC4] tracking-wide">
            Ministry of Skill Development & Entrepreneurship | Govt. of India
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
          <span>Toll Free: 1800-111-255</span>
          <span>|</span>
          <span className="font-bold text-slate-300">{title}</span>
        </div>
      </div>

      {/* Tricolor Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-emerald-600"></div>
    </div>
  );
}