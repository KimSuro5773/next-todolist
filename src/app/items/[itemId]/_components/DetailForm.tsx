"use client";

import Button from "@/components/ui/Button";
import { DetailTodoData } from "@/types/todo";
import { useState } from "react";

export default function DetailForm({ detailTodoData }: { detailTodoData: DetailTodoData }) {
  const [formState, setFormState] = useState<DetailTodoData>(detailTodoData);

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

  return (
    <div>
      <Button preset={isEdited ? "completeActive" : "complete"}>수정 완료</Button>
    </div>
  );
}
