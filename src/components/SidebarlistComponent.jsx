"use client"
import React from 'react';
import { Plus, Star, MoreHorizontal, LogOut } from 'lucide-react';

const SidebarlistComponent = () => {
  const workspaces = [
    { name: 'HRD Design', color: 'bg-red-500' },
  ];

  const favorites = [
    { name: 'HRD Design', color: 'bg-red-500' },
  ];

  return (
    <div className="w-65 p-4 border-r border-gray-200 flex flex-col justify-between "> 
      <div className="flex-grow"> 
        {/* Workspace Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 font-bold">Workspace</h2>
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          {workspaces.map((workspace, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${workspace.color}`}></div>
                <span className="font-medium text-sm">{workspace.name}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>

        {/* Favorite Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 font-bold">Favorite</h2>
            <Star className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          {favorites.map((favorite, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${favorite.color}`}></div>
                <span className="font-medium text-sm">{favorite.name}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex items-center space-x-2 text-gray-500 cursor-pointer mt-auto"> {/* Push logout button to the bottom */}
        <LogOut className="w-5 h-5 text-teal-500" />
        <span className="font-medium text-sm text-teal-500">Logout</span>
      </div>
    </div>
  );
};

export default SidebarlistComponent;