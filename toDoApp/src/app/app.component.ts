import { Component } from '@angular/core';

class Todo{
  constructor(public title: string, public completed: boolean = false){
  }
}

const todos=[
  {
    title: 'Изучить Angular2',
    completed: true
  },
  {
    title: 'Изучить Javascript',
    completed: false
  },
  {
    title: 'Написат приложение',
    completed: false
  },
  {
    title: 'Захватить Вселенную',
    completed: false
  }
  
]

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'toDoApp';
  todos: Todo[]= todos;

  toggle(todo: Todo){
   todo.completed = !todo.completed;
  }
  delete(todo: Todo){
    let index = this.todos.indexOf(todo);

    if(index > -1){
      this.todos.splice(index, 1);
    }
  }
  create(event: Event, title: string){
    event.preventDefault();
    let todo: Todo = new Todo(title);
    this.todos.push(todo);
  }
}
