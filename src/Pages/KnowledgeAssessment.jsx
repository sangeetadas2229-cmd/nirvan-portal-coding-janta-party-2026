import React, { useState } from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function KnowledgeAssessment({ setCurrentPage }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which government initiative focuses on national vocational training & skill standardisation?",
      options: ["PMKVY", "Digital India", "Make in India", "Swachh Bharat Mission"],
      correct: 0
    }
  ];

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Knowledge Assessment Portal" />

      {/* 2. Main Assessment Area */}
      <main className="max-w-4xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Emblem Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
              National Certification Exam
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">Skill Verification Assessment</h1>
            <p className="text-xs text-slate-500">Official evaluation module for Skill India certification.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Question 1 of 10</span>
            <span className="text-xs bg-amber-50 text-amber-700 font-bold px-3 py-1 rounded-full border border-amber-200">
              Time Remaining: 14:35
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#1E293B]">
              {questions[0].question}
            </h3>

            <div className="space-y-2 text-xs">
              {questions[0].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                    selectedOption === idx 
                      ? 'border-[#1E293B] bg-slate-50 font-semibold text-[#1E293B]' 
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span>{option}</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedOption === idx ? 'border-[#1E293B] bg-[#1E293B]' : 'border-slate-300'
                  }`}>
                    {selectedOption === idx && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <button className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-200 transition cursor-pointer">
              Previous
            </button>
            <button className="px-6 py-2.5 bg-[#1E293B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer shadow-md">
              Save & Next
            </button>
          </div>
        </div>

      </main>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}