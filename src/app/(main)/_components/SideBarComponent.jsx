"use client";
import Logo from "@/components/logo";
import { LogOutIcon, PlusSquareIcon, StarIcon } from "lucide-react";
import React from "react";
import WorkspaceTitleLinkComponent from "./WorkspaceTitleLinkComponent";
import PopupFormProviderComponent from "./PopupFormComponent";
import { addNewWorkspaceAction } from "@/action/workspaceAction";
import { signOut } from "next-auth/react";

const SideBarComponent = ({ workspaces = [] }) => {
  const favoriteWorkspaces = workspaces.filter((w) => w.isFavorite);

  const onNewWorkspaceSubmit = async ({ workspaceName }) => {
    const resInfo = await addNewWorkspaceAction(workspaceName);
    return resInfo;
  };

  const handleOnClickLogout = () => {
    signOut();
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 via-blue-50 to-white h-dvh w-[20rem] flex flex-col items-center overflow-y-scroll border-r-2 border-gray-200 rounded-lg shadow-lg">
      <div className="py-14">
        <Logo />
      </div>

      {/* Workspace Header */}
      <div className="flex justify-between w-full px-8 pt-4 pb-2 items-center">
        <p className="font-bold text-lg text-gray-700 font-sf-pro-display">Workspace</p>
        <PopupFormProviderComponent
          formTitle="Create New Workspace"
          submitBtnLabel="Create"
          inputs={{
            workspaceName: { label: "Workspace Name", type: "text" },
          }}
          handleOnSubmit={onNewWorkspaceSubmit}
        >
          <PlusSquareIcon size={25} className="text-gray-500 hover:text-pink-500 transition duration-200 cursor-pointer" />
        </PopupFormProviderComponent>
      </div>

      {/* Workspaces List */}
      {workspaces.map((workspace) => (
        <WorkspaceTitleLinkComponent
          key={workspace.workspaceId}
          workspace={workspace}
        />
      ))}

      {/* Favorite Section */}
      <div className="flex justify-between w-full px-8 pt-4 pb-2 items-center mt-8">
        <p className="font-bold text-lg text-gray-700 font-sf-pro-display">Favorite</p>
        <StarIcon size={25} className="text-yellow-400 hover:text-yellow-500 transition duration-200 cursor-pointer" />
      </div>

      {favoriteWorkspaces.map((workspace) => (
        <WorkspaceTitleLinkComponent
          key={workspace.workspaceId}
          workspace={workspace}
        />
      ))}

      {/* Logout Button */}
      <button
        onClick={handleOnClickLogout}
        className="text-gray-600 flex gap-x-1 font-bold text-xl mt-auto px-8 pb-8 justify-start w-full hover:text-red-600 transition duration-200 rounded-lg shadow-md bg-gradient-to-r from-red-100 to-pink-200 hover:from-red-200 hover:to-pink-300"
      >
        <LogOutIcon size={25} className="text-gray-600 hover:text-red-500" />
        Logout
      </button>
    </div>
  );
};

export default SideBarComponent;
