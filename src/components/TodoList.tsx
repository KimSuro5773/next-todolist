import { ListType, TodoData } from "@/types/todo";
import TodoItem from "./TodoItem";
import EmptyList from "./EmptyList";

interface TodoListProps {
  todos: TodoData[];
  onToggle: (id: number) => void;
  type: ListType;
}

export default function TodoList({ todos, onToggle, type }: TodoListProps) {
  if (todos.length === 0) {
    return <EmptyList type={type} />;
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
      ))}
    </div>
  );
}
