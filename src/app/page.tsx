import TodoInput from "@/components/TodoInput";
import TodoSection from "@/components/TodoSection";
import { TodoData } from "@/types/todo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "do it",
  description: "do it에서 할 일을 관리하고 기록해보세요",
  icons: "/favicon/favicon.svg",
  openGraph: {
    title: "do it",
    description: "do it에서 할 일을 관리하고 기록해보세요",
    images: ["/logo/Large_Logo.svg"],
  },
};

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/items?pageSize=50`, {
    next: { tags: ["todos"], revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const initialTodos: TodoData[] = await response.json();

  return (
    <div className="mt-6 px-6 lg:px-4">
      <TodoInput />
      <TodoSection initialTodos={initialTodos} />
    </div>
  );
}
