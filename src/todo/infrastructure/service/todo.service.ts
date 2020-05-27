import { Injectable } from 'src/core';
import { CommandBus } from 'src/core/infrastructure/service';

import { CreateTodoCommand } from 'src/todo/application/command/create-todo.command';

@Injectable()
export class TodoService {

  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  async createTodo(id: string, title: string) {
    return this.commandBus.execute(new CreateTodoCommand(id, title));
  }

}