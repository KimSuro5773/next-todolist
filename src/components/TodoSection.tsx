"use client";

import Image from "next/image";
import { TodoData } from "@/types/todo";
import { useTodos, useToggleTodo } from "@/hooks/useTodos";
import TodoList from "./TodoList";

export default function TodoSection({ initialTodos }: { initialTodos: TodoData[] }) {
  const { data: todos } = useTodos(initialTodos);
  const toggleMutation = useToggleTodo();

  const handleToggle = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      toggleMutation.mutate({ itemId: id, isCompleted: !todo.isCompleted });
    }
  };

  const todoList = todos.filter((t) => !t.isCompleted) ?? [];
  const doneList = todos.filter((t) => t.isCompleted) ?? [];

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-6">
      <section className="space-y-4 flex-1">
        <Image src={"/todo/todo.svg"} alt="todo list" width={100} height={36} />
        <TodoList todos={todoList} onToggle={handleToggle} type={"todo"} />
      </section>
      <section className="space-y-4 flex-1">
        <Image src={"/todo/done.svg"} alt="todo done list" width={100} height={36} />
        <TodoList todos={doneList} onToggle={handleToggle} type={"done"} />
      </section>
    </div>
  );
}
