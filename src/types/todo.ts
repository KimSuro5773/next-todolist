export interface TodoData {
  isCompleted: boolean;
  name: string;
  id: number;
}

export interface DetailTodoData {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
}

export interface UpdateTodoRequest {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

export type ListType = "todo" | "done";
