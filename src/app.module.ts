import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [TodosModule],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule { }
