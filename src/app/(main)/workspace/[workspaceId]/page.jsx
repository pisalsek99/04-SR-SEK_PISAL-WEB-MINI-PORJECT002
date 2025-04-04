import { patchWorkspaceFavoriteAction } from "@/action/workspaceAction";
import CardComponent from "@/components/card";
import { getAllTasksByWorkspaceId } from "@/service/task.service";
import { getWorkspaceByIdService } from "@/service/workspace.service";
import React from "react";
import ToggleFavoriteStarComponent from "../_components/ToggleFavoriteStarComponent";

const WorkspaceDetailPage = async ({ params }) => {
  const { workspaceId } = await params;
  const {
    success,
    data: workspaceData,
    error,
  } = await getWorkspaceByIdService(workspaceId);

  const tasks = await getAllTasksByWorkspaceId(workspaceId);
  const notStartedTasks = tasks.filter((task) => task.status === "NOT_STARTED");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const finishedTasks = tasks.filter((task) => task.status === "FINISHED");

  return (
    <div className="px-16 pt-4 w-full flex flex-col h-dvh">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold capitalize">
          {workspaceData.workspaceName}
        </h2>
        <ToggleFavoriteStarComponent
          workspaceId={workspaceData.workspaceId}
          isFavorite={workspaceData.isFavorite}
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-x-16 mt-8 grow overflow-y-scroll">
        <div className="w-full flex flex-col h-full">
          <p className="text-xl w-full border-b-2 text-not-started border-not-started font-bold">
            Not Started
          </p>
          {notStartedTasks.map((t) => (
            <CardComponent key={t.taskId} task={t} />
          ))}
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl w-full border-b-2 text-in-progress border-in-progress font-bold">
            In Progress
          </p>
          {inProgressTasks.map((t) => (
            <CardComponent key={t.taskId} task={t} />
          ))}
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl w-full border-b-2 text-finished border-finished font-bold">
            Finished
          </p>
          {finishedTasks.map((t) => (
            <CardComponent key={t.taskId} task={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetailPage;
