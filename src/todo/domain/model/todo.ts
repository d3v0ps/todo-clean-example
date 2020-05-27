
import { AggregateRoot } from 'src/core/domain/models/aggregate-root';

import { TodoId } from './todo-id';
import { TodoTitle } from './todo-title';
import { TodoIsComplete } from './todo-is-complete';

import { TodoWasCreated, TodoWasCompleted } from '../event';
 
export class Todo extends AggregateRoot {

  private _todoId: TodoId;
  private _title: TodoTitle;
  private _isComplete: TodoIsComplete;


  public static add(
    todoId: TodoId,
    title: TodoTitle,
    isComplete: TodoIsComplete,
  ): Todo {
    const todo = new Todo();

    todo.apply(new TodoWasCreated(todoId.value, title.value, isComplete.value));

    return todo;
  }

  public static fromJSON(data: any) {
    const todo = new Todo();

    todo.apply(new TodoWasCreated(data.id, data.title, data.isComplete));

    return todo;
  }

  public aggregateId(): string {
    return this._todoId.value;
  }

  get id(): TodoId {
    return this._todoId;
  }

  get title(): TodoTitle {
    return this._title;
  }

  get isComplete(): TodoIsComplete {
    return this._isComplete;
  }

  toJSON() {
    return {
      id: this.id.value,
      title: this.title.value,
      isComplete: this.isComplete.value
    };
  }

  complete() {
    if (this._isComplete) {
      return;
    }

    this.apply(new TodoWasCompleted(this._todoId.value, this._isComplete.value));
  }

  private onTodoWasCreated(event: TodoWasCreated) {
    this._todoId = TodoId.fromString(event.id);
    this._title = TodoTitle.fromString(event.title);
    this._isComplete = TodoIsComplete.fromBoolean(event.isComplete);
  }

  private onTodoWasCompleted(event: TodoWasCompleted) {
    this._isComplete = TodoIsComplete.fromBoolean(event.isComplete);
  }
}