import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { CarService} from './car.service';
import { Car } from './car';

@Component({
    templateUrl: './templates/hatchback.html',
    providers: [CarService]
})


export class HatchComponent implements OnInit{
    cars: Car[]=[];
    
    constructor(private carService: CarService){}
    ngOnInit(): void {
        this.carService.getData()
        .subscribe((data: Response) => this.cars=data.json());
    }

}
