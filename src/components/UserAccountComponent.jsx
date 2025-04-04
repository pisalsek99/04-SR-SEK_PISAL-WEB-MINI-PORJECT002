"use client"
import React from 'react';
import { Bell } from 'lucide-react';

const UserAccountComponent = () => {
  return (
    <div className="flex items-center space-x-4">
      <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
      <div className="flex items-center space-x-2">
        <img
          src="https://i.pinimg.com/474x/4c/2c/84/4c2c845c6f05967ecbf687dd2a1ee01d.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-black">Monster</span>
          <span className="text-sm text-blue-500">blackmonster@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default UserAccountComponent;