import { DetailTodoData } from "@/types/todo";
import DetailForm from "./_components/DetailForm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ itemId: string }>;
}): Promise<Metadata> {
  const { itemId } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    next: { tags: [`todo-${itemId}`] },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return {
        title: "할 일을 찾을 수 없습니다 - do it",
      };
    }
    throw new Error(response.statusText);
  }

  const detailTodoData: DetailTodoData = await response.json();

  return {
    title: `${detailTodoData.name} - do it`,
    description: `${detailTodoData.name}의 상세 페이지`,
    icons: "/favicon/favicon.svg",
    openGraph: {
      title: `${detailTodoData.name} - do it`,
      description: `${detailTodoData.name}의 상세 페이지`,
      images: [detailTodoData.imageUrl],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items/${itemId}`, {
    next: { tags: [`todo-${itemId}`] },
  });

  if (!response.ok) {
    if (response.status === 404) notFound();

    throw new Error(response.statusText);
  }

  const detailTodoData: DetailTodoData = await response.json();

  return (
    <div className="bg-white flex-1 flex flex-col px-4 md:px-6 lg:px-25.5">
      <DetailForm detailTodoData={detailTodoData} itemId={itemId} />
    </div>
  );
}
