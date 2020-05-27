
import { DomainEvent } from 'src/core/domain/models/domain-event';

export class TodoWasCompleted implements DomainEvent {
  constructor(
    public readonly id: string,
    public readonly isComplete: boolean,
  ) {}
}