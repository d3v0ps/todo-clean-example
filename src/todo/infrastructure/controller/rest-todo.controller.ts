import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Post,
  Put,
  Query,
  ApiOperation, 
  ApiResponse,
} from 'src/core/infrastructure/controller';

import { TodoService } from '../service/todo.service';
import { CreateTodoDTO } from '../dto/create-todo.dto';

import { TodoIdAlreadyRegisteredError } from 'src/todo/domain/exception';

@Controller('todos')
export class RestTodoController {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @ApiOperation({ summary: 'Create Todo' })
  @ApiResponse({ status: 204, description: 'Create Todo.' })
  @HttpCode(204)
  @Post()
  async createTodo(@Body() dto: CreateTodoDTO): Promise<CreateTodoDTO> {
    try {
      return await this.todoService.createTodo(
        dto.id,
        dto.title,
      );
    } catch (e) {
      if (e instanceof TodoIdAlreadyRegisteredError) {
        throw new ConflictException(e.message);
      } else if (e instanceof Error) {
        throw new BadRequestException(`Unexpected error: ${e.message}`);
      } else {
        throw new BadRequestException('Server error');
      }
    }
  }
}