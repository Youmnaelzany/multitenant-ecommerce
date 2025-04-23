import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4">
      <div className="">
        <Button variant={"neutral"}>I am a button</Button>
      </div>
      <div className="">
        <Input placeholder="I am an input" />
      </div>
      <div className="">
        <Progress value={50} />
      </div>
      <div className="">
        <Textarea placeholder="I am a textarea" />
      </div>
      <div className="">
        <Checkbox value="I am a checkbox" />
      </div>
    </main>
  );
}
