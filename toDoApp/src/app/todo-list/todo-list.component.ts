import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
  })

  export class TodoListComponent implements OnInit{

    constructor(private todoService: TodoService){
      this.todos = [];
    }
    ngOnInit(){
      this.todoService.getTodos().then(todos => this.todos = todos);
    }

      todos: Todo[];
    
      delete(todo: Todo){
        this.todoService.deleteTodo(todo);
      }
      toggle(todo: Todo){
        this.todoService.toggleTodo(todo);
      }
  }