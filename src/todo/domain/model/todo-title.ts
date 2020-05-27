
import { ValueObject } from 'src/core/domain/models/value-object';

interface Props {
  value: string;
}

export class TodoTitle extends ValueObject<Props> {
  public static fromString(todoTitle: string): TodoTitle {
    return new TodoTitle({ value: todoTitle });
  }

  get value(): string {
    return this.props.value;
  }
}