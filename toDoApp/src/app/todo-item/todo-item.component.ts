import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/todo';


@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
  })

  export class TodoItemComponent{
        @Input() todo: Todo;

        @Output() delete = new EventEmitter();
        @Output() toggle = new EventEmitter();

        onToggle(){
            this.toggle.emit(this.todo);
        }
        onDelete(){
            this.delete.emit(this.todo);
        }
  }