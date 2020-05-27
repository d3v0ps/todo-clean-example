
import { Inject } from 'src/core';
import { CommandHandler, ICommandHandler } from 'src/core/application/commands';

import { 
  TODOS, 
  Todos 
} from 'src/todo/domain/repository';

import { 
  Todo,
  TodoId,
  TodoIsComplete,
  TodoTitle
} from 'src/todo/domain/model';

import { 
  TodoIdAlreadyRegisteredError 
} from 'src/todo/domain/exception';

import { CreateTodoCommand } from './create-todo.command';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(
    @Inject(TODOS) private readonly todos: Todos,
  ) {}

  async execute(command: CreateTodoCommand) {
    const todoId = TodoId.fromString(command.todoId);
    const title = TodoTitle.fromString(command.title);
    const isComplete = TodoIsComplete.fromBoolean(false);

    if ((await this.todos.find(todoId)) instanceof Todo) {
      throw TodoIdAlreadyRegisteredError.withString(command.todoId);
    }

    const todo = Todo.add(todoId, title, isComplete);

    this.todos.save(todo);
  }
}