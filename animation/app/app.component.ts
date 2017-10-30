import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group
} from '@angular/animations';

@Component({
    selector: 'my-app',
    template: `<h1>Angular Animation</h1>
                <button (click)="toggle()">Toggle</button>
                <div *ngIf="showDiv" [@flyInOut]>
                    FLYOUT
                </div>
                `,
    animations: [
        trigger('flyInOut', [
            transition('void => *', [
                style({transform: 'translateY(100%)'}),
                animate('0.5s')
            ])
        ])
    ]
})
export class AppComponent {
    showDiv: boolean = true;
    toggle(){
        this.showDiv = this.showDiv;
    }
}
