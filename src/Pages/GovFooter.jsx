import React from 'react';

export default function GovFooter() {
  return (
    <footer className="mt-auto bg-[#1E293B] text-slate-400 text-xs py-6 px-6 border-t border-slate-800 text-center space-y-2">
      <div className="flex justify-center items-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
          alt="Emblem" 
          className="h-5 w-auto filter brightness-0 invert opacity-60" 
        />
        <span className="font-semibold text-slate-300">NIRVAN National Portal</span>
      </div>
      <p>© 2026 NIRVAN Portal | Designed & Developed for Vocational Upskilling</p>
      <p className="text-[10px] text-slate-500">
        Content Owned, Maintained, and Updated by Ministry of Skill Development
      </p>
    </footer>
  );
}