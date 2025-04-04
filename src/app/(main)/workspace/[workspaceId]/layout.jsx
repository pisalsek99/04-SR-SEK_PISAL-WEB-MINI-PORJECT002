"use client";
import React from "react";
import PopupFormProviderComponent from "../../_components/PopupFormComponent";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";  // Import a new icon
import { TASK_TAG } from "@/app/data/taskTags";
import { addNewTaskAction } from "@/action/taskAction";
import { useParams } from "next/navigation";

const WorkspaceDetailLayout = ({ children }) => {
  const { workspaceId } = useParams();
  const onSubmitNewTask = ({ taskTitle, taskDetails, tag, endDate }) => {
    const resInfo = addNewTaskAction(
      workspaceId,
      taskTitle,
      taskDetails,
      tag,
      endDate
    );
    return resInfo;
  };

  return (
    <div className="grow">
      {children}
      <div className="fixed bottom-0 right-0 pr-20 pb-8">
        <PopupFormProviderComponent
          handleOnSubmit={onSubmitNewTask}
          inputs={{
            taskTitle: { label: "Task Title" },
            taskDetails: { label: "Task Details" },
            tag: {
              label: "Tag",
              type: "select",
              options: Object.values(TASK_TAG),
            },
            endDate: { label: "End Date", type: "datetime-local" },
          }}
        >
          <Button className="rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg hover:from-blue-500 hover:to-blue-700 focus:outline-none transition-all duration-200 px-8 py-3 flex items-center gap-2">
            <CheckCircleIcon size={20} /> {/* New Icon */}
            <span className="text-sm">New Task</span>
          </Button>
        </PopupFormProviderComponent>
      </div>
    </div>
  );
};

export default WorkspaceDetailLayout;
