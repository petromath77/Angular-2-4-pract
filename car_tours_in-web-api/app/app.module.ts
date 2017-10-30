import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule }   from '@angular/http';

import { routingComponents } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SedanPipe } from './sedan.pipe';
import { HatchbackPipe } from './hatchback.pipe';
import { VagonPipe } from './vagon.pipe';
import { CarService } from './car.service';
import { CarDetailComponent } from './detail.component';

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations: [ AppComponent, routingComponents, SedanPipe, HatchbackPipe, VagonPipe],
    bootstrap:    [ AppComponent ],
    providers: [ CarService]
})
export class AppModule { }