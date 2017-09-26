import { Component } from '@angular/core';

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
               <p [class.oneClass]="showPar">I see paragraph</p>
               <button (click)="toggle()">Toggle!</button>
               <hr>
               <br>
               <br>
               <br>
               
               <h2>Parent App Component</h2>
               <label>Enter Parent Value</label>
               <input type="text">
               <p>Value from Child Comp is {{name}}</p>
               <child-comp [(userName)]="name"></child-comp>`,
    styles: [`.oneClass{font-style:italic;}`]
})
export class AppComponent {
    private boldWeihgt: boolean = true;
    private showPar: boolean = true;
    private colors = ["red", "green", "blue"];
    clickMe(value){
        console.log(value);
    }
    toggle(){
        this.showPar = !this.showPar;
    }
    public name: string;



}
