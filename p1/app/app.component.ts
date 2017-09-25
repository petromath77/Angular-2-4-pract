import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                  <p [style.fontWeight]="boldWeihgt? 'bold' : 'none'">Hello Angular 2</p>
                  <p>Angular 2 представляет модульную архитектуру приложения</p>
               </div>
               <button (click)="clickMe(dataInp.value)">Click Me</button>
               <input type="text" #dataInp>
               <ul>
                   <li *ngFor="let color of colors">{{color}}</li>
               </ul>
               <child-comp></child-comp>`,
    styles: ["p{font-size:20px;}"]
})
export class AppComponent {
    private boldWeihgt: boolean = true;
    private colors = ["red", "green", "blue"];
    clickMe(value){
        console.log(value);
    }

}