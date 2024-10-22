import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-200 p-4 w-full">
      <Link href={"/"} className="flex gap-3 items-center justify-between">
        <Image src="/logo.svg" alt="" width={60} height={48} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
