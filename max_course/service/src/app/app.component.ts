import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Repositories</h1>
      <ul *ngFor="let repo of repos">
        <li>{{repo.id}} => {{repo.full_name}}</li>
      </ul>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   repos = [
     {id:'1', full_name: 'test1'},
     {id:'2', full_name: 'test2'},
     {id:'3', full_name: 'test3'},
     {id:'4', full_name: 'test4'},
     {id:'5', full_name: 'test5'}
   ];
}
