import CheckBoxIcon from "@/components/icons/CheckboxIcon";

interface TodoDetailHeaderProps {
  name: string;
  isCompleted: boolean;
  onNameChange: (name: string) => void;
  onToggle: () => void;
}

export default function TodoDetailHeader({
  name,
  isCompleted,
  onNameChange,
  onToggle,
}: TodoDetailHeaderProps) {
  const handleEdit = () => {
    const newName = window.prompt("할 일 이름 수정", name);
    if (newName !== null && newName.trim() !== "") {
      onNameChange(newName);
    }
  };

  return (
    <div
      className={`w-full gap-4 flex items-center rounded-[27px] mt-6 px-3 py-2.25 border-2 border-slate-900 ${isCompleted ? "bg-violet-100" : "bg-white"}`}
    >
      <div className="flex items-center justify-center gap-4 w-full">
        <button onClick={onToggle}>
          <CheckBoxIcon checked={isCompleted} />
        </button>

        <button
          onClick={handleEdit}
          className="font-bold text-[20px] underline cursor-pointer max-w-[80%] truncate"
        >
          {name}
        </button>
      </div>
    </div>
  );
}
