
import { ValueObject } from 'src/core/domain/models/value-object';

interface Props {
  value: boolean;
}

export class TodoIsComplete extends ValueObject<Props> {
  public static fromBoolean(todoIsCompleted: boolean): TodoIsComplete {
    return new TodoIsComplete({ value: todoIsCompleted });
  }

  get value(): boolean {
    return this.props.value;
  }
}