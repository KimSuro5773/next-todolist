import TodoInput from "@/components/TodoInput";
import TodoSection from "@/components/TodoSection";
import { TodoData } from "@/types/todo";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`, {
    next: { tags: ["todos"] },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const initialTodos: TodoData[] = await response.json();

  return (
    <div className="mt-6">
      <TodoInput />
      <TodoSection initialTodos={initialTodos} />
    </div>
  );
}
