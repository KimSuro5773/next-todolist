"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { createTodo } from "@/actions/todo";

export default function TodoInput() {
  const [state, formAction, isPending] = useActionState(createTodo, null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (state?.status) {
      startTransition(() => {
        setInputValue("");
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="flex gap-4 mb-10">
      <Input
        name="name"
        type="text"
        placeholder="할 일을 입력해주세요"
        className="flex-1"
        disabled={isPending}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        preset={inputValue.trim() ? "addPrimary" : "add"}
        type="submit"
        disabled={isPending || !inputValue.trim()}
      >
        <span>추가하기</span>
      </Button>
    </form>
  );
}
