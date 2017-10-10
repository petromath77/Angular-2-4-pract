import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div *ngIf='people.length == 0'>No people!</div>
      <ul>
        <li *ngFor='let person of people'>
        {{person.name}} is {{person.age}} years.
        </li>
      </ul>
      <button (click)='loadPeople()' [class.btn-awesome]='isAwesome'>Load People</button>
    `,
})
export class AppComponent{
  people: Array<any> = [];
  isAwesome = false;
  
  loadPeople(){
    this.people = [
      {name: "Anna", age: 32},
      {name: "Sasha", age: 35},
      {name: "Nick", age: 34}
    ];
    this.isAwesome = true;
  }
}
