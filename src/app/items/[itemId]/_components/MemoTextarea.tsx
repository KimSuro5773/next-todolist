"use client";

interface MemoTextarea {
  memo: string;
  onMemoChange: (memo: string) => void;
}

export default function MemoTextarea({ memo, onMemoChange }: MemoTextarea) {
  return (
    <div
      className="lg:flex-1 flex flex-col h-77.75 rounded-3xl bg-cover bg-no-repeat space-y-4"
      style={{ backgroundImage: "url(/todo/memo.svg)" }}
    >
      <label htmlFor="memoTextAreaId" className="text-amber-800 font-extrabold text-center mt-6">
        Memo
      </label>
      <textarea
        id="memoTextAreaId"
        value={memo ?? ""}
        onChange={(e) => onMemoChange(e.target.value)}
        className="flex-1 resize-none px-4 pb-6 outline-none custom-scrollbar"
      ></textarea>
    </div>
  );
}
