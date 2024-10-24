import { protect } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await protect();

  if (!user) redirect("/sign-in");

  return <div className="bg-neutral-500 p-2 h-full">
    <CreateWorkspaceForm />
  </div>;
}
