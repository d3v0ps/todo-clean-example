import { Module } from '@nestjs/common';
import { TypeOrmModule } from 'src/core/module';

import { TodoModule } from './todo/todo.module';
import { TodoEntity } from './todo/infrastructure/repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.cwd()}/data/todos.sqlite`,
      entities: [TodoEntity],
      synchronize: true,
      logging: true
    }),
    TodoModule
  ]
})
export class AppModule {}
