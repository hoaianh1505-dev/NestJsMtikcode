import { TodoPriority } from "src/todos/todo-priority.enum";
import { TodoStatus } from "src/todos/todo-status.enum";

export class CreateTodoDto {
    title: string;
    description?: string;
    status?: TodoStatus;
    priority?: TodoPriority;
    categoryId?: number;
}
