import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Car } from './car';
import { Router } from '@angular/router';
import { CarService } from './car.service';

@Component({
    templateUrl: './templates/sedan.html',
    providers: [HttpService]
})

export class SedanComponent implements OnInit{
    cars: Car[];
    
      constructor(
        private carService: CarService,
        private router: Router) { }
     
      getCars(): void {
        this.carService
            .getCars()
            .then(cars => this.cars = cars);
      }
     
      ngOnInit(): void {
        this.getCars();
      }

}