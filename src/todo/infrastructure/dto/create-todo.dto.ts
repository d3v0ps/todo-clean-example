import { ApiProperty } from 'src/core/infrastructure/dto';

export class CreateTodoDTO {

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}