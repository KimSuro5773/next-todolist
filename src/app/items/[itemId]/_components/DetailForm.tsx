"use client";

import { DetailTodoData } from "@/types/todo";
import { useState } from "react";
import TodoDetailHeader from "./TodoDetailHeader";
import ImageUpload from "./ImageUpload";
import MemoTextarea from "./MemoTextarea";
import Button from "@/components/ui/Button";
import { deleteTodo, updateTodo } from "@/actions/todo";
import { useRouter } from "next/navigation";

export default function DetailForm({
  detailTodoData,
  itemId,
}: {
  detailTodoData: DetailTodoData;
  itemId: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formState, setFormState] = useState<DetailTodoData>(detailTodoData);
  const router = useRouter();

  const isEdited =
    formState.name !== detailTodoData.name ||
    formState.isCompleted !== detailTodoData.isCompleted ||
    formState.memo !== detailTodoData.memo ||
    formState.imageUrl !== detailTodoData.imageUrl;

  const handleNameChange = (name: string) => {
    setFormState((prev) => ({ ...prev, name }));
  };

  const handleToggle = () => {
    setFormState((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const handleMemoChange = (memo: string) => {
    setFormState((prev) => ({ ...prev, memo }));
  };

  const handleImageChange = (imageUrl: string) => {
    setFormState((prev) => ({ ...prev, imageUrl }));
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTodo(Number(itemId));
    router.replace("/");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await updateTodo(Number(itemId), {
      name: formState.name,
      memo: formState.memo || "",
      imageUrl: formState.imageUrl || "",
      isCompleted: formState.isCompleted,
    });
    router.replace("/");
  };

  return (
    <div className="space-y-6">
      <TodoDetailHeader
        name={formState.name}
        isCompleted={formState.isCompleted}
        onNameChange={handleNameChange}
        onToggle={handleToggle}
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <ImageUpload imageUrl={formState.imageUrl} onImageChange={handleImageChange} />
        <MemoTextarea memo={formState.memo} onMemoChange={handleMemoChange} />
      </div>

      <div className="flex justify-center gap-4 mb-34.75 lg:justify-end">
        <Button
          onClick={handleSubmit}
          preset={isEdited ? "completeActive" : "complete"}
          loading={isSubmitting}
          disabled={!isEdited || isSubmitting || isDeleting}
        >
          수정 완료
        </Button>
        <Button
          preset="delete"
          onClick={handleDelete}
          loading={isDeleting}
          disabled={isSubmitting || isDeleting}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
}
