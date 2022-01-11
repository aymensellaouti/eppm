import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";
import {LoggerService} from "../../services/logger.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private logger: LoggerService
  ) { }
  addTodo(todo: Todo):void {
    this.todos.push(todo);
  }
  loggerTodos(): void {
    this.logger.logger(this.todos);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index == -1) {
      return false;
    }
    this.todos.splice(index, 1);
    return true;
  }
}
