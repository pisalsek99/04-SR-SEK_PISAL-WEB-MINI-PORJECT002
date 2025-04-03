"use client"
import React from 'react';

const FilterComponent = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-2">
      <div className="flex items-center space-x-2">
        <span className="text-[#1E293B] cursor-pointer">Workspace</span>
        <span className="text-[#1E293B]">{'>'}</span>
        <span className="text-[#1E293B] cursor-pointer">HRD Design</span>
      </div>
    </div>
  );
};

export default FilterComponent;
