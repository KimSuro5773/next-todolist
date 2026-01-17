"use server";

import { UpdateTodoRequest } from "@/types/todo";

export async function updateTodo(itemId: number, data: UpdateTodoRequest) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

// TodoList 완료상태 토글용
export async function toggleTodo(itemId: number, isCompleted: boolean) {
  return updateTodo(itemId, { isCompleted });
}
