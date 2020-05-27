

import { Module, OnModuleInit } from 'src/core';
import { CqrsModule, TypeOrmModule } from 'src/core/module';

import { CommandHandlers } from './application/command';

import { RestTodoController } from './infrastructure/controller';
import { TodoEntity, TodosProvider } from './infrastructure/repository';
import { TodoService } from './infrastructure/service';

@Module({
  controllers: [RestTodoController],
  imports: [
    CqrsModule, 
    TypeOrmModule.forFeature([TodoEntity])
    // DatabaseModule, 
    // EventStoreModule.forRoot()
  ],
  providers: [
    ...CommandHandlers,
    // ...ProjectionHandlers,
    TodosProvider,
    TodoService,
    // TodoEventStore,
  ],
})
export class TodoModule implements OnModuleInit {
  // constructor(private readonly eventStore: EventStore) {}

  onModuleInit() {
    // this.eventStore.addEventHandlers(todoEventHandlers);
  }
}