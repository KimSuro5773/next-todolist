"use server";

import { UpdateTodoRequest } from "@/types/todo";
import { updateTag } from "next/cache";

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

// Todo 수정
export async function updateTodo(itemId: number, data: UpdateTodoRequest) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(response.statusText);

  updateTag("todos");
  updateTag(`todo-${itemId}`);

  return response.json();
}

// Todo 삭제
export async function deleteTodo(itemId: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error(response.statusText);

  updateTag(`todo-${itemId}`);
  return;
}

// Todo 이미지 업로드
export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;
  if (!file) throw new Error("파일이 없습니다.");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/images/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("이미지 업로드 실패");
  }

  const data = await response.json();
  return data.url;
}

// TodoList 완료상태 토글용
export async function toggleTodo(itemId: number, isCompleted: boolean) {
  const result = await updateTodo(itemId, { isCompleted });
  updateTag("todos");

  return result;
}
