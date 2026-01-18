import { ListType } from "@/types/todo";

export default function EmptyList({ type }: { type: ListType }) {
  const smallEmptyImgSrc =
    type === "todo" ? "/todo/Small_todoEmpty.svg" : "/todo/Small_doneEmpty.svg";

  const largeEmptyImgSrc =
    type === "todo" ? "/todo/Large_todoEmpty.svg" : "/todo/Large_doneEmpty.svg";

  const message =
    type === "todo"
      ? "할 일이 없어요.\n새로운 할 일을 추가해보세요!"
      : "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!";

  return (
    <div className="flex flex-col items-center gap-6">
      <picture>
        <source media="(min-width: 640px)" srcSet={largeEmptyImgSrc} />
        <img
          src={smallEmptyImgSrc}
          alt={`${type} list is empty`}
          className="w-30 h-30 sm:w-60 sm:h-60"
        />
      </picture>
      <p className="font-bold text-slate-400 whitespace-pre-line text-center">{message}</p>
    </div>
  );
}
