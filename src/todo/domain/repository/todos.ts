import { TodoId } from '../model/todo-id';
import { Todo } from '../model/todo';

export interface Todos {
  find(todoId: TodoId): Promise<Todo>;
  get(todoId: TodoId): Promise<Todo>;
  save(todo: Todo): void;
}

export const TODOS = 'todos';