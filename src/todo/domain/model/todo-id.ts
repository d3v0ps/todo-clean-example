
import { ValueObject } from 'src/core/domain/models/value-object';

interface Props {
  value: string;
}

export class TodoId extends ValueObject<Props> {
  public static fromString(todoId: string): TodoId {
    return new TodoId({ value: todoId });
  }

  get value(): string {
    return this.props.value;
  }
}