import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group
} from '@angular/animations';﻿

@Component({
    selector: 'my-app',
    template: `<h1>Angular Animation</h1>
                <button (click)="toggle()">Toggle</button>
                <div [@lightsOnOff]="roomState" class="room"></div>
                `,
    animations: [
        trigger('lightsOnOff', [
            state('off', style({
                backgroundColor: 'black'
            })),
            state('on', style({
                backgroundColor: 'white'
            })),
            transition('off => on', [animate('2s')]),
            transition('on => off', [animate('2s')])
        ])
    ]

})
export class AppComponent {
    roomState: string="off";
    toggle(){
        this.roomState = (this.roomState === "off")? "on" : "off";
    }
}
