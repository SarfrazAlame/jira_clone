"use client";

import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorksapces } from "@/features/workspaces/api/use-get-workspaces";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { WorkspacesAvatar } from "@/features/workspaces/components/workspace-avatar";

export const WorkspaceSwicher = () => {
  const { data: workspace } = useGetWorksapces();
  
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer" />
      </div>

      <Select>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {
            workspace?.documents.map((worksapce) => (
              <SelectItem key={worksapce.$id} value={worksapce.$id}>
                <div className="flex justify-start items-center gap-3 font-medium">
                  <WorkspacesAvatar name={worksapce.name} image={worksapce.imageUrl} />
                  <span className="truncate">{worksapce.name}</span>
                </div>
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  );
};
