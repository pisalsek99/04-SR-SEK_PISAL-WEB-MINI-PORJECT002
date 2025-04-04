"use client"
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [tag, setTag] = useState('DESIGN');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskTitle,
      taskDetails,
      tag,
      endDate,
    };
    if (onSubmit) onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-3xl shadow">
      <div>
        <label className="block font-medium mb-1">Task Title</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Task Details</label>
        <textarea
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        ></textarea>
      </div>

      <div>
        <label className="block font-medium mb-1">Tag</label>
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        >
          <option value="DESIGN">DESIGN</option>
          <option value="DEVELOPMENT">DEVELOPMENT</option>
          <option value="MARKETING">MARKETING</option>
          <option value="OTHER">OTHER</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">End Date</label>
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;