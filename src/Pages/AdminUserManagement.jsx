import React, { useState } from 'react';

import GovHeader from './GovHeader';
import GovFooter from './GovFooter';
export default function AdminUserManagement({ setCurrentPage }) {
  const [users, setUsers] = useState([
    { id: 1, name: 'Rajesh Kumar', role: 'Learner', status: 'Active', dept: 'Skill Development' },
    { id: 2, name: 'Priya Sharma', role: 'Instructor', status: 'Active', dept: 'Vocational Training' },
    { id: 3, name: 'Amitav Das', role: 'Admin', status: 'Pending', dept: 'System Oversight' },
  ]);

  return (
    <div className="min-h-[calc(100vh-53px)] bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* 1. Official Government Header */}
      <GovHeader title="Admin - User Management" />

      {/* 2. Main Page Content */}
      <main className="max-w-7xl mx-auto p-6 w-full flex-1 space-y-6">
        
        {/* Banner with Emblem Watermark */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex justify-between items-center relative overflow-hidden">
          <div className="z-10 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
              System Control Panel
            </span>
            <h1 className="text-2xl font-bold text-[#1E293B] mt-1">User & Access Management</h1>
            <p className="text-xs text-slate-500">Manage registered learners, instructors, and portal administrators.</p>
          </div>

          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem Watermark" 
            className="absolute -right-6 -bottom-6 h-36 w-auto opacity-5 pointer-events-none" 
          />
        </div>

        {/* User Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-sm text-[#1E293B]">Registered Personnel Directory</h3>
            <button className="px-4 py-2 bg-[#1E293B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer">
              + Add New User
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-100 text-[#1E293B] uppercase font-bold text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">User Name</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-semibold text-[#1E293B]">{u.name}</td>
                    <td className="p-4">{u.role}</td>
                    <td className="p-4">{u.dept}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        u.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button className="text-blue-600 hover:underline font-semibold cursor-pointer">Edit</button>
                      <button className="text-red-500 hover:underline font-semibold cursor-pointer">Revoke</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* 3. Official Government Footer */}
      <GovFooter />

    </div>
  );
}