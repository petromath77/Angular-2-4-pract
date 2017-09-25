import { Component, ContentChild } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>{{title}}</h2>   
               <img [src]="imgLink" alt="{{title}}">
               `,
    styles: ["h2{color: #ccc;}"]
})
export class ChildComponent{
    public title = "ComponentChild";
    public imgLink = "http://lorempixel.com/400/200/";
}