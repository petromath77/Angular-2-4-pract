import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
  })

  export class TodoFormComponent{
    title: string = '';

    @Output() add = new EventEmitter();

    onSubmit(){
        this.add.emit(this.title);
      }
  }