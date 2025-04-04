"use client"
import React from 'react';
import { Plus } from 'lucide-react';

const NewTaskButton = () => {
  return (
    <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">
      <Plus className="w-5 h-5" />
      <span className="font-medium">New Task</span>
    </button>
  );
};

export default NewTaskButton;