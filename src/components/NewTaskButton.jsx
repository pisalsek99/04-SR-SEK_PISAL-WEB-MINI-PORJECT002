"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const NewTaskButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
      onClick={onClick}
    >
      <Plus className="w-5 h-5" />
      <span className="font-medium">New Task</span>
    </button>
  );
};

const TaskForm = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [tag, setTag] = useState('DESIGN');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { taskTitle, taskDetails, tag, endDate };
    if (onSubmit) onSubmit(task);

    // Reset form fields without closing the modal
    setTaskTitle('');
    setTaskDetails('');
    setTag('DESIGN');
    setEndDate('');
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
          required
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

const TaskManager = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleNewTaskClick = () => {
    setShowTaskForm(true);
  };

  const handleTaskFormSubmit = (task) => {
    console.log('Task Created:', task);

  };

  const closeModal = () => {
    setShowTaskForm(false);
  };

  return (
    <div className="space-y-6 relative">
      <NewTaskButton onClick={handleNewTaskClick} />
      
      {/* Modal Popup */}
      {showTaskForm && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-3xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              <span className="text-xl">&times;</span>
            </button>
            <TaskForm onSubmit={handleTaskFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
