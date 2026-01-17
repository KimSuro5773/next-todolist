export interface TodoData {
  isCompleted: boolean;
  name: string;
  id: number;
}

export interface UpdateTodoRequest {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}
