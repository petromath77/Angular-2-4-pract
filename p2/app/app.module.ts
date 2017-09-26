import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ChildComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }