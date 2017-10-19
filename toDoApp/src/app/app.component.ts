import { Component } from '@angular/core';

const todos=[
  'Изучить Angular2',
  'Изучить Javascript',
  'Написат приложение',
  'Захватить Вселенную'
]

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'toDoApp';
  todos = todos;
}
