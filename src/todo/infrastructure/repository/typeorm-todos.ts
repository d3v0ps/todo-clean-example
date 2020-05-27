
import { EntityRepository, AbstractRepository, Connection } from 'src/core/infrastructure/repository';

import { Todo } from 'src/todo/domain/model/todo';
import { Todos, TODOS } from 'src/todo/domain/repository/todos';
import { TodoId } from 'src/todo/domain/model/todo-id';
import { TodoEntity } from './todo.entity';

@EntityRepository(TodoEntity)
export class TypeORMTodos extends AbstractRepository<TodoEntity> implements Todos {

  async find(todoId: TodoId): Promise<Todo> {
    const todo = await this.repository.findOne(todoId.value);
    return todo ? Todo.fromJSON(todo) : null;
  }
  
  async get(todoId: TodoId): Promise<Todo> {
    const todo = await this.repository.findOne(todoId.value);
    return todo ? Todo.fromJSON(todo) : null;
  }
  
  async save(todo: Todo) {
    this.repository.save(todo.toJSON());
  }

}

export const TodosProvider = {
  provide: TODOS,
  useFactory: (connection: Connection) => connection.getCustomRepository(TypeORMTodos),
  inject: [Connection],
};