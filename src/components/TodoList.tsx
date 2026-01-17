import { TodoData } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: TodoData[];
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
      ))}
    </div>
  );
}
