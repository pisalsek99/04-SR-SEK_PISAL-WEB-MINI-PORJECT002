import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const WorkspaceTitleLinkComponent = ({ workspace }) => {
  // Function to generate random color in hex format
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get random color for the workspace indicator only
  const workspaceIndicatorColor = getRandomColor();

  return (
    <Link
      href={`/workspace/${workspace.workspaceId}`}
      className="flex items-center justify-between w-full px-8 py-2 hover:bg-gray-100 transition duration-200 rounded-lg"
    >
      <div className="flex items-center gap-x-2">
        {/* Workspace indicator with random color */}
        <div
          className="w-2 aspect-square rounded-full mx-2"
          style={{ backgroundColor: workspaceIndicatorColor }}
        ></div>

        {/* Workspace name with static color */}
        <p className="text-xl font-medium font-sf-pro-display text-gray-800 hover:text-blue-500 transition duration-200">
          {workspace.workspaceName}
        </p>
      </div>

      {/* More icon color */}
      <MoreHorizontalIcon className="text-gray-500 hover:text-blue-500 transition duration-200" />
    </Link>
  );
};

export default WorkspaceTitleLinkComponent;
