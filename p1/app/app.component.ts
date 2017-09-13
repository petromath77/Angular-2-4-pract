import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    name= 'wwrty';
    title = "My first app";
    count: number=0;
    increase(): void{
        this.count++;
    }
}