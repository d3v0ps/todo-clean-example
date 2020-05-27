
import { ICommand } from 'src/core/application/commands';

export class CreateTodoCommand implements ICommand {
  constructor(
    public readonly todoId: string,
    public readonly title: string,
  ) {}
}