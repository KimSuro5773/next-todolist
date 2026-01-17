import TodoSection from "@/components/TodoSection";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { TodoData } from "@/types/todo";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const initialTodos: TodoData[] = await response.json();

  return (
    <div className="mt-6">
      <div className="flex gap-4 mb-10">
        <Input type="text" placeholder="할 일을 입력해주세요" className="flex-1" />
        <Button preset="add">
          <span>추가하기</span>
        </Button>
      </div>

      <TodoSection initialTodos={initialTodos} />
    </div>
  );
}
