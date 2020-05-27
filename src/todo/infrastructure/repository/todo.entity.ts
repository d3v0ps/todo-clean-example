
import { Entity, PrimaryColumn, Column } from 'src/core/infrastructure/repository';

@Entity('todo')
export class TodoEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  isComplete: boolean;

}