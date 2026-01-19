import CheckBoxIcon from "@/components/icons/CheckboxIcon";
import Button from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Input from "@/components/ui/Input";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [editName, setEditName] = useState(name);

  const handleOpen = () => {
    setEditName(name);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (editName.trim() !== "") {
      onNameChange(editName);
      setIsOpen(false);
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
          onClick={handleOpen}
          className="font-bold text-[20px] underline cursor-pointer max-w-[80%] truncate"
        >
          {name}
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-slate-100">
          <DialogHeader>
            <DialogTitle>할 일 이름 수정</DialogTitle>
          </DialogHeader>

          <Input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="할 일 이름을 입력하세요"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button preset="delete">취소</Button>
            </DialogClose>
            <Button preset="completeActive" onClick={handleSubmit}>
              수정
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
