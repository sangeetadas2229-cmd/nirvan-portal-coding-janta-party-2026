import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const [selectedCourse, setSelectedCourse] = useState('Digital Governance & e-Office');
  const [knowledgeLevel, setKnowledgeLevel] = useState('Beginner');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    // Provide the path or route to the next page here
    navigate('/dashboard'); // Or your next page route
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Window Top Bar */}
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-slate-500">GovConnect</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Choose Your Assessment</h2>
          <p className="text-sm text-slate-500 mb-8">Select a course or competency area to get started.</p>

          <form onSubmit={handleContinue}>
            {/* Assessment / Course Dropdown */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                Assessment / Course
              </label>
              <select 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700 bg-white text-sm"
              >
                <option value="Digital Governance & e-Office">Digital Governance & e-Office</option>
                <option value="Public Policy & Administration">Public Policy & Administration</option>
                <option value="Cyber Security & Data Privacy">Cyber Security & Data Privacy</option>
              </select>
            </div>

            {/* Knowledge Level Selection */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">
                Knowledge Level
              </label>
              
              <div className="space-y-3">
                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level) => (
                  <label 
                    key={level}
                    className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                      knowledgeLevel === level 
                        ? 'border-emerald-500 bg-emerald-50/50 text-slate-900 font-medium' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="knowledgeLevel" 
                      value={level}
                      checked={knowledgeLevel === level}
                      onChange={() => setKnowledgeLevel(level)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-3 text-sm">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <button 
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-xl shadow-md transition-colors text-center"
            >
              Continue
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}