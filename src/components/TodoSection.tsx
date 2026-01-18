"use client";

import Image from "next/image";
import { TodoData } from "@/types/todo";
import TodoList from "./TodoList";
import { startTransition, useOptimistic } from "react";
import { toggleTodo } from "@/actions/todo";

export default function TodoSection({ initialTodos }: { initialTodos: TodoData[] }) {
  const [optimisticTodos, updateOptimistic] = useOptimistic(
    initialTodos,
    (state, updatedTodo: { id: number; isCompleted: boolean }) =>
      state.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, isCompleted: updatedTodo.isCompleted } : todo,
      ),
  );

  const handleToggle = async (id: number) => {
    const todo = optimisticTodos.find((t) => t.id === id);
    if (!todo) return;

    const newCompleted = !todo.isCompleted;

    startTransition(() => {
      updateOptimistic({ id, isCompleted: newCompleted });
    });

    await toggleTodo(id, newCompleted);
  };

  const todoList = optimisticTodos.filter((t) => !t.isCompleted);
  const doneList = optimisticTodos.filter((t) => t.isCompleted);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 mb-12">
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
