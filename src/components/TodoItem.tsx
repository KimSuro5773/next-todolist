import { TodoData } from "@/types/todo";
import CheckBoxIcon from "./icons/CheckboxIcon";
import Link from "next/link";

interface TodoItemProps extends TodoData {
  onToggle: (id: number) => void;
}

export default function TodoItem({ isCompleted, name, id, onToggle }: TodoItemProps) {
  const handleCheckboxClick = () => {
    onToggle(id);
  };

  return (
    <div
      className={`w-full flex flex-1 items-center rounded-[27px] px-3 py-2.25 gap-4 border-2 border-slate-900 ${isCompleted ? "bg-violet-100" : "bg-white"}`}
    >
      <button onClick={handleCheckboxClick} className="cursor-pointer">
        <CheckBoxIcon checked={isCompleted} />
      </button>

      <Link
        href={`/items/${id}`}
        className={`flex-1 truncate ${isCompleted ? "line-through" : ""}`}
      >
        {name}
      </Link>
    </div>
  );
}
