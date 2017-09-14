import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>User name: {{ userName }}</p> 
               <p>User age: {{ userAge }}</p>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    _userName: string;
    _userAge: number;

    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }
    get userAge() { return this._userAge; }
    @Input()
    set userName(name:string){
        if(name == "")
            this._userName = "Your name"
        else
            this._userName = name;
    }
    get userName() { return this._userName; }
}