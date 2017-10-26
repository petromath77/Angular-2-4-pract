import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule }   from '@angular/http';
import { SedanPipe } from './sedan.pipe';
import { HatchbackPipe } from './hatchback.pipe';
import { VagonPipe } from './vagon.pipe';
import { CarService } from './car.service';
import { routingComponents } from './app-routing.module';
@NgModule({
    imports:      [ BrowserModule, AppRoutingModule, HttpModule],
    declarations: [ AppComponent, routingComponents, SedanPipe, HatchbackPipe, VagonPipe],
    bootstrap:    [ AppComponent ],
    providers: [ CarService ]
})
export class AppModule { }