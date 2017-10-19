import { Component, OnInit } from '@angular/core';
import { HatchComponent } from './hatch.component';
import { SedanComponent } from './sedan.component';
import { VagonComponent } from './vagon.component';
import {ActivatedRoute} from '@angular/router'
import { Car } from './car';


@Component({
    templateUrl: './templates/detail.html',
    
})

export class DetailComponent implements OnInit {
    car: Car;
    
    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.car = this.route.snapshot.data['product'];
    }
}






