import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto/create-todo.dto';
@Controller('todos')
export class TodosController {
    @Get()
    findAll() {
        return 'lấy tất cả todos';
    }
    @Get(':id')
    getTodoById(@Param('id') id: string) {
        return id;
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
        return createTodoDto.title;
    }
    // @Post()
    // create(
    //     @Body() body: any,
    //     @Headers('authorization') auth: string,
    // ) {
    //     if (auth) {
    //         return 'đã tạo todo: ' + body.title;
    //     }
    //     return 'bạn chưa đăng nhập';
    // }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return `update todo ${id} với body: ${JSON.stringify(body)}`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `delete todo ${id}`;
    }

}