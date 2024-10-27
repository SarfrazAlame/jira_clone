"use client";

import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorksapces } from "@/features/workspaces/api/use-get-workspaces";

export const WorkspaceSwicher = () => {
  const { data } = useGetWorksapces();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer" />
      </div>
    </div>
  );
};
