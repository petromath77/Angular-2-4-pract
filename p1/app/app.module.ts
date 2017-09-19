import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {BoldDirective} from "./bold.directive";
//import { ChildComponent } from './child.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, BoldDirective],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }