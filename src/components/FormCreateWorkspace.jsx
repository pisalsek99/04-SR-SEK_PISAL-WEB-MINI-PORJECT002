"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';

const FormCreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [isOpen, setIsOpen] = useState(true); // State to control form visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Workspace Name:', workspaceName);
  };

  if (!isOpen) return null;

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-200">
  
  <div 
  className="fixed inset-0 bg-opacity-40 backdrop-blur-md z-0"
  onClick={() => setIsOpen(false)} 
></div>

     
      <div className="relative z-10 space-y-6 w-full max-w-md mx-auto bg-white p-12 rounded-3xl shadow-lg">
      
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        <h1 className="font-bold text-3xl text-center">Create Workspace</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Workspace Name</label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
          >
            Create
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">&copy; Copyright | 2025 Monster</p>
      </div>
    </main>
  );
};

export default FormCreateWorkspace;
