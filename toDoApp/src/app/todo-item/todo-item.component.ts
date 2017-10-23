import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/todo';
import { todos } from '../shared/data';


@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
  })

  export class TodoItemComponent{
        @Input() todo: Todo;

        @Output() delete = new EventEmitter();

        toggle(){
            this.todo.completed = !this.todo.completed;
        }
        onDelete(){
            this.delete.emit(this.todo);
        }
  }