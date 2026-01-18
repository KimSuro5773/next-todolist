import { DetailTodoData } from "@/types/todo";
import DetailForm from "./_components/DetailForm";

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${itemId}`, {
    next: { tags: [`todo-${itemId}`] },
  });
  if (!response.ok) throw new Error(response.statusText);

  const detailTodoData: DetailTodoData = await response.json();

  return (
    <div className="bg-white flex-1 flex flex-col">
      <DetailForm detailTodoData={detailTodoData} />
    </div>
  );
}
