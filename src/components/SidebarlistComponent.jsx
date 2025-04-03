"use client"
import React, { useState } from 'react';
import { Plus, Star, MoreHorizontal, LogOut } from 'lucide-react';
import FormCreateWorkspace from './FormCreateWorkspace'; // Make sure the path is correct

const SidebarlistComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const workspaces = [
    { name: 'HRD Design', color: 'bg-red-500' },
  ];

  const favorites = [
    { name: 'HRD Design', color: 'bg-red-500' },
  ];

  const handlePlusClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="w-64 p-4 border-r border-gray-200 flex flex-col justify-between h-full bg-white shadow-md"> 
      <div className="flex-grow space-y-6"> 
        {/* Workspace Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-700 font-bold text-lg">Workspace</h2>
            <Plus className="w-5 h-5 text-gray-700 cursor-pointer hover:text-teal-500 transition" onClick={handlePlusClick} />
          </div>
          {workspaces.map((workspace, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${workspace.color}`}></div>
                <span className="font-medium text-sm text-gray-800">{workspace.name}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>

        {/* Favorite Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-700 font-bold text-lg">Favorite</h2>
            <Star className="w-5 h-5 text-yellow-500 cursor-pointer hover:text-yellow-600 transition" />
          </div>
          {favorites.map((favorite, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${favorite.color}`}></div>
                <span className="font-medium text-sm text-gray-800">{favorite.name}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-teal-500 transition mt-6"> 
        <LogOut className="w-5 h-5 text-teal-500" />
        <span className="font-medium text-sm text-teal-500">Logout</span>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
            <FormCreateWorkspace />
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl hover:text-red-500 transition"
              onClick={handleCloseForm}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarlistComponent;
