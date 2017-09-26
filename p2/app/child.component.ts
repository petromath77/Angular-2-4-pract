import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>Child Component</h2>
                <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
                <p>Value from Parent Comp is </p>`

})
export class ChildComponent{
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){

        this.userName = model;
        this.userNameChange.emit(model);
    }
}