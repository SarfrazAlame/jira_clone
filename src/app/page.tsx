import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      Hello World
      <Button variant={"primary"}>Click me</Button>
      <Button variant={"destructive"}>Click me</Button>
      <Button variant={"muted"}>Click me</Button>
      <Button variant={"teritary"}>Click me</Button>
    </div>
  );
}
