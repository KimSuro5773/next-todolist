import { DetailTodoData } from "@/types/todo";
import DetailForm from "./_components/DetailForm";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    next: { tags: [`todo-${itemId}`] },
  });

  if (!response.ok) {
    if (response.status === 404) redirect("/");

    throw new Error(response.statusText);
  }

  const detailTodoData: DetailTodoData = await response.json();

  return (
    <div className="bg-white flex-1 flex flex-col px-4 md:px-6 lg:px-25.5">
      <DetailForm detailTodoData={detailTodoData} itemId={itemId} />
    </div>
  );
}
