
import { DomainEvent } from 'src/core/domain/models/domain-event';

export class TodoWasCreated implements DomainEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly isComplete: boolean,
  ) {}
}