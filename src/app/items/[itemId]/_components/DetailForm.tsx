"use client";

import { DetailTodoData } from "@/types/todo";
import { useState } from "react";
import TodoDetailHeader from "./TodoDetailHeader";
import ImageUpload from "./ImageUpload";

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
    <div className="space-y-6">
      <TodoDetailHeader
        name={formState.name}
        isCompleted={formState.isCompleted}
        onNameChange={handleNameChange}
        onToggle={handleToggle}
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <ImageUpload imageUrl={formState.imageUrl} onImageChange={handleImageChange} />
      </div>
    </div>
  );
}
