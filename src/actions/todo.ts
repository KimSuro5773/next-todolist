"use server";

import { UpdateTodoRequest } from "@/types/todo";
import { updateTag } from "next/cache";

// Todo 수정
export async function updateTodo(itemId: number, data: UpdateTodoRequest) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

// Todo 등록
export async function createTodo(
  prevState: { status: boolean; error: string } | null,
  formData: FormData,
) {
  const name = formData.get("name")?.toString();

  if (!name?.trim()) {
    return { status: false, error: "할 일을 입력해주세요" };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) throw new Error(response.statusText);

    updateTag("todos");
    return { status: true, error: "" };
  } catch (error) {
    return { status: false, error: `할 일 추가 실패: ${error}` };
  }
}

// TodoList 완료상태 토글용
export async function toggleTodo(itemId: number, isCompleted: boolean) {
  const result = await updateTodo(itemId, { isCompleted });
  updateTag("todos");

  return result;
}
