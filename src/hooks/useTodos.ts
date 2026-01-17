import { toggleTodo } from "@/actions/todo";
import { TodoData } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodos(initialData: TodoData[]) {
  return useQuery<TodoData[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

      return response.json();
    },
    initialData,
  });
}

export function useToggleTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, isCompleted }: { itemId: number; isCompleted: boolean }) =>
      toggleTodo(itemId, isCompleted),

    onMutate: async ({ itemId, isCompleted }) => {
      // 기존 쿼리 중단
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // 이전 캐시 저장
      const prevTodos = queryClient.getQueryData<TodoData[]>(["todos"]);

      // 캐시 수정 (낙관적 업데이트)
      queryClient.setQueryData<TodoData[]>(["todos"], (prev) =>
        prev?.map((todo) => (todo.id === itemId ? { ...todo, isCompleted } : todo)),
      );

      return { prevTodos };
    },

    // 요청 실패시 캐시 롤백
    onError: (error, variables, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(["todos"], context.prevTodos);
      }
    },

    // 서버 데이터와 동기화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
